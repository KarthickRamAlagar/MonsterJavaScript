// Refactor the ES5 code to ES6  using Object Literals

var a =b = c = 1;
var obj = {
    a: a,
    b: b,
    c: c
};
console.log(obj); // { a: 1, b: 1, c: 1 }
// Refactored to ES6 using Object Literals
const RefactorObj= {
    a,b,c
}
console.log(RefactorObj); // { a: 1, b: 1, c: 1 }

//ES5 code 
var lib ={
    sum : function (a,b){
        return a + b;
    },
    multiply:function (a,b){
        return a * b;
    }
}

console.log(lib.sum(1,2),lib.multiply(2,3)); 

//es6 code 

const libES6 = {
    sum(c, d) {
        return c + d;
    },
    multiply(c,d){ 
        return c * d;
    }
}
console.log(libES6.sum(2, 2), lib.multiply(2, 4)); 