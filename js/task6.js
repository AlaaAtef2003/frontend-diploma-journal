//AJAX
//technique to create dynamic web pages
//==>   asynchronous JavaScript and XML
//send a request to the server\
//SERVER response data is in JSON format
//updata data on web page
//xmlHttpRequest object
//fetch API

//method
 /* get ==> read data from the server
    post ==> send data to the server
    put ==> update data on the server
    delete ==> delete data on the server*/
//readystatechange event
/* 0 no request has been sent
   1 establishing connection with the server
   2 request has been received by the server
   3 processing the request
   4 server response*/
   //server must reply for the request to be successful or else it will fail
   /*
   200 = “success” (data retrieved without error).

Other examples: 

404 → Not Found

500 → Server Error

403 → Forbidden
*/
(function () {
var meals =( document.querySelectorAll(".nav-link"))
 console.log(meals);
 for (var i = 0; i < meals.length; i++) {
    meals[i].addEventListener("click",function(e){
            var test=(e.target.innerHTML);
            getPosts(test);
    })
 }
    })();
var dish = [];
getPosts("pizza"); // Default meal to display

// GET posts
function getPosts(meal) {
    var xml = new XMLHttpRequest();
    xml.open("GET", `https://forkify-api.herokuapp.com/api/search?q=${meal}`, true);
    xml.send();

    xml.addEventListener("readystatechange", function () {
        if (xml.readyState == 4 && xml.status == 200) {
            dish = JSON.parse(xml.responseText); 
            dish = dish.recipes; 
            display();
            
        }
    });
}

// Display posts
function display() {
    var box = "";
    for (var i = 0; i < dish.length; i++) {
        box += `
            <div class="col-md-3">
                <img src="${dish[i].image_url}" class="img-fluid" alt="${dish[i].title}">
                <h3>${dish[i].title}</h3>
                <p>${dish[i].publisher}</p>
                
            </div>
        `;
    }
    document.getElementById("row").innerHTML = box;
}
