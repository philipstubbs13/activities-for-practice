var fs = require('fs');

fs.readFile("best_things_ever.txt", "utf8", function(error, data) {
	if (error) {
		return console.log(error);
	}

	//console.log(data);

	var thingsArray = data.split(",");

	//console.log(Array);

	for (var i=0; i < thingsArray.length; i++) {
		console.log(thingsArray[i]);
	}

}); 