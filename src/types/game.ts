export type Weapon = {
  name: string;
  power: number;
};

export type Monster = {
  name: string;
  level: number;
  health: number;
  image: string;
};

export type Location = {
  name: string;
  buttonText: string[];
  buttonActions: string[];
  text: string;
  image: string;
};
