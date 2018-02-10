// Instructions

	// Make a dogs object with three keys...
	var dogs = {
		// First key called "raining" with a value of true
		raining: true,
		// Second key called "noise" with a value of "Woof!"
		noise: "Woof!",
// Third key called "makeNoise" which contains a function which console.logs the noise to the screen if it is raining dogs
		makeNoise: function(){
			if (dogs.raining === true) {
				console.log(dogs.noise);
			}
		}
	}

	// Make a cats object with three keys...
	var cats = {
		// First key called "raining" with a value of false
		raining: false,
		// Second key called "noise" with a value of "Meow!"
		noise: "Meow!",
		// Third key called "makeNoise" which contains a function which console.logs the noise to the screen if it is raining cats
		makeNoise: function(){
			if(cats.raining === true){
				console.log(cats.noise);
			}
		}
	}

// Make the dog bark
//dogs.raining = false;
dogs.makeNoise();

// Make the cat meow
cats.raining = true;
cats.makeNoise();

// BONUS: Create a function called "massHysteria" which takes in both the cats and the dogs object and prints "DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!" if both of the raining keys are equal to true.
var massHysteria = function () {
	if (dogs.raining === true && cats.raining === true) {
		console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA");
	}
}

massHysteria();

// BONUS: Look to see if you can find any means to simplify your code further and further