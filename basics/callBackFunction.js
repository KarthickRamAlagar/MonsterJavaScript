//when we provide function as an (argument) to another function that function is known as call back function

 //now callback function 
 function greetUser(c){
    let name='RamAlagar';   
    c(name);
 }
greetUser(function sayHello(name)
{
    console.log(`Hello ${name}`);
} 
);
// Hello RamAlagar   //Higher-Order-Function
// A higher-order function is a function that takes another function as an argument or returns a function as its result.
// In this case, greetUser is a higher-order function because it takes sayHello as an argument. 


//another examples
function showCallFunc(fn){
    const value=1;
    fn(value);
}

showCallFunc(function(value){
    console.log(value);
});

function results (addNumbers){
    const a=10;
    const b=a;
    addNumbers(a, b);
}

results(function addNumbers(c,d){
    console.log(c + d);
})