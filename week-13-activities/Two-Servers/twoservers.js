var randomWordsList = ["Good", "Bad", "Ugly", "Awesome", "Cool", "Loser"];
var randomWord;

var Twitter = require('twitter');


// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORTONE = 7000;
var PORTTWO = 7500;

// Create a generic function to handle requests and responses
function handleRequestOne(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  randomWord = randomWordsList[Math.floor(Math.random() * randomWordsList.length)];
  response.end(randomWord + request.url);
}

function handleRequestTwo(request, response) {
	var client = new Twitter({
	  consumer_key: '',
	  consumer_secret: '',
	  access_token_key: '',
	  access_token_secret: ''
	});
 
	var params = {screen_name: '@iamPhilStubbs'};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
		if (!error) {
	    	console.log(tweets);
		}
		response.end(tweets +  "Path Hit: " + request.url);
	});
  // Send the below string to the client when the user visits the PORT URL
} 

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);

// Start our server so that it can begin listening to client requests.
serverOne.listen(PORTONE, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORTONE);
});

serverTwo.listen(PORTTWO, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORTTWO);
});