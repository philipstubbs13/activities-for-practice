// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
var inquirer = require('inquirer');

console.log('Hello');

inquirer.prompt ([
	{
		type: 'input',
		name: 'name',
		message: "What's your name?",
	},

	{
		type: 'list',
		name: 'pointguard',
		message: 'Choose a point guard.',
		choices: [
		'Kyrie Irving',
		'Steph Curry',
		'John Wall',
		'Russell Westbrook',
		'Damien Lillard'
		]
	},

	{
		type: 'list',
		name: 'shootingguard',
		message: 'Choose a shooting guard.',
		choices: [
		'Jimmy Butler',
		'James Harden',
		'Klay Thompson',
		'Avery Bradley',
		'C.J. McCollum'
		]
	},

	{
		type: 'list',
		name: 'smallforward',
		message: 'Choose a small forward.',
		choices: [
		'Gordon Hayward',
		'Paul George',
		'Kawhi Leonard',
		'Lebron James',
		'Carmelo Anthony'
		]
	},

	{
		type: 'list',
		name: 'powerforward',
		message: 'Choose a power forward.',
		choices: [
		'Kristaps Porzingis',
		'Blake Griffin',
		'Draymond Green',
		'Kevin Durant',
		'Anthony Davis'
		]
	},

		{
		type: 'list',
		name: 'center',
		message: 'Choose a center.',
		choices: [
		'Karl Anthony Towns',
		'Al Horford',
		'Joel Embiid',
		'DeMarcus Cousins',
		'Nikola Jokic'
		]
	},

	{
		type: 'confirm',
		name: 'start',
		message: 'Are you ready to play?'
	},



]).then(function(user) {

	var dreamTeam = 

	"Your NBA Dream Team is: " + "\r\n" +

	"Point guard: " + user.pointguard + "\r\n" +

	"Shooting guard: " + user.shootingguard + "\r\n" +

	"Small forward: " + user.smallforward + "\r\n" +

	"Power forward: " + user.powerforward + "\r\n" + 

	"Center: " + user.center + "\r\n"

	console.log("Hi, " + user.name);
	console.log(dreamTeam);

});



