// Template Strings also known as Template Literals are a feature in JS that allows to create strings with embedded expressions.`

//before template literals

// (\) string sequence 
console.log("this is some\
    text with a new line and some more text");

//using string concatenation
console.log("this is some " + "text with a new line and some more text");

//with template literals
console.log(`this is some
    text with a new line and some more text`);

//expression in template literals
console.log(2**2);
console.log(`2 + 2 = ${2 + 2}`);

const name='RamAlagar';
const age=25;

//using template literals to create a string with variables
console.log(`My name is ${name} and I am ${age} years old.`);