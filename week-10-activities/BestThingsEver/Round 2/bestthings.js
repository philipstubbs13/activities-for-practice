var fs = require ("fs");

fs.readFile("best_things_ever.txt", "utf-8", function(err,data) {
	if (err) {
		console.log(err);
	}

	else {
		var bestthingsArray = data.split(",");
		//console.log(bestthingsArray);
	}

	for (var i = 0; i < bestthingsArray.length; i++) {
		console.log(bestthingsArray[i]);
	}
})