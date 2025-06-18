// 4 pillars of OOPs 
// 1. encapsulation
// 2.Abstraction
// 3.Inheritance
// 4.Polymorphism

// 1 Encapsulation -> is a concept of bundling the data(properties) and methods(function) together within the object
// it can be acheived by clousers or symbols

function Counter () {
  let _count = 0 //private variable
  //public method that can be access and modify the private variable
  this.increment = function () {
    return _count++
  }
  this.decrement = function () {
    return _count--
  }
  this.getCount = function () {
    return _count
  }
}

const counter = new Counter()
console.log(counter.getCount())
console.log(counter.increment());
console.log(counter.decrement())

