var input = process.argv;

var operator = input[2];
var x = parseFloat(input[3]);
var y = parseFloat(input[4]);
var z = parseFloat(input[5]);

if (operator === "add") {
	console.log(x + y);
}

else if (operator === "subtract") {
	console.log(x - y);
}

else if (operator === "multiply") {
	console.log(x * y);
}

else if (operator === "divide") {
	console.log(x / y);
}

else if (operator === "exp") {
	console.log(Math.pow(x, y));
}

else if (operator === "remainder") {
	console.log(x % y);
}

else if (operator === "algebra") {
	console.log((z - y) / 4 );
}

else {
	console.log ("operator not found");
}

