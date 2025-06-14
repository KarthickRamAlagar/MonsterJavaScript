//creating the object name car
// add type , model , color as properties
//check the type of object
//update the type property to toyota
//add new property wheels
//log the cars to the console.

let Car=new Object({
    type: "sedan",
    model: "Camry",
    color: "blue",
})
console.log(typeof Car);
Car.type="Toyota";

let addPropertyObj=Object.assign(Car,{Wheel:4});
console.log(addPropertyObj);
