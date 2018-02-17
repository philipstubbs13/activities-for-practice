var mysql = require('mysql');

var inquirer = require('inquirer');

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: 'root',
	password: '',
	database: 'greatbay'
});

// function logInOrSignUp() {
// 	var login = [
// 	 {
// 	 	type: 'list',
// 	 	name: 'item',
// 	 	message: 'Welcome to Great Bay. Select LOG IN if you already have an account or select SIGN UP if you are new.',
// 	    choices: ['LOG IN', 'SIGN ME UP'],
// 	    filter: function(val) {
// 	      return val.toLowerCase();
// 	    }
// 	 }
// 	];

// 	inquirer.prompt(login).then(answers => {
// 		console.log(answers);
// 		if (answers.item === "log in") {
// 			logMeIn();
// 		}

// 		else {
// 			console.log("sign me up");
// 		}
// 	});
// }

// logInOrSignUp();

// function logMeIn() {
// 	connection.query("SELECT * FROM users", function(err, res){
//  	if(err) throw err;

// 	var credentials = [
// 	  {
// 	    type: 'text',
// 	    name: 'email',
// 	    message: 'Enter your email address: '
// 	  },

// 	  {
// 	    type: 'password',
// 	    name: 'password',
// 	    message: 'Enter your password: ',
// 	  }
// 	];

// 	inquirer.prompt(credentials).then(answers => {
// 		//console.log(res);
// 		var usersArray = [];
// 		for (var i = 0; i < res.length; i++){
// 			usersArray.push(res[i].email);
// 		}

// 		if (usersArray.indexOf(answers.email) > -1) {
// 			console.log("User exists in DB");
// 		}

// 		else  {
// 			console.log("This email address is not associated with an existing account.")
// 			console.log("Try a different email address or SIGN UP for a new account.");
// 			logInOrSignUp();
// 		}

// 		for (var i = 0; i < usersArray.length; i++) {

// 		}
// 		})

// 	});
// }


function postOrBid() {
	var question = [
	  {
	    type: 'text',
	    name: 'postBidItem',
	    message: 'Do you want to POST an item to the auction or BID on an item?',
	  }
	];

	inquirer.prompt(question).then(answers => {
	  if (answers.postBidItem.toUpperCase() === "POST") {
	  	postItem();
	  }

	  else if (answers.postBidItem.toUpperCase() === "BID") {
	  	bidItem();
	  }

	  else {
	  	console.log("Sorry, we didn't get that.");
	  	postOrBid();
	  }
	  
	});
}

postOrBid();

function postItem() {
	var addYourItem = [
	 {
	 	type: 'text',
	 	name: 'itemName',
	 	message: 'What is the item you would like to post?'
	 },
	 {
	 	type: 'text',
	 	name: 'itemCategory',
	 	message: 'What category would you like to post this item into?'
	 },
	 {
	 	type: 'text',
	 	name: 'startBid',
	 	message: 'What would you like to make the starting bid?'
	 },
	];

	inquirer.prompt(addYourItem).then(answers => {
		var query = connection.query(
			"INSERT INTO bidItems SET ?", 
			{
				item: answers.itemName.toUpperCase(),
				category: answers.itemCategory.toUpperCase(),
				startingBid: answers.startBid.toUpperCase()

			},
			function(err, res) {
				if (err){
					console.log("error: " + err);
				}
				//console.log(res.affectedRows + " Your item was posted!\n");
				console.log("Your item was posted!");
				//updateSong();
				
			})
		connection.end();
	});
}

function bidItem() {
	connection.query("SELECT * FROM biditems", function(err, res){
		if(err) throw err;

	var bidOnItem = [
	 {
	 	type: 'list',
	 	name: 'item',
	 	message: 'What item would you like to bid on?',
	 	choices: function() {
	 		itemsArray = [];
	 		for (var i = 0; i < res.length; i++) {
	 			itemsArray.push(res[i].item);
	 		}
	 		return itemsArray;
	 	}
	 },
	 {
	 	type: 'text',
	 	name: 'startBid',
	 	message: 'What would you like bid?'
	 },
	];

	inquirer.prompt(bidOnItem).then(answers => {
		var biddingItem;
		for (var i = 0; i < res.length; i++){
			if (res[i].item === answers.item) {
				biddingItem = res[i];
			}
		}
		//console.log(biddingItem);

		if (biddingItem.startingBid < answers.startBid) {
		

			var query = connection.query(
				"UPDATE biditems SET ? WHERE ?",
			[
			{
				startingBid: answers.startBid,
			},
			{
				id: biddingItem.id
			}

		],
		function(err, res) {
			//console.log(res.affectedRows + " item updated!\n");
			console.log("Bid submitted successfully. You are currently the highest bidder.  \n");
			postOrBid();
		}
	);
		}

		else {
			console.log("Your bid was too low.");
			postOrBid();
		}
	});
});
}