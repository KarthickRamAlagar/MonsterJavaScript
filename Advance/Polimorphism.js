// polymorphism  allows object to treated as instances of their parent  class, even if they are instances of subclass 
// In JS ,Ploymorphism is typically acheived through method overriding, 
// whwere a subclass provides its own implementation of a method that is already defined in the parent class

// parent class
class Animal {
    constructor(name) {
        this.name=name;
    }
    makeSound (){
        return "Unknown Sound"
    }
}
//child class
class Dog extends Animal {
    constructor(name){
    super(name)
    }
    makeSound(){
        return 'woff!'
    }
}
// child class
class Cat extends Animal {
    constructor(name){
    super(name)
    }
    makeSound(){
        return 'meoow!'
    }
}


function animalInfo (animal){
    console.log(`name : ${animal.name} , sound:${animal.makeSound()}`)
}
// creating instances for the Animal Parent Class
const genericAnimal = new Animal ('generic Animal');
const dog = new Dog("Buddy")
animalInfo(dog);

// ------------------- Define
// In this example, we have a superclass Animal with a constructor that initializes the name property and a method makeSound() that returns "Unknown sound" by default.

// The subclasses Dog and Cat inherit from Animal and override the makeSound() method with their specific implementations.

// The animalInfo() function takes an Animal object (or any of its subclasses) as a parameter and calls both the name property and the makeSound() method on that object.

// Now, let's see how this demonstrates polymorphism:

// -> When we call animalInfo(genericAnimal), the function prints the name of the animal as "Generic Animal" and the sound as "Unknown sound". This is because genericAnimal is an instance of the Animal class, and the method makeSound() is called from the Animal superclass.

// -> When we call animalInfo(dog), the function prints the name of the animal as "Buddy" and the sound as "Woof!". This is because dog is an instance of the Dog class, and the method makeSound() is called from the Dog subclass, overriding the method from the Animal superclass.

// -> When we call animalInfo(cat), the function prints the name of the animal as "Whiskers" and the sound as "Meow!". This is because cat is an instance of the Cat class, and the method makeSound() is called from the Cat subclass, overriding the method from the Animal superclass.

// This behavior illustrates polymorphism, as the animalInfo() function can work with different types of animals (Animal, Dog, or Cat) in a generic way, without knowing the specific subclass. The appropriate method implementation is determined at runtime based on the actual object type passed to the function