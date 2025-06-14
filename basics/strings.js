// string in single line
let s1='  hello   ';
// strings in multi line
let s2=`   hello
          world
        !`;
let num=1;
console.table({s1,s2});

// strrings methods

//basic methods  -> info & conversion
let length=s2.length;
let charAt=s2.charAt(0); 
let charCodeAt= s2.charCodeAt(1);
let  UpperCase= s1.toUpperCase();
let LowerCase= s1.toLowerCase();
let trim= s1.trim(); // removes leading and trailing spaces
let trimStart= s2.trimStart(); // removes leading spaces
let trimEnd= s1.trimEnd(); // removes trailing spaces
let stringConversion= num.toString(2); // converts number to string

console.table({
    length,
    charAt,
    charCodeAt,
    UpperCase,
    LowerCase,
    trim,
    trimStart,
    trimEnd,
    stringConversion
});

// searching and replacing
let includes = s2.includes("  wor");
let startsWith = s2.startsWith("   hello"); 
let endsWith = s2.endsWith("!");
let indexOf = s2.indexOf("world");
let lastIndexOf = s2.lastIndexOf("l");

console.table({
    includes,
    startsWith,
    endsWith,
    indexOf,
    lastIndexOf
})

//Extract & Slice 
let slicing= s2.slice(1,3); // slice(start, end)
let substring= s2.substring(1,3); // substring(start, end)

console.log(slicing,substring);

//Modifying , Replacing
let replacing = s2.replace("hello", "hi"); // replaces first occurrence
let replacingAll = s2.replaceAll("l", "L"); // replaces all occurrences     
let repeating = s1.repeat(3); // repeats string 3 times
let padStart= s1.padStart(2,'0');
let padEnd= s1.padEnd(2,'0'); // pads string to a certain length
console.table({
    replacing,
    replacingAll,
    repeating,
    padStart,
    padEnd
});


//split and Match

let splict= s1.split("");
let search = s1.search(/h/);
console.log(splict, search);

//concatenation
//1st method
let concat1 = s1.concat(s2); // concatenates two strings
//2nd method
let concat2 = `${s1} ${s2}`; // using template literals
//3rd method
let concat3 = s1 + s2; // using + operator
console.table({
    concat1,
    concat2,
    concat3
});

//Append
let append = s1 + "Hello"; // appending two strings
console.log(append);

//String Interpolation
let name = "John";
let age = 30;
let interpolation = `My name is ${name} and I am ${age} years old.`; // using template literals
console.log(interpolation);


//String Comparison
let str1 = "apple";
let str2 = "banana";
let comparison = str1.localeCompare(str2); // compares two strings
console.log(comparison); // returns -1 if str1 < str2, 0 if equal, 1 if str1 > str