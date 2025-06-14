// reduce() methods applies the reducer function to each element of an  array 
//accumulating the results into a single value.It is often used to perform calculations or aggregation on array elements and simplify  the array into a single value 
// reducer ()does not change the original array, it make copy of an array,
// reducer method doesnot run in empty array 

// it will take the accumulatorvalue, currentvalue,index, array 
// the parameters order should be same 

const numbers =[1,2,3];

console.log(numbers.reduce((acc,curr,index,arr)=>{
    console.log(`accumulator value is :${acc}`)
    console.log(`the current value is :${curr}`)
    return acc+curr;
    
},0))