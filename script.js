let remainingGuesses = 0
let ultraLevelGuesses = 2
let hardLevelGuesses = 5
let mediumLevelGuesses = 10
let easyLevelGuesses = 15
let numberOfGuesses = 0
let guess
let MAX_BOUNDS
let MIN_BOUNDS
let gamsStatusLoser = "COMPUTER WON!"
let gameStatusWinner = "PLAYER WON!"

const imageUrls = [
    "images/babyYes.jpg",
    "images/no.jpg"
]

const buttons = [
    "easyBtn",
    "mediumBtn",
    "hardBtn",
    "ultraBtn"
]

let difficultyLevels = {
    easy: easyLevelGuesses,
    medium: mediumLevelGuesses,
    hard: hardLevelGuesses,
    ultra: ultraLevelGuesses
}

