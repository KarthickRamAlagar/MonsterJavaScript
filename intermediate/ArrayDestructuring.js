// allows to us to unpack the values from arrays , objects, function  as seprarate distict variables

const arr = [1, 2, 3, 4, 5];
console.log(...arr); // by using the spread operators

const [c,d,e,f] = arr;
console.log(c, d, e, f); // 1 2 3 4 by using the destructuring method 

let a= 1,b=2;
[a, b] = [b, a]; // swapping the values of a and b
console.log(a, b); // 2 1

// destructuing in function 

function fn(){
    return [1,2,3];
}
let k,r;
[k,r]=fn()
console.log(k)

//ignoring the values from the function
const [s, , r1]= fn(); // these only work in array destructuring 
console.log(s,r1)

//assigning  the rest of an array to a variables
const[z,...y]= fn();
console.log(z,y);