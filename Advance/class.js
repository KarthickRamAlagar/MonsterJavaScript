// classes are one of the features in es6
// a class is a blueprint for the object  , you create the object from the class
// class -> sketch of a house , it contains all the details about floors, doors, .Based on these description , you build the house
// since many houses can be made from the same description , we can create many objects from a class

// class declaration

class Parent {
  constructor (firstName, lastName, age) {
    // instance Member
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    // method defining
    this.info = function () {
      return `hi ${this.firstName} ${this.lastName} and i'm ${this.age} years old`
    }
  }

  // prototype members

  greet () {
    return `hi there ${this.firstName}${this.lastName}`
  }
}

// child class with _proto_ of parent class
class Children extends Parent {
  constructor (firstName, lastName, age, pl, experience) {
    super(firstName, lastName, age)
    this.pl = pl
    this.experience = experience
    this.information = function () {
      return `hi ${this.firstName} ${this.lastName} and i'm ${this.age} years old with ${this.experience} in ${this.pl}`
    }
  }
}

let child1 = new Children('Ram', 'Alagar', 'infinity', 'infinity', 'all')
console.log(child1.information())
