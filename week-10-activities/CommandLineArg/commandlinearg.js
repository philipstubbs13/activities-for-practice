var input = process.argv;

var x = input[2];
var y = input[3];

//Starting from a blank JavaScript file, create a Node application that takes in two command line arguments and 
//checks if they are equal. If the two numbers are equal then output: "true". Otherwise output: "false".

// if (parseFloat(x) === parseFloat(y)) {
// 	console.log("true");
// }

// else {
// 	console.log("false");
// }

//Bonus: Check if the two numbers are both multiples of 7. Again output "true" if they are and output "false" if they are not.
if ((x % 7) === 0 && (y % 7) === 0) {
	console.log("true");
}

else {
	console.log("false");
}