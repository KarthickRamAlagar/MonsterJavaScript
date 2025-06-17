// Every JS Objects has a anonymous property called prototype
// Remember functions and array are objects
// that prototype will be the parent of that object, prototype property is objects by itself , which have some special properties amd methods


// basic example
const obj = {};
console.log(obj) //output [[Prototype]]:Object 

// behide the screen work

//Every Object ia associated with another object.
// The object (obj) is associated with [[Prototype]] object 
// Which means obj object will inherit all properties of Object.prototype || [[Prototype]]


// ------------------------------------------------------------------------------------------

// changing the built in method 
console.log(Array.prototype);

Array.prototype.pop = function (){
    return "Hello"
};

const Arr =[1,2,3,4,5]
console.log(Arr.pop())


// creating own built in methods

String.prototype.hello =function (){
    console.log(this);
    console.log(this.toUpperCase)
}




function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function () {
  return `Hi, I'm ${this.name}`;
};

const p1 = new Person("Ram");
console.log(p1.sayHi()); // "Hi, I'm Ram"

/*Now, Think of It Like This:
p1 is you 👶

p1 doesn’t have sayHi built-in.

So JS looks into your __proto__ (your parent): Person.prototype

It finds sayHi there and uses it.

🎉 That’s prototype in action.

📌 What’s __proto__?
It's the invisible link to your parent.

Think of it as saying:

"If I don’t know something, go ask my parent."

📌 What’s prototype?
It’s the object where parents store shared knowledge.

Used when you create new children (objects) using new.

🧠 Final One-Liner Recap:
prototype is like the blueprint of skills shared to new children.

__proto__ is how a child looks up to its parent to borrow skills. */