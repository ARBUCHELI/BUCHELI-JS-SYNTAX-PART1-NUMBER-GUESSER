let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget =() => {
    return Math.floor(Math.random() * 9);
}
  
const compareGuesses = (human, computer, target) => {
    const userG = Math.abs(target - human);
    const computerG = Math.abs(target - computer);
    return userG <= computerG;
};
  
const updateScore = winner => {
    if (winner === 'human') {
      humanScore++;
    } else if (winner === 'computer') {
      computerScore++;
    }
}

const advanceRound = () => {
    currentRoundNumber++;
}
