//REFACTOR THE OLDER SYNTAX AND METHOD OF find() to ES6 

let peoples=[
    {name:"RamAlagar",age:"infinity"},
    {name:"Ram",age:"infinity"},
    {name:"Alagar",age:"infinity"}
]
let  person ;
for(let i =0;i<peoples.length;i++){
    if(peoples[i].name ==="RamAlagar"){
        person = peoples[i]
        break;
    }
}
console.log(person);

//es6
console.log(peoples.find((person)=>{return person.name==="RamAlagar"}));