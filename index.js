/* Require the word constructer from the module export*/
var Word = require("./words.js")
/* node package used to prompt user */
var inquirer = require("inquirer")

/* node package to generate a random superhero name as the word*/
var superheroes=require("superheroes");

/*node package to clear terminal screen */
var clear=require("clear");

var chalk=require("chalk");








/*Global variables */
var guess ="";

var goodGuess =0;

var notGuessed=0;

/*start game by calling the initGame function which sets/resets variables at beginning of each game*/
initGame()



function initGame() {
   
    console.log(chalk.blue.bold('Welcome to Superhero word guess! Please enter a single letter per guess. Numbers and symbols not permitted'))
   
   /* node package to cretae random superhero names*/
    var word=superheroes.random().toLowerCase();
    /* array to track letters which have been guessed*/
    var guessedLetters=[];
    
    /*calls the Word Constructor function to crete the word */
    var selection = new Word(word)
    /* variable used for the on screen display of guessed letters and placeholders*/
    var screenDisplay="" ; 
    /* variable to track number of bad guesses*/
    var badGuess = 10;
    /* calls the function to create each letter object for the word and display onscreen*/
    selection.createLetters(word,screenDisplay)
    /*Begin game play*/
    getGuess(word,selection,screenDisplay,badGuess,guessedLetters);
}

/*Function that asks the user to guess a letter */
function getGuess (word,selection,screenDisplay,badGuess,guessedLetters) {

    inquirer
    .prompt([ {
     
        name: "guess",
      message: "Please guess a letter",
      
      /*convert upper case entries to lower case */
      filter: function(val) {
          return val.toLowerCase();
      },
     
    }
    ])
    .then(answers => {
     guess=answers.guess

    

     if(guessedLetters.includes(guess)) {
         console.log(guess + " was already guessed")
         selection.update(screenDisplay)
         getGuess
     } else {
         guessedLetters.push(guess);
        badGuess=selection.guess(guess,goodGuess,screenDisplay,badGuess);
     }
     

   
     
     playGame(word,selection,screenDisplay,badGuess,guessedLetters);
    });
}
 


function playGame (word,selection,screenDisplay,badGuess,guessedLetters) {
   
   /*check to see if they have guesses remaining */
    if (badGuess > 0) {
     
    /*Check to see if they solved the word*/
    checkSolved(selection);
        if(notGuessed===0) {
        console.log(chalk.green.bold("You win!! \n"))
        /* ask if they want to play again*/
        playAgain()

        }  else {
            /*if the puzzle is not solved prompt for another guess*/
            getGuess(word,selection,screenDisplay,badGuess,guessedLetters);
        }

    } else {
     /*if no guesses are left  */   
    console.log(chalk.red.bold("You lose. The word was  " + word))

    /* ask if they want to play again*/
    playAgain()
}

}

/*function to ask if the user wants to play again */

function playAgain() {
    inquirer
    .prompt([ {
      type:"confirm",
    name: "playconfirm",
      message: "Do you want to play again?",
      default:true
    }
    ])
    .then(answers => {
   if(answers.playconfirm) {
       /* start the game over by calling the initGame function*/
       clear();
       initGame();
       
   } else {
       console.log(chalk.blue.bold("Thanks for Playing!"))
   }
    
    })

}

/*function to check if all letters show guessed - meaning word is solved*/
function checkSolved(selection) {
    notGuessed=0;
    selection.letters.forEach(function(element) {
       
        if(element.guessed===false) {
            notGuessed++
        }

    })
}