// Function to roll the dice
function rollDice(faces) {
  return Math.floor(Math.random() * faces) + 1;
}

// Export the function for testing
if (typeof module !== "undefined") {
  module.exports = rollDice;
}

// Event listener for the roll dice button
document.getElementById("roll-dice").addEventListener("click", () => {
  // Get the selected dice type from the dropdown
  const diceType = document.getElementById("dice-type").value;
  // Roll the dice and get the result
  const result = rollDice(diceType);
  // Display the result on the page
  document.getElementById("result").textContent = `You rolled a ${result}`;
});
