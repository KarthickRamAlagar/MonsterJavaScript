// nested destructuring 
const area =[
    {name:"madurai"},
    {name:"Chennai"},
    {name:"bengaluru"}
]

const [{name:city}, , ]= area
console.log(city);