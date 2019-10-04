//declare and initialize array
var words = ["apple", "orange", "pear", "grapes", "watermelon", "blueberry", "kiwi", 
"mango", "pomegranate", "coconut"]

//assigning variabls 
var randomWord = "";
var lettersOfWord = []
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];

//assigned variables for restart game
var wins = 0;
var losses = 0;
var guessesRemaining = 5;

//choose word randomly, seperating each letter &
//adding blanks in place of each letter
function Game() {
    randomWord = words[Math.floor(Math.random() * words.length)];
    lettersOfWord = randomWord.split("");
    blanks = lettersOfWord.length;

    for (var i = 0; i < blanks; i++) {
        blanksAndCorrect.push("_");
    }

    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join("  ");

    console.log(randomWord);
    console.log(lettersOfWord)
    console.log(blanks)
    console.log(blanksAndCorrect)
}

//variables for audio function
var fruit = document.getElementById("fruit");


//audio function
function aud() {
    // apple image 
    if (randomWord === words[0]) {
        fruit.play();
        document.getElementById("image").src = "./assets/images/apple0.jpeg";
    }
    
    // orange image
    else if (randomWord === words[1]) {
        fruit.play();
        document.getElementById("image").src = "./assets/images/orange1.jpeg";
    }

    // pear image 
    else if (randomWord === words[2]) {
        fruit.play();
        document.getElementById("image").src = "./assets/images/pear2.jpeg";
    }

    // grape image 
    else if (randomWord === words[3]) {
        fruit.play();
        document.getElementById("image").src = "./assets/images/grapes3.jpg";
    }

    // watermelon image 
    else if (randomWord === words[4]) {
        fruit.play();
        document.getElementById("image").src = "./assets/images/watermelon4.jpg";
    }

    // blueberry image 
    else if (randomWord === words[5]) {
        fruit.play();
        document.getElementById("image").src = "./assets/images/blueberry5.jpg";
    }

    //kiwi image 
    else if (randomWord === words[6]) {
        fruit.play();
        document.getElementById("image").src = "./assets/images/kiwi6.jpg";
    }

    // mango image
    else if (randomWord === words[7]) {
        fruit.play();
        document.getElementById("image").src = "./assets/images/mango7.jpeg";
    }

    // pomegranate image 
    else if (randomWord === words[8]) {
        fruit.play();
        document.getElementById("image").src = "./assets/images/pomegranate8.jpg";
    }

    // coconut image
    else if (randomWord === words[9]) {
        fruit.play();
        document.getElementById("image").src = "./assets/images/coconut9.gif";
    }

};

//restarting the game after it has been lost or won
function reset() {
    guessesRemaining = 5;
    wrongGuess = [];
    blanksAndCorrect = [];
    Game()
}

//this checks each letter guessed by player to see if its right or wrong
function checkLetters(letter) {
    var letterInWord = false;
    for (var i = 0; i < blanks; i++) {
        if (randomWord[i] == letter) {
            letterInWord = true;
        }
    }
    
    if (letterInWord) {
        for (var i = 0; i < blanks; i++) {
            if (randomWord[i] == letter) {
                blanksAndCorrect[i] = letter;
            }
        }
    }
    
    else {
        wrongGuess.push(letter);
        guessesRemaining--;
    }
    console.log(blanksAndCorrect);
}

//completing the game
function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining)

        //if all letters are guessed correctly then game resets and adds to winstracker
        //if there are no remaining guesses left game resets and adds to losstracker
    if (lettersOfWord.toString() == blanksAndCorrect.toString()) {
        wins++;
        aud()
        reset()
        document.getElementById("winstracker").innerHTML = " " + wins;

    } else if (guessesRemaining === 0) {
        losses++;
        reset()
        document.getElementById("image").src = "./assets/images/tryagain.gif"
        document.getElementById("losstracker").innerHTML = " " + losses;
    }
    
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;
}

//start game function
Game()
document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(guesses);
    complete();
    console.log(guesses);

    document.getElementById("playerguesses").innerHTML = "  " + wrongGuess.join(" ");
}