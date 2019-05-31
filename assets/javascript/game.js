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

function reset() {
    guessesLeft = 10;  
    userGuesses = [];
}

document.onkeyup = function(event) {
    userGuess = event.key.toLowerCase;

    console.log(event.key)

    if (userGuess === computerGuess) {
        wins++;
        reset()
        
    } else if (userGuess !== computerGuess) {
        guessesLeft--;
        userGuess = "";
        userGuesses = [];            //userGuesses.push(userGuess)
    } 
    
    if (userGuesses == 0) {
        losses++;
        reset();
    }
    

//Puts the wins, losses etc on page


    winstext.textContent = "Wins: " + wins;
    lossestext.textContent = "Losses: " + losses;
    guessesLefttext.textContent = "Guesses Left: " + guessesLeft;                           
    userGuesstext.textContent = "Your Guesses so far: " + userGuess;

}

// prepend makes numbers stack  $().prepend() or whatever .abbend?

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
