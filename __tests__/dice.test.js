// __tests__/dice.test.js
const rollDice = require("../dice");

test("rollDice returns a number between 1 and the number of sides", () => {
  const sides = 6;
  for (let i = 0; i < 100; i++) {
    const result = rollDice(sides);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(sides);
  }
});
