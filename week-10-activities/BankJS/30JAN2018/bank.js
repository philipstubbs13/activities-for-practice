//fs package is required to read and write to files.
var fs = require("fs");

//Create a variable to hold our command line arguments.
var input = process.argv;

//Create a variable to hold the type of transaction: deposit, withdraw, total, and lotto.
var transaction = input[2];

//Create a variable to hold the amount of money the user wants to withdraw or deposit from bank account.
var amount = input[3];

//Create a variable to hold the total amount of money in bank account.
var total = 0;

//If tansaction is deposit, add the number entered on the command line to bank.txt.
if (transaction === "deposit") {
	deposit();
}

//If the transaction is total, add up all the numbers that are in bank.txt.
else if (transaction === "total") {
	bankTotal();
}

//If the transaction is withdraw, add the number entered on the command line to bank.txt. This number will be negative.
else if (transaction === "withdraw") {
	withdraw();
}

//If the transaction is lotto, play lottery.
else if (transaction === "lotto") {
	playLottery();
}

//Deposit function. Append the amount specified on the command line to the bank.txt file.
function deposit() {
	fs.appendFile("bank.txt", ", " + amount , function(err,data) {
		if (err) {
			console.log(err);
		}
	})
	console.log("You deposited: $" + amount);
}

//Withdraw function. Append the amount specified on the command line to the bank.txt file. Add a negative in front of this number.
function withdraw() {
	fs.appendFile("bank.txt", ", -" + amount , function(err, data) {
		if(err) {
			console.log(err);
		}
		console.log("You made a withdraw of: $" + amount);
	})
}

//bankTotal function. Use the readFile method to add all of the numbers in the bank.txt file together to get total.
function bankTotal() {
	fs.readFile("bank.txt", "utf-8", function(err, data) {
		if(err) {
			console.log(err);
		}

		else {
			var bankArray = data.split(",");
			for (var i =0; i < bankArray.length; i++) {
				total = total + parseFloat(bankArray[i]);
			}
			console.log("Your total is: $" + total.toFixed(2));
		}
	});
}

//playLottery function. This generates a random lottery number betweeen 1 and 20.
//If the lottery number is 13, you won the lottery. $100 gets appended to the bank.txt file.
//If the lottery number is not 13, you lose. -3 gets appended to the bank.txt file.
function playLottery() {
	var lottoRandom = Math.floor(Math.random() * 20) + 1
	console.log("The lottery number is: " + lottoRandom);

	if (lottoRandom === 13) {
		fs.appendFile("bank.txt", ", " + 100 , function(err, data) {
			if(err){
				console.log(err);
			}
			console.log("You won the lottery! Here's a $100.");
		})
	}

	else {
		fs.appendFile("bank.txt", ", -" + 3 , function(err, data) {
			if(err) {
				console.log(err);
			}
			console.log("You lost!");
		})
	}
}


