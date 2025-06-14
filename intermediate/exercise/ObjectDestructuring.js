const person={
    name:"RamAlagar",
    age:Infinity,
    gender:"Male",
    country:"AnyWhere"
}
//use object destructuring to extract the name , age , counte=ry in the name of personName, personCountry,personAge and log it
const {name:personName, country:personCountry, age:personAge}=person;
console.log(personName,personAge,personCountry);

// object destructuring the order of we destructuring is not matters , only labels matter but in array destructuring the order is matters but the lable is not matters