// Make a clone of arr,arr2 by using spread operators 
//make a clone of user object using spread operators
const arr =[1,2,3];
const arr2 =[4,5,6];
console.log([...arr, ...arr2]);

const user ={
    name:"RamAlagar",
    age:Infinity
}

const UserClone={...user, location:"anywhere"};
console.log(UserClone);