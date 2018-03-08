var words = [
    "conker",
    "kazooie",
    "boris",
    "wario",
    "waluigi",
    "pikachu",
    "katarn",
    "falcon",
    "epona"
];

var spaces5 = ["_ ", "_ ", "_ ", "_ ", "_ "];
var spaces6 = ["_", "_", "_", "_", "_", "_"];
var spaces7 = ["_", "_", "_", "_", "_", "_", "_"];
var lettersGuessed = [];
var wins = 0;
var remainingGuesses = 12;

    //Rewrite HTML of the Game column in each function that changes the variables
    var html = 
        "<p>Press any key to get started!</p>" + 
        "<p>Wins</p>" + 
        wins +
        "<p>Current Word</p>" + 
        spaces5 + 
        "<p>Number of guesses remaining</p>" + 
        remainingGuesses + 
        "<p>Letters already guessed</p>" +
        lettersGuessed;

    

document.onkeypress = function (event) {
    playerGuess = event.key;
    if (playerGuess.toLowerCase() != playerGuess.toUpperCase() && lettersGuessed.indexOf(event.key) == -1) {
        lettersGuessed.push(playerGuess)
        document.getElementById("game").innerHTML = html;
        print();
        console.log(lettersGuessed);
    };
    
};

function print() {
console.log(lettersGuessed.length);
console.log(wins);
console.log(remainingGuesses);
}

