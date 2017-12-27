//Arrays and Variables
var randomWord = "";
var listOfWords = ["javascript" , "jquery" , "html", "bootstrap"]
var lettersInWord = [""];
var spaces = [""];











//Functions
function start() {
//When game is started, generate random word from listOfWords array
randomWord = listOfWords[Math.floor(Math.random() * listOfWords.length)];

lettersInWord = randomWord.split("");
console.log(lettersInWord);

//create underscores
for (var i =0; i < lettersInWord.length; i++ {
	spaces[i] = "_ ";

}



}
















//Execute functions
start();