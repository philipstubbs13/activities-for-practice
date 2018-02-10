var input = process.argv;

var myArray = [];

for (var i = 2; i < input.length; i++) {
	myArray.push(parseFloat(input[i]));
}

console.log(myArray);

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
console.log(myArray.sort(sortNums));

function sortNums(a, b) {
	return(a - b);
}