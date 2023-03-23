const btn =document.getElementsByClassName("btn");

const audio =new Audio("kumpas.mp3");
let a =0
addEventListener("click", ()=>{
  a++;
  console.log("hello");
  if(a == 1) audio.play();

})

console.log("heloo");





