const Potion = require("../lib/Potion");

jest.mock("../lib/Potion");

console.log(new Potion());

const Player = require("../lib/Player.js");

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

test("gets player stats as an object", () => {
  const player = new Player("Dove");

  expect(player.getStatus()).toHaveProperty("potions");
  expect(player.getStatus()).toHaveProperty("health");
  expect(player.getStatus()).toHaveProperty("strength");
  expect(player.getStatus()).toHaveProperty("agility");
});

test("gets inventory from player or returns false", () => {
  const player = new Player("Dove");

  expect(player.getInventory()).toEqual(expect.any(Array));

  player.inventory = [];

  expect(player.getInventory()).toEqual(false);
});
