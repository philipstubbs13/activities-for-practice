// Dependencies
var express = require("express");

// Create express app instance.
var app = express();

// Routes
// What routes do you need to have? Which ones are optional?
// TODO Add your routes here
app.get("/:operation/:number1/:number2", function(req, res) {

  // TODO parse out the variables from the request
  // Parameters are received from the URL
  // TODO make sure they're converted to integers (and not strings)
  // Parameters are converted to integers
  var operation = req.params.operation;
  var number1 = parseInt(req.params.number1);
  var number2 = parseInt(req.params.number2);

  // Initialize the result variable to send later
  var result;
  // Switch statement chooses operation based on the operation parameter.
  switch (operation) {
    // BONUS - How could you use * + etc. inside the app.get()?
    case "add": result = number1 + number2;
      // Add your logic here. Pun intended.
      break;
    case "subtract": result = number1 - number2;
      // Subtract logic
      break;
    case "multiply": result = number1 * number2;
      // Multiply
      break;
    case "divide": result = number1 / number2;
      // Divide
      break;
    default:
      // Handle anything that isn't specified
      result =
        "Sorry! The only valid operations are add, subtract, multiply, and divide.";
  }

  // We return the result back to the user in the form of a string
  res.send(result.toString());

});

// Initiate the listener.
app.listen(3002);
