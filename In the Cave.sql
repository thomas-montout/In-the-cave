-- Active: 1770728342579@@127.0.0.1@3306@in_the_cave
CREATE TABLE `Player` (
  `id` int PRIMARY KEY,
  `pseudo` varchar(50),
  `health` int,
  `xp` int,
  `gold` int,
  `position_id` int
);

CREATE TABLE `Weapons` (
  `id` int PRIMARY KEY,
  `name` varchar(50),
  `power` int
);

CREATE TABLE `Locations` (
  `id` int PRIMARY KEY,
  `name` varchar(50)
);

CREATE TABLE `Monsters` (
  `id` int PRIMARY KEY,
  `name` varchar(50),
  `level` int,
  `health` int
);

CREATE TABLE `Inventory` (
  `player_id` int,
  `weapons_id` int,
  `is_equipped` boolean DEFAULT false,
  PRIMARY KEY (`player_id`, `weapons_id`)
);

ALTER TABLE `Player` ADD FOREIGN KEY (`position_id`) REFERENCES `Locations` (`id`);

ALTER TABLE `Inventory` ADD FOREIGN KEY (`player_id`) REFERENCES `Player` (`id`);

ALTER TABLE `Inventory` ADD FOREIGN KEY (`weapons_id`) REFERENCES `Weapons` (`id`);
