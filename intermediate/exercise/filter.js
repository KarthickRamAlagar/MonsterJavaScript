//  iterate over the words array
//log the those word whose length is  grater than 6 

const words=[
    "RamAlagar",
    "Mugilan",
    "Karthi"
]

console.log(words
    .filter((word)=>word.length>=7)
    .map((word)=>word.charAt(0))
);

//Arrow function with curly braces in filter and map:
//When you use curly braces {} in an arrow function, you must use an explicit return statement.

//example for these condition is
//      .filter(word => { return word.length >= 7; })
//      .map(word => { return word.charAt(0); })