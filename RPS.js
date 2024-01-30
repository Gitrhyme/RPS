function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissor"]
    let randomIdx = Math.floor(Math.random() * choices.length);
    return choices[randomIdx]
}
function getPlayerChoice() {
    let playerChoice = prompt("Choose Your Weapon:")
    playerChoice = playerChoice.toLowerCase()

    if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissor") {
        return playerChoice
    } else {
        console.log("Input invalid, try again...")
        getPlayerChoice()
    }
}
console.log(getComputerChoice())
console.log(getPlayerChoice())