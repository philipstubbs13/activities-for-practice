var UserSearch = require("./UserSearch.js");
var moment = require('moment');
var fs = require('fs'); 

function WeatherAdmin () {
	this.newUserSearch = function(name, location) {
		var  newUserSearch = new UserSearch (name, location);
		var logData = 

			"===========================================================" + "\r\n" +
			"Name: " + newUserSearch.name + "\r\n" +
			"Location: " + newUserSearch.location + "\r\n" +
			"Date: " + moment(newUserSearch.date).format("MMM Do YY") + "\r\n" +
			"===========================================================" + "\r\n" 

		fs.appendFile("log.txt", logData, function(err) {

			// If an error was experienced we say it.
			if (err) {
				console.log(err);
			}

			// If no error is experienced, we'll log the phrase "Content Added" to our node console.
			else {
				//console.log("Content Added!");
			}
		});

		newUserSearch.getWeather();
	};

	this.getData = function() {
		fs.readFile("log.txt", "utf8", function(error, data) {
		// If the code experiences any errors it will log the error to the console.
  		if (error) {
    		return console.log(error);
  		}
  		 //We will then print the contents of data
 		console.log(data);
 	});

	}
}

module.exports = WeatherAdmin;