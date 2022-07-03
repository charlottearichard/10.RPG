const Potion = require("../lib/Potion");

jest.mock("../lib/Potion");

console.log(new Potion());

const Player = require("../lib/Player.js");

// New Player Object

test("creates a player object", () => {
  const player = new Player("Dove");

  expect(player.name).toBe("Dove");
  expect(player.agility).toEqual(expect.any(Number));
  expect(player.health).toEqual(expect.any(Number));
  expect(player.strength).toEqual(expect.any(Number));

  expect(player.inventory).toEqual(
    expect.arrayContaining([expect.any(Object)])
  );
});

// Player stats

test("gets player stats as an object", () => {
  const player = new Player("Dove");

  expect(player.getStatus()).toHaveProperty("potions");
  expect(player.getStatus()).toHaveProperty("health");
  expect(player.getStatus()).toHaveProperty("strength");
  expect(player.getStatus()).toHaveProperty("agility");
});

// Plauer inventory

test("gets inventory from player or returns false", () => {
  const player = new Player("Dove");

  expect(player.getInventory()).toEqual(expect.any(Array));

  player.inventory = [];

  expect(player.getInventory()).toEqual(false);
});

// Player health value
test("gets player health value", () => {
  const player = new Player("Dove");

  expect(player.getHealth()).toEqual(
    expect.stringContaining(player.health.toString())
  );
});

// check if player is alive
test("checks if player is alive", () => {
  const player = new Player("Dove");

  expect(player.isAlive()).toBeTruthy();

  player.health = 0;

  expect(player.isAlive()).toBeFalsy();
});

//subtract players health
test("subtracts from player's health", () => {
  const player = new Player("Dave");
  const oldHealth = player.health;

  player.reduceHealth(5);

  expect(player.health).toBe(oldHealth - 5);

  player.reduceHealth(99999);

  expect(player.health).toBe(0);
});
