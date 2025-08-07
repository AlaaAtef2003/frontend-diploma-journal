//js
// opertators
// 1. Arithmetic Operators
/*
let a = 10; 
let b = 5;
let sum = a + b; // Addition
console.log(typeof sum); // "number"
console.log( Number("10") + 5); // Implicit conversion from string to number
console.log(typeof NaN); 
var result = prompt("Enter a number: "); // Prompting user for input
var result2 = prompt("Enter a number: "); // Prompting user for input


console.log(Number( result)+Number( result2)); // "string" since prompt returns a string
*/
// 2. comparison Operators
// > < == ===
 // 3. Logical Operators    
// && || !
/*
var mark = prompt("Enter your degree: "); // Prompting user for input

if (mark >= 50) {
    console.log("You are passed");
}   else {      
    console.log("You are failed");
}
    */
   // 4. Assignment Operators =
   // == check equality(value), === checks value and type     
 /*  var name = prompt("Enter your name: "); // Prompting user for input
if (name =="John") {  
    console.log("Hello John");
}
else
{
    console.log("Hello stranger");
} 
var x ="1";
if( x ===1 ){
    console.log("x is equal to 1");
}
var box = "";
for (let i = 0; i < 5; i++) {
  box += "<h1>welcome</h1>"; // Concatenating string
}
document.getElementById("demo").innerHTML = box;


//functions 
//////statement function
function getsum(a, b) {
    document.getElementById("demo").innerHTML = `The sum of ${a} and ${b} is: ${a+b}`; // Displaying the result in HTML
    
    console.log(a+b); // Function to return the sum of two numbers
}
getsum(10, 20); // Calling the function with arguments
 // Output the result of the function call
 */

//hoisting
//console.log(x); // Output: donot found\
/* 
console.log(x);// Output: undefined
var x=5; // Variable declaration and initialization
 */

////////exprqssion function تقدر تعمل call before write this function due to hosting 
/*var getSum = function(a, b) {
    return a + b; // Function expression to return the sum of two numbers
};
var result = getSum(10, 20); // Calling the function expression with arguments*/
///////anoymous functionيعنى مالهاش اسم 
//self invoke بت call نفسها 
/*
(function(){
    console.log("hello");
})();
*/

