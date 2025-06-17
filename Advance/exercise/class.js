// create the hero class with name, level as property ,
// create a mthod greet and  greet it 
//create a instances of hero class
// create new class name mega , inherit properties freom the hero class and provide property of spell 
// create the instance of mega class

class Hero{
    constructor (name, level){
        this.name=name;
        this.level = level ;
         this.greet = function(){
            return `hello i'm ${this.name} `
         };
    }
}

class Mega extends Hero{
    constructor(name, level,spell){
        super(name,level)
        this.spell=spell;
    }
}

const M= new Mega("RamAlagar",5,"10");
console.log(M);