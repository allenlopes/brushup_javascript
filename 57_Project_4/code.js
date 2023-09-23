const randomNumber = parseInt(Math.random()*100 + 1); // Math.random() will generate random numbers, and parseInt will convert that decimal nos. to integer nos.

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess= []; // it is an array which stores the guessed number by the user and displays it to user so that users knows which nos. he/she had already guessed
let numGuess = 1; // number of guesses starts from 1

let playGame = true; // it allows you to play the game again and again even after the total no. of attempts are done.


function validateGuess(guess){
    /* In this function we check if the user has entered an integer number only, and also if user enters numbers
    between 1 to 100 only, and if user enters an alphabet or any negative numbers. */
};

function checkGuess(guess){
    /* In this function we check if the value guessed by user is equal to random no. or not, if it's equal to random
    number we dispay the message using displayMessage() function and, if it's not equal to tandom number we check here
    if it's low value than the random no. or high value than the random no. */
};


function displayGuess(guess){
    /* It will clean the values inside the input box, and also update the array of prevois guesses, and also update
    the remaining guesses. */
};

function displayMessage(message){
    // this function will directly interact with DOM manipulation.
};


function endGame(){
    // for ending the game
};

function newGame(){
    // for starting new game
};

