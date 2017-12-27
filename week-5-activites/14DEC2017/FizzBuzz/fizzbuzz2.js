//Create a for loop that loops through the numbers from 1 to 100
for (i=1; i <= 100; i++) {
	if (i%3 === 0 && i%5 === 0) {
		console.log("Fizz Buzz");
	}

	else if (i%3 === 0) {
		console.log("Fizz");
	}

	else if (i%5 === 0) {
		console.log("Buzz");
	}

	else {
		console.log(i);
	}
}

//if both, print Fizz Buzz.


//Inside the loop, if number divided by three gives remainder zero, then it's multiple of three.

//If number divided by five gives remainder zero, then it's a multiple of five.