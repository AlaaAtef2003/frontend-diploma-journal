// =======================
//  JavaScript Operators
// =======================

// 1. Arithmetic Operators (+, -, *, /, %, **)
/*
let a = 10; 
let b = 5;
let sum = a + b; // Addition
console.log(typeof sum); // "number"
console.log(Number("10") + 5); // String converted to number → 15
console.log(typeof NaN); // "number"

var result = prompt("Enter a number: "); 
var result2 = prompt("Enter another number: "); 
console.log(Number(result) + Number(result2)); // Convert strings to numbers before adding
*/

// 2. Comparison Operators (> < >= <= == === != !==)
// == compares values only, === compares values AND types

// 3. Logical Operators (&& → AND, || → OR, ! → NOT)
/*
var mark = prompt("Enter your degree: ");
if (mark >= 50) {
    console.log("You passed");
} else {      
    console.log("You failed");
}
*/

// 4. Assignment Operator (=)
/*
var name = prompt("Enter your name: ");
if (name == "John") {  
    console.log("Hello John");
} else {
    console.log("Hello stranger");
}

var x = "1";
if (x === 1) { // false because type is different
    console.log("x is equal to 1");
}
*/

// =======================
//  Loops Example
// =======================
/*
var box = "";
for (let i = 0; i < 5; i++) {
    box += "<h1>Welcome</h1>";
}
document.getElementById("demo").innerHTML = box;
*/

// =======================
//  Functions
// =======================

// Statement function → can be called before definition (hoisting)
/*
function getsum(a, b) {
    document.getElementById("demo").innerHTML = `The sum of ${a} and ${b} is: ${a+b}`;
    console.log(a + b);
}
getsum(10, 20);
*/

// Function expression → cannot be called before definition
/*
var getSum = function(a, b) {
    return a + b;
};
console.log(getSum(10, 20));
*/

// Anonymous function → has no name
// Self-invoking function → runs immediately
/*
(function(){
    console.log("Hello");
})();
*/

// =======================
//  Objects
// =======================
/*
var person = {
    name: "John",   
    age: 30,
    gender: "male",
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

console.log(person.name);
person.age = 35; // update property
console.log(person.age);
*/

// =======================
//  Arrays
// =======================
/*
var names = ["alaa", "esraa", "aya"];
var numbers = [11, 2, 13, 40, 5];

// Sorting
numbers.sort(function(a, b) { return a - b; });
console.log(numbers); // [2, 5, 11, 13, 40]
console.log(names.sort()); 

// Adding
names.push("sara");       // end
names.unshift("mona");    // start

// Removing
var last = names.pop();   // remove last
console.log(last);        // "sara"

// Slicing and splicing
console.log(names.slice(1, 2)); 
names.splice(1, 2, "newName");

// Converting
console.log(names.toString()); 
console.log(names.join("/")); 

// Searching
console.log(names.indexOf("esraa")); // -1 if not found

// Reversing
names.reverse();
console.log(names);

// Concatenating
console.log(names.concat(["sara", "john"]));
*/

// =======================
//  Regular Expressions
// =======================
// /pattern/flags
/*
var x = "regular";
console.log(x.replace("r", "k"));    // kegular (first occurrence)
console.log(x.replace(/r/, "k"));    // kegular (regex first occurrence)
console.log(x.replace(/r/g, "k"));   // kegulak (all occurrences)

var regex = /^[A-Z][a-z]{1,}$/; // starts with 1 uppercase + lowercase letters
console.log(regex.test("John")); // true
*/
// =======================
// Product Management App
// =======================

var productName = document.getElementById("productName"); 
var productPrice = document.getElementById("productPrice"); 
var productCategory = document.getElementById("productCategory"); 
var productDescription = document.getElementById("productDescription");
var productTableBody = document.getElementById("productTableBody"); 
var addBtn = document.getElementById("addProduct");
var formTitle = document.getElementById("formTitle");

var productlist = JSON.parse(localStorage.getItem("data")) || [];
var indexglobal = null;

// Display products on page load
display(productlist);

// Add / Update product
addBtn.onclick = function (event) {
    event.preventDefault();
    if (addBtn.innerHTML === "Update Product") {
        edit();
    } else {
        addproduct();
    }
};

// Add new product
function addproduct() {
    if (!validateInputs()) return;

    var product = {
        name: productName.value.trim(),
        price: productPrice.value.trim(),
        category: productCategory.value.trim(),
        description: productDescription.value.trim()
    };

    productlist.push(product);
    saveData();
    display(productlist);
    clearInputs();
}

// Display products
function display(list) {
    var box = "";
    for (var i = 0; i < list.length; i++) {
        box += `<tr>
            <td>${i + 1}</td>
            <td class="proName">${list[i].name}</td>
            <td>$${list[i].price}</td>
            <td>${list[i].category}</td>
            <td>${list[i].description}</td>
            <td><button onclick="delfun(${i})" class="btn btn-danger btn-sm">Delete</button></td>
            <td><button onclick="delupdata(${i})" class="btn btn-warning btn-sm">Update</button></td>
        </tr>`;
    }
    productTableBody.innerHTML = box;
}

// Delete product
function delfun(index) {
    if (confirm("Are you sure you want to delete this product?")) {
        productlist.splice(index, 1);
        saveData();
        display(productlist);
    }
}

// Prepare product for editing
function delupdata(index) {
    indexglobal = index;
    productName.value = productlist[index].name;
    productPrice.value = productlist[index].price;
    productCategory.value = productlist[index].category;
    productDescription.value = productlist[index].description;
    addBtn.innerHTML = "Update Product";
    formTitle.innerHTML = "Edit Product";
}

// Update product
function edit() {
    if (!validateInputs()) return;

    productlist[indexglobal] = {
        name: productName.value.trim(),
        price: productPrice.value.trim(),
        category: productCategory.value.trim(),
        description: productDescription.value.trim()
    };

    saveData();
    addBtn.innerHTML = "Add Product";
    formTitle.innerHTML = "Add Product";
    display(productlist);
    clearInputs();
}

// Search products with highlight
function search(e) {
    var term = e.value.toLowerCase();
    var filtered = productlist.filter(item =>
        item.name.toLowerCase().includes(term)
    );

    display(filtered);

    if (term.length > 0) {
        document.querySelectorAll(".proName").forEach(function (el) {
            var content = el.textContent;
            var regex = new RegExp(`(${term})`, "gi");
            el.innerHTML = content.replace(regex, `<span class="highlight">$1</span>`);
        });
    }
}

// Validate inputs
function validateInputs() {
    if (!nameRegex()) return false;
    if (!productPrice.value || productPrice.value <= 0) {
        alert("Please enter a valid price");
        return false;
    }
    if (!productCategory.value.trim()) {
        alert("Please enter a category");
        return false;
    }
    if (!productDescription.value.trim()) {
        alert("Please enter a description");
        return false;
    }
    return true;
}

// Name validation
function nameRegex() {
    var regex = /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/; // Allows multi-word names
    if (regex.test(productName.value.trim())) {
        return true;
    } else {
        alert("Invalid name: must start with uppercase followed by lowercase letters");
        return false;
    }
}

// Clear form inputs
function clearInputs() {
    productName.value = "";
    productPrice.value = "";
    productCategory.value = "";
    productDescription.value = "";
}

// Save to localStorage
function saveData() {
    localStorage.setItem("data", JSON.stringify(productlist));
}
