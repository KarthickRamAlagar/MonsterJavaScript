// when we call the forEach helper , we pass the anonymous callback function ,
// this function will  gets called one time for every elemnt in the array
// it takes three parameters like 1.variable, 2.index, 3.original array(optional)
// it doenot create the new array for the resulted values 

const colors=["green", "yellow","purple"];

colors.forEach(function(color,index){
   console.log(`${index}:${color}`)
})

colors.forEach((color,index,arr)=>{
    arr[index]=color[0].toUpperCase()+color.substring(1)
});
console.log(colors)

colors.forEach((color,index,arr)=>{
    color=color[0].toUpperCase()+color.substring(1)
    console.log(color+"from local variable color")
});

//arr[index] = ... changes the array.
//color = ... only changes the local variable, not the array.