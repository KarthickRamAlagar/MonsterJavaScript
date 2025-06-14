// Symbols is a unique and immutable primitive data types in es6 .
//A symbol is udentifier for object  properties to avoid potentials nameing conficts.

const mySymbol1=  Symbol()
console.log(mySymbol1)

const symA = Symbol('id');
const symB = Symbol('id');
console.log(symA === symB); // false

const id = Symbol('id');
const user = {
  name: 'Alice',
  [id]: 123
};
console.log(user[id]); // 123
const sym = Symbol('key');
const obj = { [sym]: 'value' };

console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol(key) ]