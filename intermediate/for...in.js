// for...in loop is the way to iterate the  object through its property as a key as well array by its index 
// syntax  for(let key in object){...}

const person = {
  name: 'RamAlagr',
  age: 'infinty',
  gender: 'Male'
}

for(let i in person){
    console.log(i);
}

for(let j in person){
    console.log(`the key is ${j} : ${person[j]}`)
}


// for...in method in array datastructure

let arr=[1,2,3,4,5];
for(let index in arr){
    console.log(`${index}: ${arr[index]}`);
}

// another methods 
//Object.values(), Object.entries(),Object.keys()
for (const [key, value] of Object.entries(person)) {
    console.log(`the key is ${key} : ${value}`);
}
for (const value of Object.values(person)) {
    console.log(value);
}
for (const key of Object.keys(person)) {
    console.log(key);
}