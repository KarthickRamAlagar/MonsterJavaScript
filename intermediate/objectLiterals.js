// object literal is es6 feature in js

// aimm to create the lots of students info in dynamic manner

const studentInfo = (name, age, location, course) => {
  return {
    name: name,
    age, //enhancement in object Literals
    location: location,
    course,
    intro(){
      return `Hello, my name is ${this.name}, I am ${this.age} years old, I live in ${this.location} and I am studying ${this.course}.`;
    }
  };
};

const RamAlagar = studentInfo("Ram Alagar", Infinity, "Madurai", "BE-CSE");
const Karthick = studentInfo("Karthick", 21, "Bengaluru", "BE-CSE");
const Alagar = studentInfo("Alagar", 22, "coimbatore", "BE-CSE");
const Ram = studentInfo("Ram", 23, "Salem", "BE-CSE");
const Ragu = studentInfo("Ragu", 24, "Trichy", "BE-CSE");
const Ragupathy = studentInfo("Ragupathy", 25, "Chennai", "BE-CSE");

console.log(RamAlagar.intro());
console.log(Karthick.intro());
console.log(Alagar.intro());
console.log(Ram.intro());
console.log(Ragu.intro());
console.log(Ragupathy.intro());
