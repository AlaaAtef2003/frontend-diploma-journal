function getpizza(callback) {
    var xml = new XMLHttpRequest();
    xml.open("GET", `https://forkify-api.herokuapp.com/api/search?q=pizza`, true);
    xml.send();
    xml.addEventListener("readystatechange", function () {
        if (xml.readyState == 4 && xml.status == 200) {
            dish = JSON.parse(xml.responseText);
            console.log("pizza"+dish);
            callback();
            
            
        }
    });
}
function getpasta(callback) {
    var xml = new XMLHttpRequest();
    xml.open("GET", `https://forkify-api.herokuapp.com/api/search?q=pasta`, true);
    xml.send();
    xml.addEventListener("readystatechange", function () {
        if (xml.readyState == 4 && xml.status == 200) {
            dish = JSON.parse(xml.responseText);
            console.log("pasts"+dish);
            callback();
            
            
        }
    });
}

function getcarrot() {
    var xml = new XMLHttpRequest();
    xml.open("GET", `https://forkify-api.herokuapp.com/api/search?q=carrot`, true);
    xml.send();
    xml.addEventListener("readystatechange", function () {
        if (xml.readyState == 4 && xml.status == 200) {
            dish = JSON.parse(xml.responseText);
            console.log("carrot"+dish);
            
            
            
        }
    });
}

// asynchronous  ajax event settimeout setin
/*
console.log(1);  //synchrounous line by line
getPosts();      //asynchrounous work in background and then call the function
console.log(2);  //synchrounous
console.log(3);  //synchrounous
*/
//javascript is not blocking
//if you need getpost done then another function to call it
//you can use callback function or promise or async await
// 1-callback function
// 2-promise
/*
function one(callback){
    console.log("one");
    callback();
    
}
function two(){
    console.log("two");
    
}
one(function(){two()})
one(two); //callback function
 
getpizza(getpasta);  //pizza then pasta
*/
getpizza(function(){
    getpasta(function(){
        getcarrot()
    }); //pasta then carrot
}); //pasta then carrot
/*
getpizza()
getpasta()
getcarrot() //without callback the code will not wait for the previous function to finish
//it will run all the functions at the same time*/