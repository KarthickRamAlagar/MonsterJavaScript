//Set is a another built in DS in es6 that  represents a collection of unique values 
//which means duplicate elements are automatically removed 
const number=[1,1,2,2,3,4,5,5,5,5,5,5,5,5];
const myUniqueNumbers = new Set(number);
console.log(myUniqueNumbers);

const Fruits= new Set()
// adding elemnts by manually
Fruits.add('APPLE');
Fruits.add("APPLE");
Fruits.add("Banana");
Fruits.add("orange");
console.log(Fruits);
console.log(Fruits.has("Apple"))

// Methods in Set is same as Map built in DS 

// for(let [item] of Fruits){
//     console.log(item)
// }  can't iterate by this in Set() [item]


const str ='helloo';
let setstr =new Set(str)
for (let value of setstr) {
    console.log(value);
}

