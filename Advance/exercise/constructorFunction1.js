function Car (make,model,year,color) {
   this.make = make;
   this.model = model;
   this.year = year;
   this.color = color;
   this.start= function (){
    return `"Starting the ${`${make} ${model}`} ..." Where "${make}" is the make and "${this.model}" is the model of the car `
   }

   this.stop = function () {
    return `"Stoping the ${`${make} ${model}`} ..." Where "${make}" is the make and "${this.model}"is the model of the car `
   }
}

const Audi = new Car("Audi","AudiX",2015,"White")
console.log(Audi);
console.log(Audi.start());
console.log(Audi.stop());