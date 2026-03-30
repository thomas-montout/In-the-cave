import { create } from "zustand";
import { weapons, monsters, locations } from "../data/gameData";

type GameState = {
  // État du joueur
  health: number;
  gold: number;
  xp: number;
  currentWeapon: number;
  inventory: string[];

  // État du combat
  fighting: number;
  monsterHealth: number;
  showMonsterStats: boolean;

  // État de la location
  currentLocation: number;
  text: string;

  // Navigation
  goTown: () => void;
  goStore: () => void;
  goCave: () => void;

  // Boutique
  buyHealth: () => void;
  buyWeapon: () => void;
  sellWeapon: () => void;

  // Combat
  fightSlime: () => void;
  fightBeast: () => void;
  fightDragon: () => void;
  attack: () => void;
  dodge: () => void;

  // Fin de jeu
  restart: () => void;
};

function goToLocation(locationIndex: number): Partial<GameState> {
  return {
    currentLocation: locationIndex,
    text: locations[locationIndex].text,
    showMonsterStats: false,
  };
}

export const useGameStore = create<GameState>((set, get) => ({
  // État initial du joueur
  health: 100,
  gold: 50,
  xp: 0,
  currentWeapon: 0,
  inventory: ["Bâton"],

  // État initial du combat
  fighting: 0,
  monsterHealth: 0,
  showMonsterStats: false,

  // Location initiale : place du village
  currentLocation: 0,
  text: locations[0].text,

  // --- Navigation ---
  goTown: () => set(goToLocation(0)),
  goStore: () => set(goToLocation(1)),
  goCave: () => set(goToLocation(2)),

  // --- Boutique ---
  buyHealth: () => {
    const { gold } = get();
    if (gold >= 10) {
      set((state) => ({
        gold: state.gold - 10,
        health: state.health + 10,
      }));
    } else {
      set({ text: "Vous n'avez pas assez d'or pour acheter de la vie." });
    }
  },

  buyWeapon: () => {
    const { gold, currentWeapon, inventory } = get();
    if (currentWeapon < weapons.length - 1) {
      if (gold >= 30) {
        const newWeaponIndex = currentWeapon + 1;
        const newWeapon = weapons[newWeaponIndex].name;
        const newInventory = [...inventory, newWeapon];
        set({
          gold: gold - 30,
          currentWeapon: newWeaponIndex,
          inventory: newInventory,
          text:
            "Vous avez maintenant un " +
            newWeapon +
            ". Dans votre inventaire, vous avez : " +
            newInventory.join(", "),
        });
      } else {
        set({ text: "Vous n'avez pas assez d'or pour acheter une arme." });
      }
    } else {
      set({ text: "Vous avez déjà la plus puissante arme !" });
    }
  },

  sellWeapon: () => {
    const { inventory, gold } = get();
    if (inventory.length > 1) {
      const sold = inventory[0];
      const newInventory = inventory.slice(1);
      set({
        gold: gold + 15,
        inventory: newInventory,
        text:
          "Vous avez vendu un " +
          sold +
          ". Dans votre inventaire, vous avez : " +
          newInventory.join(", "),
      });
    } else {
      set({ text: "Ne vendez pas votre seule arme !" });
    }
  },

  // --- Combat ---
  fightSlime: () => {
    set({
      fighting: 0,
      monsterHealth: monsters[0].health,
      showMonsterStats: true,
      currentLocation: 3,
      text: locations[3].text,
    });
  },

  fightBeast: () => {
    set({
      fighting: 1,
      monsterHealth: monsters[1].health,
      showMonsterStats: true,
      currentLocation: 3,
      text: locations[3].text,
    });
  },

  fightDragon: () => {
    set({
      fighting: 2,
      monsterHealth: monsters[2].health,
      showMonsterStats: true,
      currentLocation: 3,
      text: locations[3].text,
    });
  },

  attack: () => {
    const { fighting, currentWeapon, xp, health, inventory } = get();
    const monster = monsters[fighting];

    // Dégâts du monstre
    const monsterAttack = monster.level * 5 - Math.floor(Math.random() * xp);
    const damage = monsterAttack > 0 ? monsterAttack : 0;
    const newHealth = health - damage;

    // Dégâts au monstre
    const isHit = Math.random() > 0.2 || health < 20;
    let newMonsterHealth = get().monsterHealth;
    let attackText =
      "Le " +
      monster.name +
      " attaque. Vous l'attaquez avec votre " +
      weapons[currentWeapon].name +
      ".";

    if (isHit) {
      newMonsterHealth -=
        weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;
    } else {
      attackText += " Vous avez raté.";
    }

    // Arme qui casse (10% de chance)
    const newInventory = [...inventory];
    let newCurrentWeapon = currentWeapon;
    if (Math.random() <= 0.1 && newInventory.length !== 1) {
      attackText += " Votre " + newInventory.pop() + " se casse.";
      newCurrentWeapon--;
    }

    // Vérifier mort du joueur
    if (newHealth <= 0) {
      set({
        health: 0,
        text: locations[6].text,
        currentLocation: 6, // lose
        showMonsterStats: false,
        inventory: newInventory,
        currentWeapon: newCurrentWeapon,
      });
      return;
    }

    // Vérifier mort du monstre
    if (newMonsterHealth <= 0) {
      const goldGain = Math.floor(monster.level * 6.7);
      if (fighting === 0) {
        // Slime vaincu
        set({
          health: newHealth,
          gold: get().gold + goldGain,
          xp: xp + monster.level,
          text: locations[5].text,
          currentLocation: 5, // kill slime
          showMonsterStats: false,
          inventory: newInventory,
          currentWeapon: newCurrentWeapon,
        });
      } else if (fighting === 1) {
        // Bête vaincue
        set({
          health: newHealth,
          gold: get().gold + goldGain,
          xp: xp + monster.level,
          text: locations[4].text,
          currentLocation: 4, // kill beast
          showMonsterStats: false,
          inventory: newInventory,
          currentWeapon: newCurrentWeapon,
        });
      } else if (fighting === 2) {
        // Dragon vaincu (victoire)
        set({
          text: locations[7].text,
          currentLocation: 7, // win
          showMonsterStats: false,
          inventory: newInventory,
          currentWeapon: newCurrentWeapon,
        });
      }
      return;
    }

    // Combat continue
    set({
      health: newHealth,
      monsterHealth: newMonsterHealth,
      text: attackText,
      inventory: newInventory,
      currentWeapon: newCurrentWeapon,
    });
  },

  dodge: () => {
    const { fighting } = get();
    set({
      text: "Vous esquivez l'attaque du " + monsters[fighting].name,
    });
  },

  // --- Fin de jeu ---
  restart: () => {
    set({
      xp: 0,
      health: 100,
      gold: 50,
      currentWeapon: 0,
      inventory: ["Bâton"],
      fighting: 0,
      monsterHealth: 0,
      showMonsterStats: false,
      ...goToLocation(0),
    });
  },
}));
