//variables//

var wordList = ["ACDC","guitar","drums"];

var userInput;

var compWord = wordList[Math.floor(Math.random()*wordList.length)];
console.log(compWord);

var alphabets = compWord.toUpperCase().split("");
console.log(alphabets);

var guesses = [];

var display = [];
console.log("display =" + display)

var wins = 0;

var loses = 0;

var guessesLeft = 9;


//Start Game with dashes//
function start() {
    
    var userInput;

    var compWord = wordList[Math.floor(Math.random()*wordList.length)];
    console.log(compWord);
    
    var alphabets = compWord.toUpperCase().split("");
    console.log(alphabets);
    
    var guesses = [];
    
    var display = [];
    console.log("display =" + display)
    

    for (i=0; i<alphabets.length; i++){
      display.push("-");
        console.log(display) 
    }

    document.getElementById("display").innerHTML = display.join("");
};


//User inputs and processing//
document.onkeyup = function (event) {
    var userInput = String.fromCharCode(event.keyCode).toUpperCase();
    console.log(userInput);
    guesses.push(userInput);
    console.log("Guesses made = " + guesses);

    for (var i=0; i<alphabets.length; i++){
        if (userInput === alphabets[i]) { 
            display[i] = userInput;
            console.log("display = " + display);
            document.getElementById("display").innerHTML = display.join("");
           }
        }

        if (alphabets.includes(userInput) === false ){
            loses++;
            console.log("loses = " + loses);
            guessesLeft--;
            console.log("guessesLeft = "  + guessesLeft);
           }

           if (display.toString() == alphabets.toString()){
            wins++;
            console.log("wins = " + wins);
            alert("You guessed the word " + compWord +  " !")
            confirm("Try again")
            compWord = wordList[Math.floor(Math.random()*wordList.length)];
            start()
           }
    
       
        if (guessesLeft <= 0) {
         alert("Game Over" + "\n" + "You ran out of tries" + "\n" + "Click ok to try again");
         compWord = wordList[Math.floor(Math.random()*wordList.length)];
         console.log(compWord);
         guessesLeft = 9;
         console.log(guessesLeft);
     }
   
    };

