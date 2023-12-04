var cont = document.querySelector("#container");
var love = document.querySelector("i");
cont.addEventListener("dblclick",function(){
 love.style.transform="scale(1)";
 love.style.opacity=".8"
 setTimeout(function(){
  love.style.opacity="0"
 },1000)
 setTimeout(function(){
  love.style.transform="scale(0)"
 },2000)
})

