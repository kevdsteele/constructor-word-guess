
var Letter = function (character){
this.character = character;
this.placeHolder = "_",
this.guessed = false,

this.display = function () {
if (this.guessed===true) {
    return this.character
} else if (this.character ==="-") {
    return this.character
} else
return this.placeHolder

}

this.check = function (guess, goodGuess) {

    if (this.character===guess) {
        this.guessed=true;
        goodGuess++
      
      
    } 


    return goodGuess 
}
}

module.exports=Letter;