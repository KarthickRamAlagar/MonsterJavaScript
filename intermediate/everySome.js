//every: Returns a boolean (true or false), not an array. like logical AND
//some: Returns a boolean (true or false), not an array.like logical OR 

const peoples=['ramalagar','karthi','sam'];
console.log(peoples.every((people)=>{return people.charAt(1)==='a'}))

console.log(peoples.some((person)=>{return person.charAt(2)==='m'}))