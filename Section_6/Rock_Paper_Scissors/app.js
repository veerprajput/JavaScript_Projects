const startGameBtn = document.getElementById('start-game-btn');
const ROCK = 'ROCK'
const PAPER = 'PAPER'
const SCISSORS = 'SCISSORS'
const DEFAULT_USER_CHOICE = ROCK
let startedGame = false 

const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER}, ${SCISSORS}?`, '').toUpperCase()
    if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
        alert(`Invalid choice! We chose ${ROCK} for you!`)
        return DEFAULT_USER_CHOICE
    } else {
        return selection
    }
}

const getComputerChoice = () => {
    const randomValue = Math.random()
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

const getWinner = (cChoice, pChoice) => {
    if (cChoice === pChoice) {
        return 'DRAW'
    } else if (cChoice === ROCK && pChoice === PAPER || cChoice === PAPER && pChoice === SCISSORS || cChoice === SCISSORS && pChoice === ROCK) {
        return 'PLAYER WINS'
    } else {
        return 'COMPUTER WINS'
    }
}

startGameBtn.addEventListener('click', () => {
    if (startedGame) {
        return;
    }

    console.log('Game is starting...')
    const playerSelection = getPlayerChoice()
    const computerSelection = getComputerChoice()
    const winner = getWinner(computerSelection, playerSelection)
    startedGame = true
    let message;
    if (winner === 'DRAW') {
        message = `You picked ${playerSelection}. Computer picked ${computerSelection}, So you had a draw.`
    } else if (winner === 'PLAYER WINS') {
        message = `You picked ${playerSelection}. Computer picked ${computerSelection}, So YOU WON!!!`
    } else {
        message = `You picked ${playerSelection}. Computer picked ${computerSelection}, So you LOST...`
    }
    console.log(message)
    started_game = false
});

