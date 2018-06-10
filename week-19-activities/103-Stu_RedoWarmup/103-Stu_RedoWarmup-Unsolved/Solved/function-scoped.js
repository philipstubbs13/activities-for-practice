let name = "Nick";

const tinyize = function(name) {
  //const should be preferred when the value won't be assigned.
  const myName = "Tiny " + name + "!";

  myName = "Morty!"; //throws error.

  return myName;
};

//let MyArray = [];
const MyArray = [];

MyArray.push("Yay!"); // this is fine.
MyArray = ["Happy Birthday"] // this is error
MyArray = 567 //


//Name can be reassigned since it's using let.
name = tinyize("Rick");
console.log(name);

for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i); //output: 0, 1, 2, 3, 4
  }, 100);
}

// # Redo Warmup

// In this activity we will convert a JavaScript file using `var` to use `const` and `let` instead.

// ## Instructions

// * Open [function-scoped.js](Unsolved/function-scoped.js)

// * Convert all of the `var` identifiers in this file to use either `const` or `let`, without breaking the code.

// ### Hints

// * Remember, both `const` and `let` are block scoped.

// * `const` should be used for any values which won't be reassigned, `let` should be used for values that will be reassigned.
