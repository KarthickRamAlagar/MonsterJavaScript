// another data structure in js 

// creation 4 methods
// 1. Object Literal
// 2. Object Constructor
// 3. Object.create() method
// 4. Object.assign() method

// Object Literal
let obj = { name: 'John', age: 30 }; // Object Literal

// Object Constructor
let obj1 = new Object({
    name: 'Doe',
    age: 20
}); // Object Constructor


// Object.create() method
let obj2 = Object.create(obj); // Object.create() method
obj2.city = 'New York';

// Object.assign() method
let obj3 = Object.assign({}, obj, { country: 'USA' }); // Object.assign() method

console.log(obj); // { name: 'John', age: 30 }
console.log(obj1); // { name: 'Jane', age: 25 }
console.log(obj2); // { city: 'New York' }
console.log(obj3); // { name: 'John', age: 30, country: 'USA' }

let person = {
  name: "Karthick",
  age: 25,
  isStudent: true
};

// How to Access Values
console.log(person.name);      // dot notation → "Karthick"
console.log(person["age"]);   // bracket notation → 25

//How to Add/Update Properties
person.city = "Chennai";         // Add
person.age = 26;                 // Update

// How to Delete Properties
delete person.isStudent; // Removes the 'isStudent' key

//Check if a Key Exists
console.log("name" in person);   // true

// Looping through an Object
for (let key in person) {
  console.log(key, person[key]);
}
// name Karthick
// age 26
// city Chennai

//Nested Objects

let user = {
  name: "Ram",
  address: {
    city: "Mumbai",
    zip: 400001
  }
};

console.log(user.address.city); // Mumbai

//  Object Methods (Functions inside objects)
let student = {
  name: "Arun",
  greet: function () {
    return "Hello, " + this.name;
  }
};

console.log(student.greet()); // Hello, Arun


//Object.keys(), values(), entries()
let obj11 = { a: 1, b: 2 };

console.log(Object.keys(obj11));   // ['a', 'b']
console.log(Object.values(obj11)); // [1, 2]
console.log(Object.entries(obj11)); // [['a', 1], ['b', 2]]

//Object.assign() - Clone or Merge
//cloning
let original = { a: 1 };
let copy = Object.assign({}, original);
console.log(copy); // { a: 1 }

//merging 
let merge = Object.assign(original, { b: 2 });
console.log(merge); // { a: 1, b: 2 }


//function in the object

let FunctionObject={
  name:"RamAlagar",
  greet:function(){
    return`hello ,This is ${this.name} here `
  }
}
console.log(FunctionObject.greet());