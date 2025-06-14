// arrow fn also known as fat arrow function 

//traditional method
function greet(username){
    return `hello ${username}`
}
console.log(greet(name='RamAlagar'));

// ArrowFn 
const greetArrow =(username)=>{ return `hello ${username}`};
console.log(greetArrow((name = "RamAlagarKarthick")));

const doubleNumber= (num)=>{
    if(num>0 || num ==true){
        return num*2;
    }
    else if(num<0 || num == false){
        return "Invalid Number";
    }
}
console.log(doubleNumber(5));
console.log(doubleNumber(true)); // true == 1  in js , false == 0
