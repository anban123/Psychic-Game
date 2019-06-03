//Homework Due 6.3.19

//Set computer choices
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//Setting all to 0
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var userGuess = "";
var userGuesses = [];
var computerGuess = "";

//links html
var directionstext = document.getElementById("directions");
var winstext = document.getElementById("wins");
var lossestext = document.getElementById("losses");
var guessesLefttext = document.getElementById("guessesLeft");
var userGuesstext = document.getElementById("userGuess");

//comp generate random letter
computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

console.log(computerGuess)

//rest function for when game is done
function reset() {
    guessesLeft = 10;  
    userGuesses = [];
}

//logs user's keys pressed and making them all lowercase 
document.onkeyup = function(event) {
    userGuess = (event.key).toLowerCase();

    console.log(event.key)


//if else statment
    if (userGuess === computerGuess) {
        wins++;
        reset()
        
    } else if (userGuess !== computerGuess) {
        guessesLeft--;
        userGuesses.push(userGuess);
        document.getElementById("guessSpan").textContent = userGuesses; 
        console.log(userGuesses);
    } 
    
    //if statement to reset game once guesses are used up
    if (guessesLeft == 0) {
        losses++;
        reset();
    }
    
    
    //Puts the wins, losses etc on page
    winstext.textContent = "Wins: " + wins;
    lossestext.textContent = "Losses: " + losses;
    guessesLefttext.textContent = "Guesses Left: " + guessesLeft;                           


    //END OF GAME


    //NOTES etc... 

    // for (var i = 0; i < userGuesses.length; i++) {
    //     document.getElementById("guessSpan"); 
    // }
    
}

// prepend makes numbers stack  $().prepend() or whatever .append?

// var reset = function () {

// }

// function addLetter () {

// }

// User choses a letter
// Computer randomly choses a letter
// Decide if it's win or loss
// If win + add to win + resets the game + reset guesses
// If loss + add to losses + - guesses left + add to guesses so far
// 
