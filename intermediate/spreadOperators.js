//The spread operators is a new addition to the set of operators in ES6 .
//it takes in an iterable and expands it into individual elements.
//the spread operator is commonlly used to make shallow copies of js objects 
// using this operators makes the code 

//Spread operators in function 

let elements=(a,b,c,d) =>{
    console.log("a: ", a);
    console.log("b: ", b);
    console.log("c: ", c);
    console.log("d: ", d);
    return  a|| b || c || d;
}
const colors=["red", "green", "blue", "yellow"];
console.log(elements(colors));//a:  [ 'red', 'green', 'blue', 'yellow' ],b:  undefined,c:  undefined,d:  undefined

//to do this 
console.log(elements(...colors));// ... spread operators


// in arrat concatenation 
const arr1 =[1,2,3];
const arr2 =[4,5,6];
const arr3=arr1+arr2;
console.log(arr3); //1,2,34,5,6
// to do this 
const arr4 =[...arr1 , ...arr2];
console.log(arr4); // [ 1, 2, 3, 4, 5, 6 ]

const allNums= ["helo nums",...arr4 ];
console.log(allNums); // [ 'helo nums', 1, 2, 3, 4, 5, 6 ]

// in objects
const person = {
    name: "John",
    age: 30,
    city: "New York"
};
const person2 = {
    ...person,
    country: "USA"
};
console.log(person2); // { name: 'John', age: 30, city: 'New York', country: 'USA' } 