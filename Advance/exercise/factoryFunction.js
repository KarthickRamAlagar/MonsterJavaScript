// create the factory function that generates the differnt types of vehicle.
// Each vehicle object have prperties like type, brand , model and year 

function vehicleInfo (type,brand,model, year){
     return {
        type:type,
        brand:brand,
        model:model,
        year:year,
        details: function(){
        return `hello,I'm ${this.type} ${this.brand} and I'm a ${this.model} model from ${this.year} year`
        }
     }
}

const AudiX = vehicleInfo("AudiX","Audi","X-Series","2015");
console.log(AudiX.details())