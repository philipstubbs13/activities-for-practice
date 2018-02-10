var WeatherAdmin = require("./WeatherAdmin.js");

//Create variable for the command line arguments.
var input = process.argv;

var userType = input[2];

var userName = input[3];

var userLocation = input[4];

var myAdmin = new WeatherAdmin();

if (userType === "admin") {
	myAdmin.getData();
}

else {
	myAdmin.newUserSearch(userName, userLocation);
}