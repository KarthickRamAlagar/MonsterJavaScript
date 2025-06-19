// Async and await combo are used handle the promises

// before Async Function

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Pomise is resolved')
  }, 10000)
})

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Pomise1 is resolved')
  }, 5000)
})


// function getData(){
//     p.then(res=>{console.log(res)})
//     // the below will console it first , because js engine is not wait for anything
//     console.log("hi")
// }

// After Async Await
async function GetData () {
  console.log("Hello") // these line will console it quickly not wait for promise to resolve
  const result = await p // instead of .then method before the async /await  -> we use this await key word in before of Promise object await will take care of .then()
  console.log("Hi Every One")
  console.log(result)
 // but these time js engine will  not wait for promise to resolve it will the execution of the  function execution is suspended and come after 5 seconds  wait in the 20 th line and console the below code 
 const result1 = await p1
  console.log(result1)
  // the output will console iit after 10 seconds 
  // after the all the promises gets resolved according to first promise time taken to resolve then  it  console it 


  // but  when we reverse the order , let 1st promise will have 5secs , 2nd promise  will have 10 secs - > the  5secs promise will console it first  then 2nd one is console it
}
// await is the keyword that can be used inside the async function
