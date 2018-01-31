//fs is a core Node package for reading and writing files.
var fs = require("fs");

//This block of code will read from the best_things_ever.txt file
fs.readFile("best_things_ever.txt", "utf8", function(error, data){

	//If the code experiences any errors, it will log the error to the console.
	if (error) {
		return console.log(error);
	}

	//We will then pring the contents of data.
	//console.log(data);

	var dataArray = data.split(",");

	for (var i=0; i < dataArray.length; i++) {
		console.log(dataArray[i]);
	}
	
});