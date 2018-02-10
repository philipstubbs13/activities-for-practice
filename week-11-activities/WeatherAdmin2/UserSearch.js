var weather = require('weather-js');
var moment = require('moment'); 
 
var UserSearch = function(name,location) {
	this.name = name;
	this.location = location;
	this.date = Date.now();
	this.getWeather = function() {
		weather.find({search: this.location, degreeType: 'F'}, function(err, result) {
  			if(err) console.log(err);
 
  			console.log(JSON.stringify(result, null, 2));
		});

	};
};

module.exports = UserSearch;

// var user1 = new UserSearch("phil", "San Francisco");
// user1.getWeather();
// console.log("Date: " + moment(user1.date).format("MMM Do YY"));