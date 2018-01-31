var fs = require("fs");

var input = process.argv;

var transaction = input[2];

var amount = input[3];

var total = 0;

if (transaction === "deposit") {
	deposit();
}

else if (transaction === "total") {
	bankTotal();
}

else if (transaction === "withdraw") {
	if (amount > total){
		console.log("Withdraw denied. Your total is: $" + total);
		console.log("You don't have enough in your account to Withdraw.")
	}

	else {
		withdraw();
	}
}

else if (transaction === "lotto") {
	playLottery();
}

function deposit() {
	fs.appendFile("bank.txt", ", " + amount , function(err,data) {
		if (err) {
			console.log(err);
		}
	})
}

function withdraw() {
	fs.appendFile("bank.txt", ", -" + amount , function(err, data) {
		if(err) {
			console.log(err);
		}
		console.log("You made a withdraw of: $" + amount);
	})
}

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


