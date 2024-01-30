function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    let randomIdx = Math.floor(Math.random() * choices.length);
    return choices[randomIdx]
}
function getPlayerChoice() {
    let playerChoice = prompt("Choose Your Weapon:")
    playerChoice = playerChoice.toLowerCase()

    if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors") {
        return playerChoice
    } else {
        console.log("Input invalid, try again...")
        return getPlayerChoice()
    }
}

function battleResult(player, computer) {
    const weapons = {
        rock: { strongTo: "scissors", weakTo: "paper" },
        paper: { strongTo: "rock", weakTo: "scissors" },
        scissors: { strongTo: "paper", weakTo: "rock" }
    }
    console.log(weapons[player].strongTo)
    if (weapons[player].strongTo == computer) {
        console.log(`Your ${player} destroyed the ${computer}`);
        return true
    }
    if (weapons[player].weakTo == computer) {
        console.log(`Your ${player} got wiped by ${computer}`);
        return false
    }
    console.log(`ITS A DRAW... Try Again`)
    let computerChoice = getComputerChoice()
    let playerChoice = getPlayerChoice()
    return battleResult(playerChoice, computerChoice)

}

function playGame() {
    let count = 0
    let enemyCount = 0
    for (let index = 0; index < 5; index++) {
        console.log(index)
        let computerChoice = getComputerChoice()
        let playerChoice = getPlayerChoice()
        outcome = battleResult(playerChoice, computerChoice)
        switch (outcome) {
            case true:
                count += 1
                break;
            case false:
                enemyCount += 1
                break;
            default:
                break;
        }
    }
    return [count, enemyCount]
}

playGame()