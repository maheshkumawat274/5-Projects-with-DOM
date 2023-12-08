var arr = [
 {
  dp:"https://media.istockphoto.com/id/480310630/photo/cheering-woman-under-russian-flag.webp?b=1&s=170667a&w=0&k=20&c=7wm8DGN9ShrV28jILg57YX9hnVYoTZLnob_dtmH-e00=",
  story:"https://media.istockphoto.com/id/480310630/photo/cheering-woman-under-russian-flag.webp?b=1&s=170667a&w=0&k=20&c=7wm8DGN9ShrV28jILg57YX9hnVYoTZLnob_dtmH-e00="
 },
 {
   dp:"https://images.unsplash.com/photo-1599084059392-bf31dbe769cb?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   story:"https://images.unsplash.com/photo-1599084059392-bf31dbe769cb?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
 },
 {
  dp:"https://images.unsplash.com/photo-1570047391017-399536bd65c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
  story:"https://images.unsplash.com/photo-1570047391017-399536bd65c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8"
},
{
 dp:"https://plus.unsplash.com/premium_photo-1668895511132-fecc0f98a189?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
 story:"https://plus.unsplash.com/premium_photo-1668895511132-fecc0f98a189?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8"
},
{
 dp:"https://images.unsplash.com/photo-1532171875345-9712d9d4f65a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
 story:"https://images.unsplash.com/photo-1532171875345-9712d9d4f65a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D"
},
{
 dp:"https://images.unsplash.com/photo-1580483046931-aaba29b81601?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
 story:"https://images.unsplash.com/photo-1580483046931-aaba29b81601?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"
},
]

var clutter = "";
arr.forEach(function(ele,idx){
 clutter += `<div id="story">
 <img id="${idx}" src= "${ele.dp}" >
 </div>`
})

document.querySelector("#stories").innerHTML=clutter;

document.querySelector("#stories").addEventListener("click",function(dets){
 document.querySelector("#fullScreen").style.display = "block";
 document.querySelector("#fullScreen").style.backgroundImage = `url("${arr[dets.target.id].story}")`
 document.querySelector("#fullScreen").style.backgroundSize = "100% 100%";

 setTimeout(function(){
  document.querySelector("#fullScreen").style.display = "none";
 },5000)
})

