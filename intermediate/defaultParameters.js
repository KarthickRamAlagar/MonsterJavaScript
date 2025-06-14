// default function parameters , introduced in es6 ,
// allows to assign default values to function parameters ,
// when the function is called and

const defaultParameters =(count=false)=>{
    if(count == true){
        let sum =0;
        let message =[];
        for(let i=0; i<10; i++){
            sum += i;
            message.push(`The sum is ${sum}`);
        }
        return {
            sum, message 
        }
    }
}
console.log(defaultParameters(1));