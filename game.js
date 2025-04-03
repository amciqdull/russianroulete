// Russian Roulette Game Logic in JavaScript
let deathNum = getRandomInt(6) + 1;  // Random death position in the revolver
let winScore = 0;
let pcScore = 0;
let gameScore = 5;
let used = [];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function playTurn(userChoice) {
    if (userChoice === deathNum) {
        return "You dead. Game Over!";
    }

    if (!used.includes(userChoice)) {
        used.push(userChoice);
        winScore++;
        gameScore--;
    }

    // PC's turn
    let pcChoice = getRandomInt(6) + 1;
    if (pcChoice === deathNum) {
        return "*GUN SHOT SOUND*, You won!";
    }

    used.push(pcChoice);
    pcScore++;
    gameScore--;

    return "Your turn. Remaining rounds: " + gameScore;
}

function resetGame() {
    winScore = 0;
    pcScore = 0;
    gameScore = 5;
    used = [];
    deathNum = getRandomInt(6) + 1;
}
