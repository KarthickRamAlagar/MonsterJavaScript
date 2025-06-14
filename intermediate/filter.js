//filter()-built in array method 
//Selects elements that match a condition and returns a new array with only those elements.

const areas =[
    { name:"Mdurai",special:"older"},
    {name:"chennai", special:"nothing"},
    {name:"bengaluru", special:"All"}
]
console.log(
  areas
    .filter(area => area.special === "older" || area.special === "All")
    .map(area => area.name)
); 