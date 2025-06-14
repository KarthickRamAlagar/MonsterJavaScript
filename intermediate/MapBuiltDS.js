//Map is a built in ds introduces in es6 that allows you to create key-value pairs both the keys and values can be any data types
// in object keys must be strings, symbols
//Map allows numbers, boolan, objects even other Map instances.
//it have set and get methods 

const map = new Map();
const keyOne = "string";
const keyTwo = {};
const keyThree = function() {};

// Set key-value pairs
map.set(keyOne, "This is a string key");
map.set(keyTwo, "This is an object key");
map.set(keyThree, "This is a function key");

console.log(map);

//map methods
console.log(map.keys());
console.log(map.values());
console.log(map.delete(keyTwo));
console.log(map.size);

// iteration in map

for (let[key,value]of map){
  console.log(`${key} -- ${value}`)
}
// iterate over the keys
for (let [key] in map.keys() )
{
  console.log(key)
}

//iterate over values
for (let [values] in map.values())
{
    console.log(values)
}

//get method

console.log(map.get(keyOne));