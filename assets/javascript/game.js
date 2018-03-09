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
var wrongGuesses = [];
var wins = 0;
var remainingGuesses = 12;
var wordToGuess = wordOptions[Math.floor(Math.random()*wordOptions.length)];

document.onkeypress = function game(event) {
    playerGuess = event.key;

    if (playerGuess == "Enter") {
        wordToGuess = wordOptions[Math.floor(Math.random()*wordOptions.length)];
        wrongGuesses = [];
        remainingGuesses = 12;
        spaces = spaces5;
        print();
    };

    if (wordToGuess.length == 5) {
        spaces = spaces5
        document.getElementById("spaces").innerHTML = spaces;
    } else if (wordToGuess.length == 6) {
        spaces = spaces6
        document.getElementById("spaces").innerHTML = spaces;
    } else if (wordToGuess.length == 7) {
        spaces = spaces7
        document.getElementById("spaces").innerHTML = spaces;
    };

    if (playerGuess.toLowerCase() != playerGuess.toUpperCase() && wrongGuesses.indexOf(event.key) == -1 && playerGuess != "Enter" && playerGuess != "Space") {
        if (playerGuess == wordToGuess.charAt(0)) {
            spaces.splice(0, 1, playerGuess);
            print();
        } else if (playerGuess == wordToGuess.charAt(1)) {
            spaces.splice(1, 1, playerGuess);
            print();
        } else if (playerGuess == wordToGuess.charAt(2)) {
            spaces.splice(2, 1, playerGuess);
            print();
        } else if (playerGuess == wordToGuess.charAt(3)) {
            spaces.splice(3, 1, playerGuess);
            print();
        } else if (playerGuess == wordToGuess.charAt(4)) {
            spaces.splice(4, 1, playerGuess);
            print();
        } else if (playerGuess == wordToGuess.charAt(5)) {
            spaces.splice(5, 1, playerGuess);
            print();
        } else if (playerGuess == wordToGuess.charAt(6)) {
            spaces.splice(6, 1, playerGuess);
            print();
        }
        
        else {
        wrongGuesses.push(playerGuess)
        document.getElementById("letters-guessed").innerHTML = " " + wrongGuesses;
        console.log(wrongGuesses);
        remainingGuesses = --remainingGuesses;
        print();
        };

        if (remainingGuesses == 0) {
            alert("Game Over");
        }
    };

};

function print() {
document.getElementById("spaces").innerHTML = spaces;
document.getElementById("remaining-guesses").innerHTML = remainingGuesses;
document.getElementById("letters-guessed").innerHTML = wrongGuesses;
console.log(spaces);
console.log(wrongGuesses.length);
console.log(wins);
console.log(remainingGuesses);
console.log(wordToGuess);
}

