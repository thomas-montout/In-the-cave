let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["Bâton"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

const weapons = [
  { name: "Bâton", power: 5 },
  { name: "Dague", power: 30 },
  { name: "Marteau de guerre", power: 50 },
  { name: "Épée", power: 100 },
];

const monsters = [
  {
    name: "Gros truc gluant",
    level: 2,
    health: 15,
  },
  {
    name: "Bête chelou à grandes dents",
    level: 8,
    health: 60,
  },
  {
    name: "Dragon immense",
    level: 20,
    health: 300,
  },
];

const locations = [
  {
    name: "place du village",
    "button text": [
      "Aller au magasin",
      "Aller à la grotte",
      "Combattre le dragon",
    ],
    "button functions": [goStore, goCave, fightDragon],
    text: 'Vous êtes sur la place du village. Vous voyez un panneau qui dit "Magasin".',
  },
  {
    name: "magasin",
    "button text": [
      "Acheter 10 vie (10 or)",
      "Acheter une arme (30 or)",
      "Aller à la place du village",
    ],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "Vous entrez dans le magasin.",
  },
  {
    name: "cave",
    "button text": [
      "Combattre le gros truc gluant",
      "Combattre la bête chelou à grandes dents",
      "Aller à la place du village",
    ],
    "button functions": [fightSlime, fightBeast, goTown],
    text: "Vous entrez dans la grotte. Vous voyez quelques monstres.",
  },
  {
    name: "fight",
    "button text": ["Attaquer", "Esquiver", "Fuir"],
    "button functions": [attack, dodge, goTown],
    text: "Vous combattez un monstre.",
  },
  {
    name: "kill monster",
    "button text": [
      "Aller à la place du village",
      "Aller à la place du village",
      "Aller à la place du village",
    ],
    "button functions": [goTown, goTown, easterEgg],
    text: "Le monstre crie \"Arg!\" alors qu'il meurt. Vous gagnez des points d'expérience et trouvez de l'or.",
  },
  {
    name: "lose",
    "button text": ["REJOUER?", "REJOUER?", "REJOUER?"],
    "button functions": [restart, restart, restart],
    text: "Vous êtes mort. &#x2620;",
  },
  {
    name: "win",
    "button text": ["REJOUER?", "REJOUER?", "REJOUER?"],
    "button functions": [restart, restart, restart],
    text: "Vous avez vaincu le dragon ! VOUS GAGNEZ LE JEU ! &#x1F389;",
  },
  {
    name: "easter egg",
    "button text": ["2", "8", "Aller à la place du village ?"],
    "button functions": [pickTwo, pickEight, goTown],
    text: "Vous trouvez un jeu secret. Choisissez un nombre ci-dessus. Dix nombres seront choisis au hasard entre 0 et 10. Si le nombre que vous choisissez correspond à l'un des nombres aléatoires, vous gagnez !",
  },
];

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {
  monsterStats.style.display = "none";
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  text.innerHTML = location.text;
}

function goTown() {
  update(locations[0]);
}

function goStore() {
  update(locations[1]);
}

function goCave() {
  update(locations[2]);
}

function buyHealth() {
  if (gold >= 10) {
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
  } else {
    text.innerText = "Vous n'avez pas assez d'or pour acheter de la vie.";
  }
}

function buyWeapon() {
  if (currentWeapon < weapons.length - 1) {
    if (gold >= 30) {
      gold -= 30;
      currentWeapon++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeapon].name;
      text.innerText = "Vous avez maintenant un " + newWeapon + ".";
      inventory.push(newWeapon);
      text.innerText += " Dans votre inventaire, vous avez : " + inventory;
    } else {
      text.innerText = "Vous n'avez pas assez d'or pour acheter une arme.";
    }
  } else {
    text.innerText = "Vous avez déjà la plus puissante arme !";
    button2.innerText = "Vendre l'arme pour 15 or";
    button2.onclick = sellWeapon;
  }
}

function sellWeapon() {
  if (inventory.length > 1) {
    gold += 15;
    goldText.innerText = gold;
    let currentWeapon = inventory.shift();
    text.innerText = "Vous avez vendu un " + currentWeapon + ".";
    text.innerText += " Dans votre inventaire, vous avez : " + inventory;
  } else {
    text.innerText = "Ne vendez pas votre seule arme !";
  }
}

function fightSlime() {
  fighting = 0;
  goFight();
}

function fightBeast() {
  fighting = 1;
  goFight();
}

function fightDragon() {
  fighting = 2;
  goFight();
}

function goFight() {
  update(locations[3]);
  monsterHealth = monsters[fighting].health;
  monsterStats.style.display = "block";
  monsterName.innerText = monsters[fighting].name;
  monsterHealthText.innerText = monsterHealth;
}

function attack() {
  text.innerText = "Le " + monsters[fighting].name + " attaque.";
  text.innerText +=
    " Vous l'attaquez avec votre " + weapons[currentWeapon].name + ".";
  health -= getMonsterAttackValue(monsters[fighting].level);
  if (isMonsterHit()) {
    monsterHealth -=
      weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;
  } else {
    text.innerText += " Vous avez raté miskine.";
  }
  healthText.innerText = health;
  monsterHealthText.innerText = monsterHealth;
  if (health <= 0) {
    lose();
  } else if (monsterHealth <= 0) {
    if (fighting === 2) {
      winGame();
    } else {
      defeatMonster();
    }
  }
  if (Math.random() <= 0.1 && inventory.length !== 1) {
    text.innerText += " Votre " + inventory.pop() + " se casse.";
    currentWeapon--;
  }
}

function getMonsterAttackValue(level) {
  const hit = level * 5 - Math.floor(Math.random() * xp);
  console.log(hit);
  return hit > 0 ? hit : 0;
}

function isMonsterHit() {
  return Math.random() > 0.2 || health < 20;
}

function dodge() {
  text.innerText = "Vous esquivez l'attaque du " + monsters[fighting].name;
}

function defeatMonster() {
  gold += Math.floor(monsters[fighting].level * 6.7);
  xp += monsters[fighting].level;
  goldText.innerText = gold;
  xpText.innerText = xp;
  update(locations[4]);
}

function lose() {
  update(locations[5]);
}

function winGame() {
  update(locations[6]);
}

function restart() {
  xp = 0;
  health = 100;
  gold = 50;
  currentWeapon = 0;
  inventory = ["Bâton"];
  goldText.innerText = gold;
  healthText.innerText = health;
  xpText.innerText = xp;
  goTown();
}

function easterEgg() {
  update(locations[7]);
}

function pickTwo() {
  pick(2);
}

function pickEight() {
  pick(8);
}

function pick(guess) {
  const numbers = [];
  while (numbers.length < 10) {
    numbers.push(Math.floor(Math.random() * 11));
  }
  text.innerText =
    "Vous avez choisi " + guess + ". Voici les nombres aléatoires :\n";
  for (let i = 0; i < 10; i++) {
    text.innerText += numbers[i] + "\n";
  }
  if (numbers.includes(guess)) {
    text.innerText += "Correct ! Vous gagnez 20 or petit(e) chanceux !";
    gold += 20;
    goldText.innerText = gold;
  } else {
    text.innerText += "Incorrect ! Vous perdez 10 points de vie !";
    health -= 10;
    healthText.innerText = health;
    if (health <= 0) {
      lose();
    }
  }
}
