const btns= document.querySelectorAll(".btn");
const body =document.body

btns.forEach((btn)=>{
 btn.addEventListener("click",(()=>{
    color =btn.value; // You did not declare color with let, const, or var.
//So, when you write color = btn.value;, JavaScript creates a global variable called color (which is not good practice).
    changeBackground(color)
 }))
})

const  changeBackground =((color)=>{
    body.classList="";
    switch(color){
        case "purple":
            body.classList.add("purple")
            break;
                 case "blue":
            body.classList.add("blue")
            break;
                 case "red":
            body.classList.add("red")
            break;
                 case "green":
            body.classList.add("green")
            break;    
             case "yellow":
            body.classList.add("yellow")
            break;
                 case "teal":
            body.classList.add("teal")
            break;
    }
})