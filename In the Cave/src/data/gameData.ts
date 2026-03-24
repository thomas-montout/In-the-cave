import type { Weapon, Monster, Location } from "../types/game";
import dragon from "../assets/dragon.png";
import slime from "../assets/trucgluant.png";
import beast from "../assets/betechelou.png";
import village from "../assets/village.png";
import store from "../assets/boutique.png";
import cave from "../assets/cave.png";
import fight from "../assets/fight.png";
import monsterDeath from "../assets/monstremort.png";
import lose from "../assets/lose.png";
import win from "../assets/win.png";

export const weapons: Weapon[] = [
  { name: "Bâton", power: 5 },
  { name: "Dague", power: 30 },
  { name: "Marteau de guerre", power: 50 },
  { name: "Épée", power: 100 },
];

export const monsters: Monster[] = [
  { name: "Gros truc gluant", level: 2, health: 15, image: slime },
  {
    name: "Bête chelou à grandes dents",
    level: 8,
    health: 60,
    image: beast,
  },
  { name: "Dragon immense", level: 20, health: 300, image: dragon },
];

export const locations: Location[] = [
  {
    name: "place du village",
    buttonText: [
      "Aller au magasin",
      "Aller à la grotte",
      "Combattre le dragon",
    ],
    buttonActions: ["goStore", "goCave", "fightDragon"],
    text: 'Vous êtes sur la place du village. Vous voyez un panneau qui dit "Magasin".',
    image: village,
  },
  {
    name: "magasin",
    buttonText: [
      "Acheter 10 vie (10 or)",
      "Acheter une arme (30 or)",
      "Aller à la place du village",
    ],
    buttonActions: ["buyHealth", "buyWeapon", "goTown"],
    text: "Vous entrez dans le magasin et observer les nombreux objets en vente. Vous pouvez acheter de la vie ou une nouvelle arme pour vous aider dans votre aventure.",
    image: store,
  },
  {
    name: "cave",
    buttonText: [
      "Combattre le gros truc gluant",
      "Combattre la bête chelou à grandes dents",
      "Aller à la place du village",
    ],
    buttonActions: ["fightSlime", "fightBeast", "goTown"],
    text: "Vous entrez dans la grotte sombre et humide. Vous entendez des bruits étranges et voyez des ombres bouger !",
    image: cave,
  },
  {
    name: "fight",
    buttonText: ["Attaquer", "Esquiver", "Fuir"],
    buttonActions: ["attack", "dodge", "goTown"],
    text: "Vous combattez un monstre effrayant ! Choisissez votre action avec soin.",
    image: fight,
  },
  {
    name: "kill monster",
    buttonText: [
      "Aller à la place du village",
      "Aller à la place du village",
      "Aller à la place du village",
    ],
    buttonActions: ["goTown", "goTown", "goTown"],
    text: "Le monstre crie \"Arg!\" alors qu'il meurt. Vous gagnez des points d'expérience et trouvez de l'or.",
    image: monsterDeath,
  },
  {
    name: "lose",
    buttonText: ["REJOUER?", "REJOUER?", "REJOUER?"],
    buttonActions: ["restart", "restart", "restart"],
    text: "Vous êtes mort. ☠",
    image: lose,
  },
  {
    name: "win",
    buttonText: ["REJOUER?", "REJOUER?", "REJOUER?"],
    buttonActions: ["restart", "restart", "restart"],
    text: "Vous avez vaincu le dragon et sauvé le village ! 🎉",
    image: win,
  },
];
