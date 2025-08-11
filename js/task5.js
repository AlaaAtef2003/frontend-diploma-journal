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
var posts = [];

window.onload = function () {
    getPosts(); // load posts first
};

// GET posts
function getPosts() {
    var xml = new XMLHttpRequest();
    xml.open("GET", "https://jsonplaceholder.typicode.com/posts");
    xml.send();

    xml.addEventListener("readystatechange", function () {
        if (xml.readyState == 4 && xml.status == 200) {
            posts = JSON.parse(xml.responseText); // ✅ assign to posts
            display();
            addPost(); // ✅ only add new post after loading old ones
        }
    });
}

// POST new post
function addPost() {
    var newPost = {
        userId: 1,
        title: "My New Post",
        body: "This is the content of my new post."
    };

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 201) {
            let createdPost = JSON.parse(xhr.responseText);
            console.log("Post created:", createdPost);
            posts.push(createdPost); // ✅ now posts already has old data
            display();
        }
    };

    xhr.send(JSON.stringify(newPost));
}

// Display posts
function display() {
    var box = "";
    for (var i = 0; i < posts.length; i++) {
        box += `
            <div class="col-md-3">
                <p><strong>${posts[i].title}</strong></p>
                <p>${posts[i].body}</p>
            </div>
        `;
    }
    document.getElementById("row").innerHTML = box;
}
