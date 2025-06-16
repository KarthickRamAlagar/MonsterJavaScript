function Person (name, age, gender) {
  this.name ;
  this.age ;
  this.gende;r
  this.info = function () {
    return `hello,I'm ${this.name} and I'm a ${this.age} years old and i'm ${this.gender}`
  }
}

const RamAlagar = new Person('RAMALAGAR', Infinity, 'Male')
console.log(RamAlagar)
