var input = process.argv;
var operator = input[2];
var num1 = input[3];
var num2 = input[4];

if (operator === "add") {
	console.log(parseFloat(num1) + parseFloat(num2))
}

else if (operator === "subtract") {
	console.log(parseFloat(num1) - parseFloat(num2))
}

else if (operator === "multiply") {
	console.log(parseFloat(num1) * parseFloat(num2))
}

else if (operator === "divide") {
	console.log(parseFloat(num1) / parseFloat(num2))
}

else if (operator === "remainder") {
	console.log(parseFloat(num1) % parseFloat(num2))
}

else if (operator === "exp") {
	console.log(Math.pow(parseFloat(num1) , parseFloat(num2)))
}

else {
	console.log("Operator not found!")
}

// else if (process.argv[2] === "algebra") {
// 	console.log(parseAlgebra(process.argv[3]));
// }




