// getting element from dom

let form = document.querySelector("form");
let input = document.querySelector("input");
let todos = document.querySelector(".todos");

function getTodo(value){
    //creating new elements
    let  todo =document.createElement("div")
    let  textEl = document.createElement("span")
    // setting the values and style 
    textEl.innerHTML=value
    //append our element to the  dom
     todo.appendChild(textEl)
     let closeEL = document.createElement('span')
     closeEL.innerHTML="&times;"
     closeEL.classList.add("delete")

     // attach events
     closeEL.addEventListener('click',((e)=>{
        todos.removeChild(todo)
     }))

     todo.appendChild(closeEL)
     todo.classList.add("todo")
     return todo;
}

form.addEventListener("submit",e=>{
    e.preventDefault();
    let value =input.value;
    if(!value.trim()) return;
   todos.appendChild(getTodo(value));
  input.value = "";
})