// The Object.create () is used to creates a new object, using an existing object as the prototype of the newly created objevt.
let person ={
    greet : function (){
        console.log(`hello my name is ${this.firstName} ${this.lastName}`)
    }
}

// 1st way
const RamAlagar = Object.create(person)
RamAlagar.firstName ="Ram";
RamAlagar.lastName ="Alagar";

//2nd way
const AlagarRam = Object.create(person,{
    firstName:{value:"ALAGAR"},
    lastName:{value:"RAM"}
})
AlagarRam.greet();
// it says that , We can use parent objects  methods and function by creating instances using the Object.create() in  instances of that parent object.

