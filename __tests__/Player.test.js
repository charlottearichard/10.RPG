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

  expect(player.getStats()).toHaveProperty("potions");
  expect(player.getStats()).toHaveProperty("health");
  expect(player.getStats()).toHaveProperty("strength");
  expect(player.getStats()).toHaveProperty("agility");
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
  const player = new Player("Dove");
  const oldHealth = player.health;

  player.reduceHealth(5);

  expect(player.health).toBe(oldHealth - 5);

  player.reduceHealth(99999);

  expect(player.health).toBe(0);
});

//Players attack
test("gets player's attack value", () => {
  const player = new Player("Dave");
  player.strength = 10;

  expect(player.getAttackValue()).toBeGreaterThanOrEqual(5);
  expect(player.getAttackValue()).toBeLessThanOrEqual(15);
});

//  Potion  IN Inventory

test("adds a potion to the inventory", () => {
  const player = new Player("Dove");
  const oldCount = player.inventory.length;

  player.addPotion(new Potion());

  expect(player.inventory.length).toBeGreaterThan(oldCount);
});

test("uses a potion from inventory", () => {
  const player = new Player("Dave");
  player.inventory = [new Potion(), new Potion(), new Potion()];
  const oldCount = player.inventory.length;

  player.usePotion(1);

  expect(player.inventory.length).toBeLessThan(oldCount);
});
