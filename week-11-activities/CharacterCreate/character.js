// Over the course of this activity you are going to be using constructors to create simplistic characters for use within a very basic Roleplaying Game (RPG)
// Each character created using your constructor should have the following properties...
// Name: The character's name --> String
// Profession: What the character does for a living --> String
// Gender: The character's gender --> String
// Age: The character's age --> Integer
// Strength: Abstraction for how strong the character is --> Integer
// HitPoints (HP): Abstraction for how much health the character has --> Integer
// PrintStats: Function which prints all of a character's properties to the screen
// Once you have created your constructor, create two new characters and print their properties to the screen
// Fool around and get comfortable with your constructor before moving onto the next parts of the activity
// Now that you feel comfortable with your constructor, it is time to start making this character creation system a little more reactive by adding in some more methods...
// IsAlive: Function which prints whether or not this character is alive by looking into their hitpoints and determining whether they are above or below zero.
// Attack: Function which takes in a second character's hitpoints and subtracts this character's strength from it.
// LevelUp: Function which increases this character's Age by 1, their Strength by 5, and their HitPoints by 25.
// BONUS: After completing the previous sections and making sure they work, you now have everything you need to create a very basic RPG where two characters fight one another. Don't worry if you cannot finish this part of the activity as, by completing the above sections you are well on your way to mastering constructors!

function Character (name, profession, gender, age, strength, hitpoints) {
	this.name = name;
	this.profession = profession;
	this.gender = gender;
	this.age = age;
	this.strength = strength;
	this.hitpoints = hitpoints;
	this.PrintStats = function() {
		var characterProperties = 

		"Name: " + this.name + "\r\n" +
		"Profession: " + this.profession + "\r\n" +
		"Gender: " + this.gender + "\r\n" +
		"Age: " + this.age + "\r\n" + 
		"Strength: " + this.strength + "\r\n" +
		"Hit Points: " + this.hitpoints + "\r\n" 

		console.log(characterProperties);
	};

	this.Attack = function(character2) {
		character2.hitpoints -= this.strength;
	};

	this.isAlive = function() {
		if (this.hitpoints > 0){
			console.log(this.name + " is alive! " + this.name + " has " + this.hitpoints + " hitpoints.");
			return true;
		}

		console.log(this.name + " is dead!");
		return false;
	};

}

	Character.prototype.LevelUp = function() {
		this.age += 1;
		this.strength += 5;
		this.hitpoints += 25;
		this.PrintStats();
	};

//Sets the variables "character1" and "character2" to Character.
var character1 = new Character("Tom Brady", "Quarterback", "male", 40, 12, 85);
var character2 = new Character("Nick Foles", "Quarterback", "male", 29, 7, 50);

character1.newproperty = "Snow";
console.log(character1);
console.log(character2);

//calling character1 and character2 printStats methods
//character1.PrintStats();
//character2.PrintStats();

// character1.Attack(character2);
// character2.PrintStats();
// character2.isAlive();

// character1.LevelUp();
// character1.PrintStats();

// while (character1.isAlive() === true && character2.isAlive() === true) {
// 	character1.Attack(character2);
// 	character2.Attack(character1);
// 	character1.PrintStats();
// 	character2.PrintStats();
// }

var rogue = {
	hitpoints: 1,
	strength: 10,
}

rogue.isAlive = function() {
	./..
}