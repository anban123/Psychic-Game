var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var wins = 0;
var losses = 0;

var directionstext = document.getElementById("directions-text");
var winstext = document.getElementById("wins-text");
var lossestext = document.getElementById("losses-text");
var guessesLefttext = document.getElementById("guessesLeft-text");
var userGuesstext = document.getElementById("userGuess-text");

document.onkeyup = function(event) {
    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if (userGuess === computerChoices) {
        wins++;
    } else if (userGuess !== computerChoices) {
        losses++
    } else {
        alert("WHAT DID YOU DO??!!!!!")
    }


    winstext.textcontent = wins;
    lossestext.textcontent = losses;
    // guessesLefttext =  ;
    userGuesstext = userGuess;

}