let randomNumber = parseInt(Math.random()*100 + 1); // Math.random() will generate random numbers, and parseInt will convert that decimal nos. to integer nos.

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess= []; // it is an array which stores the guessed number by the user and displays it to user so that users knows which nos. he/she had already guessed
let numGuess = 1; // number of guesses starts from 1

let playGame = true; // it allows you to play the game again and again even after the total no. of attempts are done.

// check if user is available to play game
if(playGame){
    submit.addEventListener('click', function(evnt){
        evnt.preventDefault(); // preventDefault() matlab ham evnt ko bolte hai values ko kahi mat leke jao vahi pe rokke rakho.
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess);
    });
};

function validateGuess(guess){
    /* In this function we check if the user has entered an integer number only, and also if user enters numbers
    between 1 to 100 only, and if user enters an alphabet or any negative numbers. */
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }
    else if(guess < 1){
        alert("Please enter a number greater than 0");
    }
    else if(guess > 100){
        alert("Please enter a number less than 100");
    }
    else {
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess)
        }
    }
};


function checkGuess(guess){
    /* In this function we check if the value guessed by user is equal to random no. or not, if it's equal to random
    number we dispay the message using displayMessage() function and, if it's not equal to tandom number we check here
    if it's low value than the random no. or high value than the random no. */
    if(guess === randomNumber){
        displayMessage(`You Guessed it right`);
        endGame();
    }
    else if(guess < randomNumber){
        displayMessage(`Number is Tooo Low`);
    }
    else if(guess > randomNumber){
        displayMessage(`Number is Too High`);
    }
};


function displayGuess(guess){
    /* It will clean the values inside the input box, and also update the array of previous guesses, and also update
    the remaining guesses. */
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
};


function displayMessage(message){
    // this function will directly interact with DOM manipulation.
    lowOrHi.innerHTML = `<h2>${message}</h2>`
};


function endGame(){
    // for ending the game
    userInput.value = '';
    userInput.setAttribute('disabled', ''); // setAttribute is in key value pair, here we gave key as 'disabled' and left the value as '' which is blank so that to end the game
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
};

function newGame(){
    // for starting new game
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(evnt){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true
    });
};

