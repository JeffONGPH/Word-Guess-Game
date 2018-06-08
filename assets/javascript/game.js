//variables//

var wordList = ["ACDC", "guitar", "drums"];

var compWord;
var alphabets;
var wins = 0;
var loses = 0;
var userInput;
var guessesLeft = 9;
var guesses = [];
var display = [];



//Start running a new game//
function start() {
    compWord = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(compWord);

    alphabets = compWord.toUpperCase().split("");
    console.log(alphabets);

    guessesLeft = 9;
    guesses = [];
    display = [];

    for (i = 0; i < alphabets.length; i++) {
        display.push("-");
        console.log(display)
    }
    document.getElementById("display").innerHTML = display.join("");
};


//User inputs and processing//
function processing() {

    document.onkeyup = function (event) {
        userInput = String.fromCharCode(event.keyCode).toUpperCase();
        console.log(userInput);
        guesses.push(userInput);
        console.log("Guesses made = " + guesses);

        for (var i = 0; i < alphabets.length; i++) {
            if (userInput === alphabets[i]) {
                display[i] = userInput;
                console.log("display = " + display);
                document.getElementById("display").innerHTML = display.join("");
            }
        }

        if (alphabets.includes(userInput) === false) {
            loses++;
            console.log("loses = " + loses);
            guessesLeft--;
            console.log("guessesLeft = " + guessesLeft);
        }

        if (display.toString() == alphabets.toString()) {
            wins++;
            console.log("wins = " + wins);
            alert("You guessed the word " + compWord.toUpperCase() + " !")
            confirm("Try again")
            start()
        }

        if (guessesLeft <= 0) {
            alert("Game Over" + "\n" + "You ran out of tries" + "\n" + "Click ok to try again");
            start()
        }
    }

};

start()
processing()