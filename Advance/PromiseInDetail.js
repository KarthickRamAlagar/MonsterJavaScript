// //   syntax
// new Promise ((resolve,reject)=>{
//     //Asynchronous operation
//     resolve(value)
//     reject(Error)
// })

function checkNumber (number){
    return new Promise ((resolve,reject)=>{
        if(number %2 == 0){
            resolve(`${number}is an even number`)
        }
        else {
            reject (`${number}is an odd number`)
        }
    })
}

const numberToCheck = 6;
checkNumber(numberToCheck)
.then((message)=>{
    console.log(`Sucess:${message}`)   
})
.catch((error)=>{
    console.log(`${error}`)
});