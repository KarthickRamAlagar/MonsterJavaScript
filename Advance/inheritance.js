// Prototypal inheritance is a mechanism in JavaScript that allows objects to inherit properties and methods from other objects. 
// It is a fundamental concept in the language and is based on the prototype model. In prototypal inheritance, objects can serve as prototypes for other objects, forming a hierarchical chain of inheritance.

// In JavaScript, every object has an internal property called [[Prototype]] (often referred to as __proto__), 
// which points to its prototype object. When you access a property or method on an object, and that property or method is not found in the object itself,
//  JavaScript looks for it in the object's prototype (and further up the prototype chain, if needed) until it finds the property or reaches the top of the prototype chain, which is usually the Object.prototype.


// inheritance means  -> borrowing the function  for children from the parent 

// inheritance work flow without using class
//1. parent object - creation 
//2. definig own method by using prototype 
// 3. creating child object
// 4 .important step assigning the parent prototype to children prototype  
// 5. then creating instances 

//tip 
//📌 What’s prototype?
//It’s the object where parents store shared knowledge.

// 1st - parent object creation (constructor function)
 function Animal (name){
    this.name =name ;
 }
 //2. definig own method by using prototype for parent 
 Animal.prototype.sound =function (){
    return 'Animal Sound';
 }

 const A1 = new Animal('karthick')

 // 3. creating child object
 function Lion (name, bread){
  Animal.call(this)
  this.name =name;
  this.bread=bread;
 }
// 5. important step assigning the parent prototype to children prototype 
Lion.prototype =Object.create(Animal.prototype);
 // 4 . then creating instances 
const lion1 =new Lion('Mufassa','ManLion')
 console.log(lion1);

//now lion can access all the methods and property of the Animal object
console.log(lion1.sound())