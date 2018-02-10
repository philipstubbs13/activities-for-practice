// Instructions

// Write a function that accepts a string and a function as arguments. It should log the string, and then run the function.
// Write a function that accepts a boolean value and a function as arguments. It should run the function if and only if the boolean argument is true.
// Write a function that accepts a function (F) and a value (V), and returns a function that returns the result of running F on V. 
//This sounds tricky, but it's easier than it sounds—just take it step by step!
// Finally, write a short message to a file using fs.writeFile. Does this function use callbacks? If so, identify them.

var fs = require("fs");

function logBefore(func, message) {
  console.log(message);

  func();
}

function runIf(func, bool) {
  if (bool) {
    func();
  }
}

function wrap(func, value) {
  return function() {
    return func(value);
  };
}

// Callbacks appear in familiar places, like fs.writeFile.
fs.writeFile("log.txt", "Log message!", function(err) {

  if (err) {
    console.log(err);
  }

  console.log("File saved!");

});

// Alternatively, we can assign our function to a variable,
// and pass it by name.
var writeFileCallback = function(err) {

  if (err) {
    console.log(err);
  }

  console.log("File saved!");

};

fs.writeFile("log.txt", "Log message!", writeFileCallback);
