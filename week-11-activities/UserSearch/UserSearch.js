// Implement the logic for the UserSearch component. You should begin planning the component with pseudocode.

// This component requires you to use the weather-js NPM package. Take a moment to research and experiment with the API, documented here:  https://www.npmjs.com/package/weather-js

// Create a UserSearch constructor. It should accept a user's name and location as arguments, and store the value of Date.now() in a date property.
// Objects returned by the UserSearch constructor should also have a getWeather method, which should log or return the weather in the user's location.
// Test your UserSearch constructor by feeding it dummy data for now.

// We're incorporating an npm package for doing weather searches.
var weather = require("weather-js");

// Creates a UserSearch Constructor
var UserSearch = function(name, location) {
  this.name = name;
  this.location = location;
  this.date = Date.now();

  this.getWeather = function() {

    weather.find({ search: this.location, degreeType: "F" }, function(err, result) {
      if (err) console.log(err);

      console.log(JSON.stringify(result, null, 2));
    });

  };

};

module.exports = UserSearch;
