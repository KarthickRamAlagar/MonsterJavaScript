const obj={
    name:"Ram",
    color:"Cement"
}
const personInfo =(obj)=>{
    return (obj)
}
console.log(personInfo(obj)) // passing the whole object as aruguments in function call

const info=({name, color})=>{
    console.log(name);
    console.log(color)
}
info(obj)


//you can perform destructuring with objects in function parameters, not just with arrays.

let carInfo ={
    name:"audi",
    spec:["w","h"]
}

function carInfo({name, spec:[w,h]}){
    console.log(name),
    console.log(w);
    console.log(h)
}
carInfo(carInfo)