// Combines two command line arguments (strings).
// console.log(process.argv[2] + process.argv[3]);

// Adds two command line arguments (numbers).
//console.log(parseFloat(process.argv[2]) + parseFloat(process.argv[3]));

if (process.argv[2] === process.argv[3]) {
	console.log ("They are equal!");
}

else if (process.argv[2] != process.argv[3]) {
	console.log("They are not equal!");
}

