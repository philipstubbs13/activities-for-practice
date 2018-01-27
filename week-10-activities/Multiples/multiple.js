var input = parseFloat(process.argv[2]);
//console.log(input);

var sum = 0;

for (var i = 6; i <= input; i+= 6) {
	sum += i;
}

console.log(sum);