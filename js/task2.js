/*====================
  String Methods
====================*/
var fname = "ali";
var fname1 = fname.charAt(0); // get first character
console.log(fname1);
console.log(fname.charCodeAt(0)); // get ASCII code of first character
console.log(fname.toUpperCase()); // convert to uppercase
console.log(fname.indexOf('i')); // get index of character 'i'

/*====================
  Select Elements
====================*/
var h = document.getElementById("h");
var hs = document.getElementsByTagName("h2");
var harr = Array.from(hs);

for (var i = 0; i < harr.length; i++) {
    harr[i].onclick = function () {
        alert("Hello");
    };
}

/*
// Other ways to select elements:
var hh = document.getElementsByClassName("mark");
var input = document.getElementsByName("product1");
var selectes = document.querySelectorAll(".proName");
var item = document.querySelector(".proName");
*/

/*====================
  Mouse & Focus Events
====================*/
/*
  - dblclick, mouseenter, mouseleave
  - focus, focusin, blur, change
*/

/*====================
  Keyboard Events
====================*/
var input = document.querySelector("input");

input.addEventListener("keyup", function (e) {
    console.log(e.target.value);
});

/*====================
  Attributes
====================*/
window.onload = function () {
var demo = document.querySelector("input");

var img = document.getElementById("#productImage");

console.log(demo.className);
console.log(img.getAttribute("src"));
console.log(img.getAttribute("id"));
};

// Set or change attributes (optional)
// img.src = "img/portfolio-2.jpg";
// img.setAttribute("src", "img/portfolio-3.jpg");

/*====================
  Change Image on Click
====================*/
window.onload = function () {
  var img = document.getElementById("productImage");
  img.onclick = function () {
    if (img.src.includes("portfolio-1.jpg")){
        img.src = "img/portfolio-3.jpg";
    }
    
    else{
        img.src = "img/portfolio-1.jpg";
    }
    
    img.style.width = "203px";
img.style.borderRadius = "30px";
  };

/*====================
  Styling with JS
====================*/
var demo = document.querySelector("input");
 img.style.width = "203px";
img.style.borderRadius = "30px";

/*demo.style.cssText=`color :green !important;
background-color :red; `
*/
//document.body.style.backgroundColor = "red";
};
// item.classlist.remove("green") will delete for element
// item.classlist.add("green") will add for element
// item.classlist.toggle("green") will toggle 
//item.classlist.contain("text-danger")   true if found this class
//item.classlist.replace("text-danger","text-info") 