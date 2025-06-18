// Asynchronous JS allows certain operation to be executed indepenent from the main program flow, 
// so they don't block the execution of other tasks,
// this is typically acheived using the techniques like callBacks, promises, async/await 

// synchronous code 

function fun (){
    console.log('inside the function')
}
console.log('start')
fun();
console.log('end')


//asynchronous code 

console.log('start');
setTimeout(()=>{
    console.log('inside timeout')
},2000)
console.log('end')