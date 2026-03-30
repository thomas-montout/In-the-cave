import type { Weapon, Monster, Location } from "../types/game";
import dragon from "../assets/dragon.png";
import slime from "../assets/trucgluant.png";
import beast from "../assets/betechelou.png";
import village from "../assets/village.png";
import store from "../assets/boutique.png";
import cave from "../assets/cave.png";
import beastDead from "../assets/betecheloumorte.png";
import slimeDead from "../assets/trucgluantmort.png";
import lose from "../assets/defaite.png";
import win from "../assets/victoire.png";

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
    text: "Bienvenue à Troupomé.\n Un dragon terrorise le village mais il est très puissant !\n Vous pouvez explorer le magasin pour vous préparer ou tenter votre chance dans la grotte pour gagner de l'expérience.",
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
    text: "Vous entrez dans le magasin et observer quelques bricoles. \nVous pouvez acheter de la vie ou une nouvelle arme pour vous aider dans votre aventure.",
    image: store,
  },
  {
    name: "cave",
    buttonText: [
      "Combattre le gros truc gluant",
      "Combattre la bête à grandes dents",
      "Aller à la place du village",
    ],
    buttonActions: ["fightSlime", "fightBeast", "goTown"],
    text: "Vous entrez dans la grotte sombre et humide. \nVous entendez des bruits étranges et voyez des ombres bouger !",
    image: cave,
  },
  {
    name: "fight",
    buttonText: ["Attaquer", "Esquiver", "Fuir"],
    buttonActions: ["attack", "dodge", "goTown"],
    text: "Vous combattez un monstre effrayant ! Choisissez votre action avec soin.",
    image: "", // L'image du combat sera définie dynamiquement en fonction du monstre affronté
  },
  {
    name: "kill beast",
    buttonText: [
      "Retourner à l'entrée de la grotte",
      "Aller à la place du village",
      "Combattre le dragon",
    ],
    buttonActions: ["goCave", "goTown", "fightDragon"],
    text: "Le monstre crie \"Arg!\" alors qu'il meurt. Vous gagnez des points d'expérience et trouvez de l'or.",
    image: beastDead,
  },
  {
    name: "kill slime",
    buttonText: [
      "Retourner à l'entrée de la grotte",
      "Aller à la place du village",
      "Combattre le dragon",
    ],
    buttonActions: ["goCave", "goTown", "fightDragon"],
    text: "Le monstre crie \"Arg!\" alors qu'il meurt. Vous gagnez des points d'expérience et trouvez de l'or.",
    image: slimeDead,
  },
  {
    name: "lose",
    buttonText: ["REJOUER"],
    buttonActions: ["restart"],
    text: "Vous êtes mort. ☠",
    image: lose,
  },
  {
    name: "win",
    buttonText: ["REJOUER"],
    buttonActions: ["restart"],
    text: "Vous avez vaincu le dragon et sauvé le village !",
    image: win,
  },
];
