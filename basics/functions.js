// Afunction is a block of code that performs a specific task
//function makes the code reusable . you can declare it once and use it multiple times.
//Function makes the program easier as each small task is divided into a function
// Function increases readability of the code
//DRY -Don't Repeat yourself
//function name(parameterIfAny){...}

const great= function(name) {
  console.log(`Hello ${name}`);
}
great("John"); // Hello John

function add(a, b) {
  return a + b;
}
console.log(add(5, 10)); // 15

(function () {
  console.log("I am IIFE and I run immediately!");
})();

let result= (function (a, b) {
  return a + b;
})(5, 10);
console.log(result); // 15