// this keyword refers to the object it belongs to .
// It has different values depending on where it is used

// in a method -> refers to owner object
// Alone -> refers to global object (window object)
// in a function -> refers to the global object

// in a method -> refers to owner object
const ownerObject ={
    name: "RamAlagar",
    getName: function(){
       console.log( `Hi, My name is ${this.name}`)
    }
};

console.log(ownerObject.getName());

const obj ={
    hello:"first",
    get: function ()
{
    return this // in this case it refres to that owner object 
}}


// this in arrow function 

const ArrowObj = {
    first : "hello",
    greet : ()=> this.first  // it returns undefined   nternally it seems to be window.first , but we didn't declare in window object and we declaed inside the our own obj(ArrowObj)
}
const ArrowObj1 = {
    first : "hello",
    greet : ()=> this  // it  refers to window objects 
}
// Alone -> refers to global object
let x= this;

//in a function -> refers to the global object

const windowObj =function(){
    return this; // refering to the window object
}

console.log(windowObj);
