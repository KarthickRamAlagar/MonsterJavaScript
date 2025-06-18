// Synchronous JS refers to traditional way  of executing the js code , 
// where each code operation is performed in a sequential and blocking manner. 
// in other , each code will execute 1 line after 1 line 
// it can potentially get slow down the eniter application , making it less responsive 

const add = ((a,b)=>{
return a+b;
})

const product = ((a,b)=>{
return a*b;
})

const result1 = add(1,4);
const result2 = product(1,5)

console.log(result2)