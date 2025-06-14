// in object destructuring order doesn't matter but the name does matter 
const obj={
    name:"Apple",
    color:"Red"
}
const {name, color}= obj;
console.log(name,color);

// for acessigning any variables  for the object destructuring variables the use 
// const {name:anyName,color:AnyColor}=obj 
// because we already defined the label in object DataStructure 

//object destructuring with rest operators
let {a,b:best,...rest}= {a:1,b:2,c:3,d:4};
console.log(a,best,rest);