const readline = require('readline-sync');

// Available choices
const choices = ['rock', 'paper', 'scissors'];

// Function to get the computer's choice
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

// Function to play a single round
function playRound() {
    console.log("Welcome to Rock, Paper, Scissors!");
    const playerChoice = readline.question("Choose rock, paper, or scissors: ").toLowerCase();
    
    if (!choices.includes(playerChoice)) {
        console.log("Invalid choice. Please select rock, paper, or scissors.");
        return false;
    }

    const computerChoice = getComputerChoice();
    console.log(`Computer chose: ${computerChoice}`);

    const result = determineWinner(playerChoice, computerChoice);
    console.log(result);

    return true;
}

// Function to ask if the player wants to play again
function askToPlayAgain() {
    const answer = readline.question("Do you want to start a new game? (yes/no): ").toLowerCase();
    return answer === 'yes';
}

// Main game loop
function gameLoop() {
    let continuePlaying = true;

    while (continuePlaying) {
        const validRound = playRound();
        if (validRound) {
            continuePlaying = askToPlayAgain();
        } else {
            console.log("Let's try again.");
        }
    }

    console.log("Thank you for playing!");
}

gameLoop();
