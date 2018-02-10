
function Player (name, position, offense, defense) {
	this.name = name;
	this.position = position;
	this.offense = parseInt(offense);
	this.defense = parseInt(defense);
	this.goodGame = function () {
		var coin = (Math.floor(Math.random() * 2));
		console.log(coin);
		if(coin == 0) {
			this.defense++
			console.log(this.name + "'s defense went up!");
			console.log("Defense: " + this.defense);
		}

		else {
			this.offense++
			console.log(this.name + "'s offense went up!");
			console.log("Offense: " + this.offense);
		}
	}

	this.badGame = function () {
		var coin = (Math.floor(Math.random() * 2));
		console.log(coin);
		if(coin == 0) {
			this.defense--
			console.log(this.name + "'s defense went down!");
			console.log("Defense: " + this.defense);
		}

		else {
			this.offense--
			console.log(this.name + "'s offense went up!");
			console.log("Offense: " + this.offense);
		}
	}
	this.printStats = function() {
		var playerInfo = 
			"Name: " + this.name + "\r\n" + 
			"Position: " + this.position + "\r\n" +
			"Offense: " + this.offense + "\r\n" +
			"Defense: " + this.defense + "\r\n"

		console.log (playerInfo);
	}
}


var player1 = new Player ("Steph Curry", "Point Guard", 10, 7);

var starters = [];
var subs = [];
var team = [];

// player1.badGame();
// player1.printStats();

var createPlayer = function() {
	if(starters.length + subs.length < 8) {
		console.log("\nNEW PLAYER!\n");

	inquirer.prompt([
      {
        name: "name",
        message: "Player's Name: "
      }, {
        name: "position",
        message: "Player's position: "
      }, {
        name: "offense",
        message: "Player's Offensive Ability: ",
        validate: function(value) {
          if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
            return true;
          }
          return false;
        }
      }, {
        name: "defense",
        message: "Player's Defensive Ability: ",
        validate: function(value) {
          if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
            return true;
          }
          return false;
        }
      }
    ]).then(function(answers) {
    	var newPlayer = new Player(answers.name, answers.position, answers.offense, answers.defense);

    	if (starters.length < 5) {
    		starters.push(newPlayer);
    		console.log(newPlayer.name + " was added to the starters.");
    	}

    	else {
    		subs.push(newPlayer);
    		console.log(newPlayer.name + " was added to the subs.");
    	}
    	team.push(newPlayer);
    	createPlayer();
    });
	}

	else {
		for (var i = 0; i < team.length; i++) {
			team[i].printStats();
		}
	}
}
