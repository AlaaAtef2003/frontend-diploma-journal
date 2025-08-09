
var immg = document.querySelector("img");
document.addEventListener("click",function(e){

immg.style.left = e.clientX  +"px"
immg.style.top =e.clientY +"px"


});