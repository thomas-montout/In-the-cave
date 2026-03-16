import type { Weapon, Monster, Location } from "../types/game";

export const weapons: Weapon[] = [
  { name: "Bâton", power: 5 },
  { name: "Dague", power: 30 },
  { name: "Marteau de guerre", power: 50 },
  { name: "Épée", power: 100 },
];

export const monsters: Monster[] = [
  { name: "Gros truc gluant", level: 2, health: 15 },
  { name: "Bête chelou à grandes dents", level: 8, health: 60 },
  { name: "Dragon immense", level: 20, health: 300 },
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
  },
  {
    name: "magasin",
    buttonText: [
      "Acheter 10 vie (10 or)",
      "Acheter une arme (30 or)",
      "Aller à la place du village",
    ],
    buttonActions: ["buyHealth", "buyWeapon", "goTown"],
    text: "Vous entrez dans le magasin.",
  },
  {
    name: "cave",
    buttonText: [
      "Combattre le gros truc gluant",
      "Combattre la bête chelou à grandes dents",
      "Aller à la place du village",
    ],
    buttonActions: ["fightSlime", "fightBeast", "goTown"],
    text: "Vous entrez dans la grotte. Vous voyez quelques monstres.",
  },
  {
    name: "fight",
    buttonText: ["Attaquer", "Esquiver", "Fuir"],
    buttonActions: ["attack", "dodge", "goTown"],
    text: "Vous combattez un monstre.",
  },
  {
    name: "kill monster",
    buttonText: [
      "Aller à la place du village",
      "Aller à la place du village",
      "Aller à la place du village",
    ],
    buttonActions: ["goTown", "goTown", "easterEgg"],
    text: "Le monstre crie \"Arg!\" alors qu'il meurt. Vous gagnez des points d'expérience et trouvez de l'or.",
  },
  {
    name: "lose",
    buttonText: ["REJOUER?", "REJOUER?", "REJOUER?"],
    buttonActions: ["restart", "restart", "restart"],
    text: "Vous êtes mort. ☠",
  },
  {
    name: "win",
    buttonText: ["REJOUER?", "REJOUER?", "REJOUER?"],
    buttonActions: ["restart", "restart", "restart"],
    text: "Vous avez vaincu le dragon ! VOUS GAGNEZ LE JEU ! 🎉",
  },
  {
    name: "easter egg",
    buttonText: ["2", "8", "Aller à la place du village ?"],
    buttonActions: ["pickTwo", "pickEight", "goTown"],
    text: "Vous trouvez un jeu secret. Choisissez un nombre ci-dessus. Dix nombres seront choisis au hasard entre 0 et 10. Si le nombre que vous choisissez correspond à l'un des nombres aléatoires, vous gagnez !",
  },
];
