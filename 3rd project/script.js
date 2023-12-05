var main = document.querySelector("#main");
var crsr = document.querySelector("#cursor");
var demo = document.querySelector("#demo");

main.addEventListener("mousemove",function(dets){
 crsr.style.left = dets.x + "px" 
 crsr.style.top = dets.y + "px" 
 demo.style.left = dets.x + "px"
 demo.style.top = dets.y + "px"
})