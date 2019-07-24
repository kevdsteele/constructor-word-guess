var Letter = require("./letter.js")

var chalk = require("chalk");

var Word = function () {
this.letters=[],
this.createLetters = function (word, screenDisplay) {

for (i=0; i < word.length; i++) {
    
    var letter = new Letter(word[i])
   
    if( word[i] ===" "|| word[i]==="-" || word[i]===".") {
        letter.guessed=true;
    }

    
    this.letters.push(letter)  
    
}
this.update(screenDisplay);
},

this.update = function(screenDisplay) {

this.letters.forEach(function(element) {

  screenDisplay+=element.display() + " ";

})
console.log("\n"+ screenDisplay + "\n")
},

this.guess = function(guessedLetter,goodGuess,screenDisplay,badGuess) {

this.letters.forEach(function(element) {

goodGuess=element.check(guessedLetter,goodGuess);

})

if(goodGuess < 1) {

badGuess--

console.log(chalk.red.inverse("\n Incorrect. You have " + (badGuess) + " guesses left"))

} else {
    console.log(chalk.green.inverse("\n Correct"))
}

this.update(screenDisplay);
return badGuess
}

}

module.exports=Word;




