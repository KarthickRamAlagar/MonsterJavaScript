//The for...of loop in javascript is a modern iteration statement introduced in es6 .
//used to loop over elements in iterable objects like arrays, strings, maps, sets and more .

// syntax 
// for ( variable of iterable){...}  powerfull than for...in loop


const arr=[1,2,3,4,5]
for (let i in arr){
    console.log(i)
}

const text="RamAlagar";
for(let char of text){
    console.log(char)
}