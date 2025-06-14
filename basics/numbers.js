// Primitive data types
//Nubers
// represents - integers, float,NaN, Infinity -all are type of number

let num ="12345";
let num1 = 10.12345;
//Methods

let toFixed = num1.toFixed(2); 
let toPrecision = num1.toPrecision(4);
let toExponential = num1.toExponential(2);
let toStrings = num1.toString(2);
let valueOf = num1.valueOf();
let parseInte = parseInt(num); 
let parseFloats = parseFloat(num);

console.table({
    num1,
    toFixed,
    toPrecision,
    toExponential,
    toStrings,
    valueOf,
    parseInte,
    parseFloats
});

/*
 Quick Tips:
toString(2) is used to convert to binary.

toFixed(n) and toPrecision(n) help in formatting output.

parseInt() and parseFloat() extract numbers from strings.

NaN, Infinity, and -Infinity are special numeric values in JavaScript.
*/