// variables
// let , var, const

// comparision
/*
| Feature       | `var`             | `let`               | `const`             |
| ------------- | ----------------- | ------------------- | ------------------- |
| Scope         | Function          | Block               | Block               |
| Hoisted       | Yes (initialized) | Yes (uninitialized) | Yes (uninitialized) |
| Reassignable  | ✅ Yes            | ✅ Yes             | ❌ No               |
| Redeclarable  | ✅ Yes            | ❌ No              | ❌ No               |
| Modern usage? | ❌ Avoid          | ✅ Preferred       | ✅ Preferred        |
*/


//  Scope
//var – Function Scope
function testVar() {
  if (true) {
    var x = 10;
  }
  console.log(x); // ✅ 10 — accessible outside the block
}
testVar();

//let , const block scope

function testLetConst() {
  if (true) {
    let y = 20;
    const z = 30;
    console.log(y); // ✅ 20
    console.log(z); // ✅ 30
  }
  // console.log(y); ❌ Error: y is not defined
  // console.log(z); ❌ Error: z is not defined
}
testLetConst();


// Hoisting
// var – Hoisted and Initialized with undefined
console.log(a); //✅ undefined (hoisted and initialized) 
var  a = 5; 

//let and const – Hoisted but Not Initialized (TDZ)
// console.log(b); ❌ ReferenceError
let b = 10;

// console.log(c); ❌ ReferenceError
const c = 15;


//  Reassignable
//➤ var and let – Can be reassigned
var v = 1;
v = 2; // ✅ OK

let l = 3;
l = 4; // ✅ OK

// const – Cannot be reassigned
const k = 5;
// k = 6; ❌ TypeError: Assignment to constant variable

// Redeclarable
//➤ var – Can be redeclared in the same scope
var a = 10;
var a = 20; // ✅ OK
console.log(a); // 20
//➤ let and const – Cannot be redeclared in the same scope
let C = 30;
// const c = 60; ❌ Error: Identifier 'c' has already been declared


//Writtiing variables names
// 1. kabab case
let first_name;
// 2. snake case
let first_name_snake;
// 3. camel case
let firstNameCamel;
// 4. pascal case
let FirstNamePascal;
// 5. screaming snake case
let FIRST_NAME_SCREAMING_SNAKE;
