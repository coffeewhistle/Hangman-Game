var wordOptions = [
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
var spaces6 = ["_ ", "_ ", "_ ", "_ ", "_ ", "_ "];
var spaces7 = ["_ ", "_ ", "_ ", "_ ", "_ ", "_ ", "_ "];
var lettersGuessed = [];
var wins = 0;
var remainingGuesses = 12;
var wordToGuess = wordOptions[Math.floor(Math.random()*wordOptions.length)];

document.onkeypress = function (event) {
    playerGuess = event.key;

    if (playerGuess == "Enter") {
        wordToGuess = wordOptions[Math.floor(Math.random()*wordOptions.length)];
    };

    if (wordToGuess.length == 5) {
        document.getElementById("spaces").innerHTML = spaces5;
    } else if (wordToGuess.length == 6) {
        document.getElementById("spaces").innerHTML = spaces6;
    } else if (wordToGuess.length == 7) {
        document.getElementById("spaces").innerHTML = spaces7;
    };

    if (playerGuess.toLowerCase() != playerGuess.toUpperCase() && lettersGuessed.indexOf(event.key) == -1 && playerGuess != "Enter" && playerGuess != "Space") {
        
        lettersGuessed.push(playerGuess)
        document.getElementById("letters-guessed").innerHTML = " " + lettersGuessed;
        print();
        console.log(lettersGuessed);
    };

};

function print() {
console.log(lettersGuessed.length);
console.log(wins);
console.log(remainingGuesses);
console.log(wordToGuess);
}

