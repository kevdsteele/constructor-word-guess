# Constructor Superhero Word Guess CLI Game

## Fully developed by Kevin Steele for GWU Full Stack Web Development BootCamp 

**Github repo**: https://github.com/kevdsteele/constructor-word-guess

### Dependencies

* **[Node.JS](https://nodejs.org/en/download/)** must be installed to run this application

> * [Chalk](https://www.npmjs.com/package/chalk), [Clear](https://www.npmjs.com/package/clear) , [Inquirer](https://www.npmjs.com/package/inquirer) and [Superheroes](https://www.npmjs.com/package/superheroes) node packages must also be installed before running this application*

* The Node Superheroes package is used to generate a randaom superhero name as the word to guess. 
* The Node Inquirer package is used to get the user input. 
* The Node Chalk package is used to provide color output to the console. 
* The Node Clear package clears the console after each game.


### This is an application that demonstrates how to use Javascript Construtors. It consist of three files:

> index.js is the main file that consists of the primary game functions
> index.js requires the words.js file 

> words.js contains a Constructor that is responible for holding an array of letter objects. It also contains three functions. It requires the letter.js file 

* A functions that calls upon the letter.js Contructor to create the letter object

* A Function to update the word with either a guessed letter or a placeholder

* a Function to process the guessed letter 

> letters.js contains a Constructor that creates each letter object

* String value for each letter, space, hyphen or perion contained in the random superhero name 

* A boolean value to indicate if the letter has been guessed 

* A function that shows the character of the placeholder 

* A function that compares the guess each character and updates to true when guessed 
