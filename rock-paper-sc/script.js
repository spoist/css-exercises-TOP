// This will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

function getComputerChoice () {
    // First randomize into new variable
    let selection = Array("Rock","Paper","Scissors");
    let choice = selection[Math.floor(Math.random()*selection.length)];
    return choice;
}

console.log(getComputerChoice());