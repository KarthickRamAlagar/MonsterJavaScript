// // Promise.all
// //Waits for **all promises** to resolve.  
// // If **any one fails**, the whole thing fails.

// // this is succees case 
// const p1=new Promise((resolve,reject)=>{
//     setTimeout(()=> resolve("p1 sucess"),3000)
// })
// const p2=new Promise((resolve,reject)=>{
//     setTimeout(()=> resolve("p2 sucess"),1000)
// })
// const p3=new Promise((resolve,reject)=>{
//     setTimeout(()=> resolve("p3  sucess"),2000)
// })

// // in the above the case all the promisess are resolve then it gives the o/p after 3seconds 

// // accessing that 3 promises
// // basically Promise.all() will  takes array of values and return the in the array of data
// Promise.all([p1,p2,p3])
// .then ((message)=>{console.log(message)})
// .catch((error)=>{console.error(error)})


// in case of failure

const p11=new Promise((resolve,reject)=>{
    setTimeout(()=> resolve("p11 sucess"),3000)
})
const p21=new Promise((resolve,reject)=>{
    setTimeout(()=> reject("p21 Fails"),1000)
})
const p31=new Promise((resolve,reject)=>{
    setTimeout(()=> resolve("p31 sucess"),2000)
})

// if any one promise is fail then it through error neither other promises states to be considered 
Promise.all([p11,p21,p31])
.then ((message)=>{console.log(message)})
.catch((error)=>{console.log(error)})

// 🟡 Promise.allSettled()

// > Waits for **all promises** to  settled (resolve or reject).  
// > Returns status for each — no early exit.
// this is succees  and failure cases combinedcase 
// it will return in object 
const p111=new Promise((resolve,reject)=>{
    setTimeout(()=> resolve("p1 sucess"),3000)
})
const p112=new Promise((resolve,reject)=>{
    setTimeout(()=> reject("p2 Fails"),1000)
})
const p113=new Promise((resolve,reject)=>{
    setTimeout(()=> resolve("p3  sucess"),2000)
})

Promise.all([p111,p112,p113])
.then ((message)=>{console.log(message)})
.catch((error)=>{console.error(error)})

// tip : Promise.all()is safest way 

//  > Returns the **first promise** that settles (either resolves or rejects).
// P2 rejects first → Error from P2 is thrown
const p1111=new Promise((resolve,reject)=>{
    setTimeout(()=> resolve("p1 sucess"),3000)
})
const p211=new Promise((resolve,reject)=>{
    setTimeout(()=> reject("p2 Fails"),1000)
})
const p311=new Promise((resolve,reject)=>{
    setTimeout(()=> resolve("p3  sucess"),2000)
})

Promise.race([p1111,p211,p311])
.then ((message)=>{console.log(message)})
.catch((error)=>{console.error(error)})

//Returns the **first resolved** promise. Ignores rejections.
// All fail → throws AggregateError:
// AggregateError: All promises were rejected
const p11111=new Promise((resolve,reject)=>{
    setTimeout(()=> resolve("p1 sucess"),3000)
})
const p2111=new Promise((resolve,reject)=>{
    setTimeout(()=> reject("p2 Fails"),1000)
})
const p3111=new Promise((resolve,reject)=>{
    setTimeout(()=> resolve("p3  sucess"),2000)
})

Promise.any([p11111,p2111,p3111])
.then ((message)=>{console.log(message)})
.catch((error)=>{console.error(error)})