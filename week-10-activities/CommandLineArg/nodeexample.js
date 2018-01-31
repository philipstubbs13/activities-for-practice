var input = process.argv;

var x = input[2];
var y = input[3];

// if (x === y) {
// 	console.log("true");
// }

// else {
// 	console.log("false");
// }

if ((x % 7) === 0 && (y % 7) === 0) {
	console.log("true");
}

else {
	console.log("false");
}