//object 
/*
var person = {
    name: "John",   
    age: 30,
    gender:"male", // Property to store the person's
    greet: function() { // Method to greet the person
        console.log("Hello, my name is " + this.name);
    }   }

    console.log(person.name); // Accessing the name property of the person object
     person['age'] = 35; // Updating the age property of the person object
     console.log(person.age); // Accessing the updated age property
    //array same type
     var names =["alaa","esraa", "aya"];
     console.log(names[1]);
     //list different type
     var cars =["kia","volvo",false ,50]
          
     
    var names =["alaa","esraa", "aya"];
    var numbers = [11, 2, 13, 40, 5]; // Array of numbers
    numbers.sort(function(a, b) { return a - b;});
    console.log(numbers); // Output: [2, 5, 11, 13, 40]
    console.log(names.sort()); // Accessing the second element of the names array
    names.push("sara"); // Adding a new name to the end of the names array
    names.unshift("mona"); // Adding a new name to the beginning of the names array
    console.log(names); // Output: ["mona", "alaa", "esraa", "aya", "sara"]
    var name=names.pop(); // Removing the last name from the names array
    console.log(name); // Output: "sara"
    
    console.log(names.slice(1,2)); // Output: ["mona", "esraa", "aya"]
    names.splice(1, 2, "newName"); // Replacing two names starting from index 1 with "newName"
    console.log(names.toString()); // Output: "mona,newName,aya"
    console.log(names.join("/")); // Output: "mona/newName/aya"
    console.log(names.indexOf("esraa")); // Output: -1 (not found) FOR SEARCHING
    names.reverse(); // Reversing the order of names in the array
    console.log(names); // Output: ["aya", "newName", "mona"]
    names.concat(["sara", "john"]); // Concatenating two arrays
    console.log(names); // Output: ["aya", "newName", "mona", "sara", "john"]
    */
    var productName = document.getElementById("productName"); 
    var productPrice = document.getElementById("productPrice"); 
    var productCategory = document.getElementById("productCategory"); 
    var productDescription = document.getElementById("productDescription");
    var productTableBody = document.getElementById("productTableBody"); // Get the table body element to display products
    var addBtn = document.getElementById("addProduct"); // Get the button to add products
    var productlist;
    var global;
    var indexglobal;
    if (localStorage.getItem("data")==null){
        productlist=[];
    }
    else{
        productlist = JSON.parse(localStorage.getItem("data"));
        display(productlist)
    }

    addBtn.onclick = function(event) {
    if (addBtn.innerHTML === "Update Product") {
         event.preventDefault(); 
        edit();     
        }   
        else {
       addproduct();
        }} 
    function addproduct (){

        
        var product = {
            name: productName.value,
            price: (productPrice.value),
            Category: (productCategory.value),
            description: productDescription.value
        };
         
        productlist.push(product);
        localStorage.setItem("data", JSON.stringify(productlist));
        display(productlist);
         clearInputs();
    }
    function display( productlist){
        var box ="" ;
        for(var i=0; i<productlist.length; i++){
            box +=` <tr> <td>${i + 1}</td>
                <td class ="proName">${productlist[i].name}</td>
                <td>$${productlist[i].price}</td>  
                <td ">${productlist[i].category}</td>
                <td>${productlist[i].description}</td>   
                <td><button onclick="delfun(${i})" class="btn btn-danger">Delete</button></td>
                <td><button onclick="delupdata(${i})" class="btn btn-primary">Update</button></td>
                </tr>`

        }
        
        productTableBody.innerHTML =box ;
        var selectes = document.querySelectorAll(".proName");
        global = selectes;
        
    }
    function delfun(index){
        productlist.splice(index,1); 
        localStorage.setItem("data", JSON.stringify(productlist));
        display(productlist);
    }
    function clearInputs() {
        productName.value = "";
        productPrice.value = "";
        productCategory.value = "";
        productDescription.value = "";
    }
    function delupdata(index) {
        indexglobal = index; 
        productName.value = productlist[index].name;
        productPrice.value = productlist[index].price;
        productCategory.value = productlist[index].category;
        productDescription.value = productlist[index].description;
        document.getElementById("addProduct").innerHTML = "Update Product"; 
     }
    function edit (){
        productlist[indexglobal].name = productName.value;
        productlist[indexglobal].price = productPrice.value;
        productlist[indexglobal].category = productCategory.value;  
        productlist[indexglobal].description = productDescription.value;
        localStorage.setItem("data", JSON.stringify(productlist));
        document.getElementById("addProduct").innerHTML = "add Product"; 
        display(productlist);
       
    }
    var term;
    function search (e) {
        var newarray = [];
       term = e.value.toLowerCase(); 
       for (var i = 0; i < productlist.length; i++) {
           if (productlist[i].name.toLowerCase().includes(term) 
   ) {
            newarray.push(productlist[i]);
    
           }}
           display(newarray); 
           
        for (var i = 0; i < global.length; i++) {
            if (term.length){
            global[i].innerHTML= global[i].textContent.replace(term, `<mark>${term}</mark>`);

        }


           // isplay the filtered products
       //include bool true if found
       //search  index or -1
       //indexOf
       //match return array of matches or null if not found

        }}
     /*   document.querySelector("a").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default action of the link
    // Display an alert when the link is clicked
        })*/
     
    //regular expression
    // رمز او نمط pattern
    /[a-z]{3,5}/; // Matches any string with 3 to 5 lowercase letters
    var x = "regular";
    console.log(x.replace("r","k")); //kegular
    console.log(x.replace(/r/,"k")); //kegular
    console.log(x.replace(/r/g,"k")); //kegulak
    function nameRegex(){
        var regex =/^[A-Z]{1}[a-z]$/;
        if (regex.test(productName.value)){
            return true;
        }else{
            alert("invaild name");
            return false;
        }
    }