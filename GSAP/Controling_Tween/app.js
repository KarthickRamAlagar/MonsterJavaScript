let play =document.querySelector(".play")
let pause =document.querySelector(".pause")
let restart =document.querySelector(".restart")

let tween=gsap.to(".box1",{
    y:-200,
    duration:5,
    backgroundColor:'teal'
})

play.addEventListener('click',function(){
  return tween.play()
})

pause.addEventListener('click',function(){
  return tween.pause()
})

restart.addEventListener('click',function(){
  return tween.restart ()
})

// play(), pause(),restar() -> built in methods