// other primitive data types

//  boolean , Symbol, undefined, null, bigInt

/*
 2. Boolean
Represents true or false.
*/
let isLoggedIn = true;
let hasAccess = false;

console.log(typeof isLoggedIn); // "boolean"

/*
Common in:
Conditional statements

Comparisons (===, !==, <, >)

Truthy/Falsy checks
*/

//3. Undefined
//A variable that has been declared but not assigned a value.
let x;
console.log(x); // undefined
console.log(typeof x); // "undefined"

//Tip:
//If a function doesn't return anything explicitly, it returns undefined.
function test() {}
console.log(test()); // undefined


/*4. Null
Represents intentional absence of a value. You must assign it manually.
*/
let user = null;
console.log(user); // null
console.log(typeof user); // ❗️"object" (this is a JS bug!)

// Use null when you want to clear a variable or signal that “nothing is there.”
//5. Symbol (ES6)
//Used to create unique identifiers, often in objects.
let id1 = Symbol('id');
let id2 = Symbol('id');

console.log(id1 === id2); // false — symbols are always unique
