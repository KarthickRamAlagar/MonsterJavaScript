// Factory Function is a type of function that is create and return objects.
// It is a design pattern that provides an alternative way to create objects compared to using constructors and that new keyword
// it is way to define model for the objects.

function createPerson (firstName,lastName,pl){
     return {
        firstName:firstName,
        lastName:lastName,
        pl:pl,
        details: function(){
        return `hello,I'm ${`${this.firstName} ${this.lastName}`} and I'm a ${this.pl} programmer`
        }
     }
}

const Ram = createPerson("Ram","Alagar","all language ");
console.log(Ram.details())