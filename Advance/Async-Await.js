// example of Async/Await function

// the Asyn function will always return a promise 
// there are two way to return from the Async function
// 1 .Promise ,
// 2. Normal value  then this time js will always wrap these  normal value into promise Object return to this  Async function 

// async function getData (){
//     return 'hey hi;
// }

// const DataPromise  = getData();
// DataPromise.then((res)=>{ // taking the data out from the Promise Object 
//     console.log(res);
// })

// returning the promise and returning in the Async Function
const p= new Promise((resolve,reject)=>
{
    resolve ("Hi from Karthick ram alagar")
})
async function getData (){
    return p;
}

// getting the value from the promise
const P1 =   getData(p);
P1.then((res)=>{
    console.log(res)
})


