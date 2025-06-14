// The map()  is used to creates a new array populated with the results of calling a provided function on every element in the calling array
// Transforms each element in an array and returns a new array of the same length.
const arr=[1,2,3,4,5]
arr.map((num,index,arr)=>{
  console.log(num*2);
})

console.log("the original arr",arr);

const people=[
  {name:"Ram",area:"Anywhere"},
  {name:"Alagar",area:"Anywhere"},
  {name:"Karthick",area:"abc"}
]

people.map((person,index,arr)=>{
    console.table(`my name is ${person.name} and i'm from ${person.area}`)
});

people.map((person,index,arr)=>{
    console.table[`my name is ${person.name} and i'm from ${person.area}`]
});