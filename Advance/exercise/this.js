// create a person object and store your name and age 
// create the regular function to greet 
// create the arrow function to get name and age 

const person ={
    name:"RAMALAGAR",
    age:Infinity,
    greetRegular  : function (){
        return `Hi , I'm ${this.name} and i'm ${this.age} old `
    },
    greetArrow : ()=>{
        return `Hi , I'm ${this.name} and i'm ${this.age} old `
    }
}

console.log("THis is regular function o/p", person.greetRegular());
console.log("THis is arrow function o/p", person.greetArrow())