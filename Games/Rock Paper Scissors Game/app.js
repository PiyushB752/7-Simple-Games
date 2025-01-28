const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")

const possibleChoice = document.querySelectorAll("button")
let userChoice 
let computerChoice

possibleChoice.forEach(possibleChoice=>possibleChoice.addEventListener("click",(e)=>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1 
    if (randomNumber==1) {
      computerChoice = "rock"
    }
    if (randomNumber==2) {
      computerChoice = "scissors"
    }
    if (randomNumber==3) {
      computerChoice = "paper"
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if (computerChoice==userChoice) {
      result = "its a draw!"
    }
    if (computerChoice=="rock" && userChoice=="paper") {
      result = "you win!"
    }
    if (computerChoice=="rock" && userChoice=="scissors") {
      result = "you lose!"
    }
    if (computerChoice=="paper" && userChoice=="scissors") {
      result = "you win!"
    }
    if (computerChoice=="paper" && userChoice=="rock") {
      result = "you lose!"
    }
    if (computerChoice=="scissors" && userChoice=="rock") {
      result = "you win!"
    }
    if (computerChoice=="scissors" && userChoice=="paper") {
      result = "you lose!"
    }
    resultDisplay.innerHTML = result
    if (result=="you win!"){
      var audio1 = new Audio("clapping sound.mp3")
      audio1.play()
      setTimeout(function(){
        audio1.pause()
        audio1.currentTime = 0
      },2000)
    } else {
      var audio2 = new Audio("booo.mp3")
      audio2.play()
    }
  }
