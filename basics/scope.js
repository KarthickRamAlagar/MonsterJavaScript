//Scope in JaavaScript refers to the current context of code , Which determines the accessibility of variables, objects, and functions in some particular part of your code during runtime.
// There are two types of scope in JavaScript: Global Scope and Local Scope
// Global Scope: Variables declared outside of any function or block are in the global scope and can be accessed from anywhere in the code.
// Local Scope: Variables declared within a function or block are in the local scope and can only be accessed within that function or block.

//global scope
let name = "Ram"; // global

function greet() {
  console.log(name); // ✅ accessible
}

greet();
console.log(name); // ✅ accessible


//function scope or local scope
function sayHi() {
  let message = "Hello"; // function-scoped
  console.log(message);  // ✅ accessible inside
}

sayHi();
console.log(message); // ❌ ReferenceError

//block scope
if (true) {
  let age = 25;
  const pi = 3.14;
  console.log(age, pi); // ✅ accessible inside block
}

console.log(age); // ❌ ReferenceError
console.log(pi);  // ❌ ReferenceError

//lexical scope
function outer() {
  let x = 10;

  function inner() {
    console.log(x); // ✅ inner can access outer’s variable
  }

  inner();
}

outer();


//scope chain 
let a = 1;

function outer() {
  let b = 2;

  function inner() {
    let c = 3;
    console.log(a + b + c); // ✅ 1 + 2 + 3 = 6
  }

  inner();
}

outer();
