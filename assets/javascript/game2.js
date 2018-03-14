window.onload = function() {

    var wins = 0;
    var word ;
    var lives = 12;
    var guesses = [ ];
    var counter ;
    var space ;

    play = function() {

        // Array of word options
        wordOptions = [
            'conker',
            'banjo',
            'boris',
            'wario',
            'toad',
            'pikachu',
            'jedis',
            'falcon',
            'epona'
        ];

        // Choose a random word from the list
        word = wordOptions[Math.floor(Math.random()*wordOptions.length)];
        word = word.replace(/\s/g, "_");
        console.log(word);
        document.getElementById("game-image").setAttribute("src", "assets/images/" + word + ".jpg");
        
        // Provide HTML for the text in the game space
        gameHTML = 
        '<p>Wins</p>' + 
        '<p>' + wins + '</p>' + 
        '<p>Current Word</p>' + 
        '<p>' + word + '</p>' +
        '<p>Number of guesses remaining</p>' +
        '<p>' + lives + '</p>' + 
        '<p>Letters already guessed</p>' +
        '<p>' + guesses + '<p>';

        // Create function to insert HTML into game DIV
        print = function() {
            document.getElementById('game').innerHTML = gameHTML;
        };

        // Print gameHTML to game div
        print();
    
        // Listen for player keypress
        document.onkeypress = function game(event) {
            guess = event.key;

            // Check if player pressed a letter key and filter out space and enter
            if (guess.toLowerCase() != guess.toUpperCase() && guesses.indexOf(event.key) == -1 && guess != "Enter" && guess != "Space") {

                result = function() {
                    wordHolder = document.getElementById('game')
                }
                
                check = function() {
                    for (var i = 0; i < word.length; i++) {
                        if (word[i] === guess) {
                        guesses[i].innerHTML = guess;
                        counter += 1;
                        };
                    };
                };
            };
        };
    };
};
