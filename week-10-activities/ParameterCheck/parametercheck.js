var x = process.argv[2];
var y = process.argv[3];

console.log(x);
console.log(y);

if (x === y) {
	console.log ("equal");
}

else if (x != y) {
	console.log("not equal");
}

// Solution 2 - Simplified (Re-factored)
//console.log(process.argv[2] === process.argv[3]);
