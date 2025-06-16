// constructor function in js are regular function used  with new Keyword to create and initialize objects with shared properties and methods .
// they act as a blueprints for creating multiple instance of objects with the same structure and behaviour 
// for creaating constructor function the function name should be in pascalCase(Snake case)

function CretePeople (firstName,lastName,pl){
    this.firstName =firstName;
    this.lastName= lastName;
    this.pl =pl;
    // creating the method
    this.info =function(){
        return `hello,I'm ${`${this.firstName} ${this.lastName}`} and I'm a ${this.pl} programmer`
    }
}

//NEW KEYWORD:
//1. CREATE EMPTY OBJECT{}
//2. SETS "this" TO POINT THAT OBJECT
//3 WE CAN OMIT THE RETURN STATEMENT USING "new"keyword

const Ram = new CretePeople("Ram","Alagar","All Language")
console.log(Ram);
console.log(Ram.info());