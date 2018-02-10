//Write a function that accepts a string and a function as arguments. It should log the string, and then run the function.
// var superFunction = function () {
// 	console.log("This is a callback.");
// }

// function doSomeRandomThing (string, myFunction) {
// 	console.log(string);
// 	myFunction();
// }

// doSomeRandomThing("This is a string", superFunction);



//Write a function that accepts a boolean value and a function as arguments. It should run the function if and only if the boolean argument is true.
// var randomThing = true;
// var awesomeFunction = function(){
// 	console.log("This is a callback.");
// }

// function doStuff (boolean, randomFunction) {
// 	if (boolean) {
// 		randomFunction();
// 	}

// 	else {
// 		console.log("false");
// 	}

// }

// doStuff(randomThing, awesomeFunction);

//Write a function that accepts a function(F) and a value(V), and returns a function that returns the result of running F on V.
//this sounds tricky, but it's easier than it sounds.
function uselessFunction (value, callback) {
	return function() {
		return callback(value);
	}
}

var helloFunction = uselessFunction("Hello!!!", console.log);
helloFunction();