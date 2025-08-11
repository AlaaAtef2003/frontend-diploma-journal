var sitename = document.getElementById("siteName");
var url = document.getElementById("siteUrl");
function addhttp(){
    var url = document.getElementById("siteUrl").value;
    if (url.startsWith("http://")==false || url.startsWith("https://")==false) {
    return "http://" + url;
}else 
    return url;
 }

 

var arr =[];
if (localStorage.getItem("bookmarks")){
    arr = JSON.parse(localStorage.getItem("bookmarks"));
    display();
}
   
else
    arr = [];
function bookmark(){
    validateInputs()
    validateurl()
    if (! validateurl() ) return ;
    if (! validateInputs() ) return ;
    var obj ={
        name :sitename.value,
        url :addhttp()
    }
    arr.push(obj);
    localStorage.setItem("bookmarks",JSON.stringify(arr));
    console.log(arr);
    display();
    clearInputs();
    
}
function display(){
    var box = "";
    for (var i = 0; i < arr.length; i++) {
    box+=` <div class="col-md-6 d-flex justify-content-between">
            <p>${arr[i].name}</p>
            <div>
                <a href="${arr[i].url}" class="btn btn-info ">vist</a>
                <button class="btn btn-danger" onclick="deleteBookmark(${i})">delete</button>
            </div>
            
        </div>`
}
document.getElementById("Bookmarklist").innerHTML = box;
}
function clearInputs(){
    sitename.value = "";
    url.value = "";
}
function deleteBookmark(index){
    arr.splice(index, 1);
    localStorage.setItem("bookmarks", JSON.stringify(arr));
    display();
}
function validateInputs() {

    if(sitename.value.trim() === "" ) {
        sitename.nextElementSibling.innerHTML = "Please enter a valid site name.";
        return false;
    }
    else {
        var rejex =/^[A-Z][a-z0-9]+$/;
        if (rejex.test(sitename.value)) {
        sitename.nextElementSibling.innerHTML = "";
        return true;
    }else{
        sitename.nextElementSibling.innerHTML = "Site name must start with a capital letter and contain only letters and numbers.";
        return false; ``
    }
}
}
function validateurl() {

    if(url.value === "" ) {
        url.nextElementSibling.innerHTML = "Please enter url";
        return false;
    }
    else {
        var rejex =/^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/\S*)?/;
        if (rejex.test(url.value)) {
        url.nextElementSibling.innerHTML = "";
        return true;
    }else{
        url.nextElementSibling.innerHTML = "invaild url.";
        return false; ``
    }
}
}