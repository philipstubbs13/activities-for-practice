//constructor allows us to create constructive template for objects that we can reuse for lots of different stuff.
//Capitalize the names of constructors.
//Constructor which can be used to create object and ".makenoise" properties
function Animal(raining, noise) {
	this.raining = raining;
	this.noise = noise;
	this.makeNoise = function() {
		if (this.raining === true) {
			console.log(this.noise);
		}
	};
}

//Sets the variables "dogs" and "cats" to be Animal.
var dogs = new Animal(true, "Woof!");
var cats = new Animal(false, "Meow!");

//calling dogs and cats makeNoise methods
dogs.makeNoise();
cats.makeNoise();

//If we want, we can change an objects properties
cats.raining = true;
cats.makeNoise();

var massHysteria = function(dogs, cats) {
	if (dogs.raining === true && cats.raining === true) {
		console.log("DOGS AND CATS LIVING TOGETHER");
	}
}

massHysteria(dogs, cats);