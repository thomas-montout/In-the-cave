export type Weapon = {
  name: string;
  power: number;
};

export type Monster = {
  name: string;
  level: number;
  health: number;
};

export type Location = {
  name: string;
  buttonText: [string, string, string];
  buttonActions: [string, string, string];
  text: string;
};
