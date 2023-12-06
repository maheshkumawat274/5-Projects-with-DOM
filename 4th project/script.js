var elem = document.querySelectorAll(".ele");
elem.forEach(function(val){
// console.log(val.childNodes)
 val.addEventListener("mousemove",function(dets){
  val.childNodes[3].style.opacity="1";
  val.childNodes[3].style.left = dets.x + "px";
  //val.childNodes[3].style.top = dets.y + "px";
 })
 val.addEventListener("mouseleave",function(){
  val.childNodes[3].style.opacity="0"
 })
})