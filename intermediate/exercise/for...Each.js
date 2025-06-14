// create the array of numbers
//create a variables to hold the sum
//create the adder function which takes the parameter of number & add that with sum variable.
//loop over the array  incrementhing, the sum variables except this time a function gets referenced in the forEach
//print the sum variables 

const nums=[1,2,3,4,5]
let sum =0;
nums.forEach((num,index,arr)=>{
  sum +=num;
})
console.log