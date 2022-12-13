// This will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

function getComputerChoice () {
    // First randomize into new variable
    let selection = Array("Rock","Paper","Scissors");
    let choice = selection[Math.floor(Math.random()*selection.length)];
    return choice;
}

// plays a single round of Rock Paper Scissors. The function should 
// take two parameters - the playerSelection and computerSelection - 
// and then return a string that declares the winner of the round 
// like so: "You Lose! Paper beats Rock"


//console.log(getComputerChoice());