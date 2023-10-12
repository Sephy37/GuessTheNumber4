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

let rand = document.getElementById("randomNum")
rand.innerHTML = randomNumber
document.getElementById("randomNum").style.display = "none"
console.log(randomNumber)

let msg = document.getElementById("message")
let gameOver = document.getElementById("borders")

let easy = document.getElementById("easyBtn")
let medium = document.getElementById("mediumBtn")
let hard = document.getElementById("hardBtn")
let ultra = document.getElementById("ultraBtn")

let guessBtn = document.getElementById("btn1")
let resetGuessBtn = document.getElementById("btn2")
let resetFieldBtn = document.getElementById("btn3")

easy.addEventListener("click",function(){
    checkWhichButtonWasPressed(easy)
    displayDifficultLevel(easyLevelGuesses)
})

medium.addEventListener("click",function(){
    checkWhichButtonWasPressed(medium)
    displayDifficultLevel(mediumLevelGuesses)
})

hard.addEventListener("click",function(){
    checkWhichButtonWasPressed(hard)
    displayDifficultLevel(hardLevelGuesses)
})

ultra.addEventListener("click",function(){
    checkWhichButtonWasPressed(ultra)
    displayDifficultLevel(ultraLevelGuesses)
})

function displayDifficultLevel(difficulty){
    remainingGuesses = difficulty
    let guess = document.getElementById("counter")
    guess.innerHTML = remainingGuesses
    return remainingGuesses
}

guessBtn.addEventListener("click",function(){
    if(guessOutOfBoundsCheck(0,3) && checkForEmptyGuess()){
        checkGuess()
    }
},false)

resetGuessBtn.addEventListener("click",function(){
    resetGuessBtn()
})

resetFieldsBtn.addEventListener("click",function(){
    resetFields()
})

function checkWhichButtonWasPressed(event){
    for(let i = 0; i < buttons.length; i++){
        if(event.id != buttons[i]){
            document.getElementById(button[i].disabled = true)
        }
    }
}

function guessOutOfBoundsCheck(MIN_BOUNDS,MAX_BOUNDS){
    let check = false
    let guess = document.getElementById("guessBox").value
    if(guess < MIN_BOUNDS || guess > MIN_BOUNDS){
        check = false
    }else{
        check = true
    }
    return check
}


function checkForEmptyGuess(){
    let check = false
    guess = document.getElementById("guessBox").value.trim()
    if(guess ===""){
        showMessage("GUESS CANNOT BE EMPTY!")
        check = false
    }else{
        check = true
    }
    return check
}

function checkGuess(){
    
}
