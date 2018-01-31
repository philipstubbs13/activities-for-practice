// fs is a core Node package for reading and writing files
var fs = require("fs");

// This block of code will read from the "best_tings_ever.txt" file.
// It's important to include the "utf8" parameter or the code will provide stream data (garbage)
// The code will store the contents of the reading inside the variable "data"
fs.readFile("best_things_ever.txt", "utf8", function(error, data) {

  // If the code experiences any errors it will log the error to the console.
  if (error) {
    return console.log(error);
  }


  // Then split it by commas (to make it more readable)
  var dataArr = data.split(",");

  //Looop through the newly created dataArr array.
  for (var i = 0; i < dataArr.length; i++) {
  	//Print each element (item) of the array
  	console.log(dataArr[i]);
  }

});
