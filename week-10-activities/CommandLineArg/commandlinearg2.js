var input = process.argv

var x = input[2];

var y = input[3];

console.log(parseFloat(x) === parseFloat(y));

if ((x % 7) === 0 && (y % 7) === 0) {
	console.log("multiples of 7")
}

else {
	console.log("not multiples of 7");
}