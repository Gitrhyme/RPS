function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissor"]
    let randomIdx = Math.floor(Math.random() * choices.length);
    return choices[randomIdx]
}