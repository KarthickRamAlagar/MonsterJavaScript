// find() is an built in methods in array and it will return the first element whose satified the condition 
//  it does not return or create new array , it just return the 1st matching  element undefined if not found.

const peoples =[
    {name:"RamAlagar", location:"anywhere"},
    {name:"RamAlagar", location:"myheart"},
    {name:"KrishnaShiva", location:"anywhere"},
]
console.log(
    peoples
        .find(person => person.location === "anywhere")
);

//tip: there is a no way to combine the find() and map() at a time 