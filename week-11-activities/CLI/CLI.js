// Instructions

// Implement the logic for the CLI component. Refer to the architectural diagram for help.


// Before you write any JavaScript, write out the CLI component's behavior in pseudocode.
// Be sure to require the WeatherAdmin module here.
// When you're finished, ask the instructor or one of your TAs to approve your solution.

// Hint: This component doesn't require much code.

var WeatherAdmin = require("./WeatherAdmin");

// Hold the value whether someone is an "admin" or "user"
var loginType = process.argv[2];

// If they are a user... they will also need to provide a "name"
var userName = process.argv[3];

// And they will need to provide a "location"
var userLocation = process.argv[4];

// Create an instance of the WeatherAdmin. Remember WeatherAdmin is a constructor! Not an object.
var MyAdmin = new WeatherAdmin();

if (loginType === "admin") {
  MyAdmin.getData();
}
else {
  MyAdmin.newUserSearch(userName, userLocation);
}
