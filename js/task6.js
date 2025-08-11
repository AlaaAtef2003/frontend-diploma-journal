(function () {
    var meals = document.querySelectorAll(".nav-link");
    console.log(meals);
    for (var i = 0; i < meals.length; i++) {
        meals[i].addEventListener("click", function (e) {
            var test = e.target.innerHTML.trim();
            getPosts(test);
        });
    }
})();

var dish = [];
getPosts("pizza"); // عرض وصفات البيتزا أولاً

// جلب وصفات
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

// عرض الوصفات ككروت
function display() {
    var box = "";
    for (var i = 0; i < dish.length; i++) {
        box += `
        <div class="card py-2 px-2" style="width: 18rem; margin: 10px;">
            <img src="${dish[i].image_url}" class="card-img-top img-fluid" alt="${dish[i].title}">
            <div class="card-body">
                <h5 class="card-title">${dish[i].title}</h5>
                <p class="card-text">${dish[i].publisher}</p>
                <p class="card-text">ID: ${dish[i].recipe_id}</p>
                <a href="#" class="btn btn-primary" onclick="getRecipe('${dish[i].recipe_id}')">View Recipe</a>
            </div>
        </div>
        `;
    }
    document.getElementById("row").innerHTML = box;
}

// جلب تفاصيل وصفة معينة
function getRecipe(id) {
    var xml = new XMLHttpRequest();
    xml.open("GET", `https://forkify-api.herokuapp.com/api/get?rId=${id}`, true);
    xml.send();

    xml.addEventListener("readystatechange", function () {
        if (xml.readyState == 4 && xml.status == 200) {
            let data = JSON.parse(xml.responseText);
            let recipe = data.recipe;
            displayRecipe(recipe);

            // فتح المودال بعد تحميل التفاصيل
            let modal = new bootstrap.Modal(document.getElementById("exampleModal"));
            modal.show();
        }
    });
}

// عرض تفاصيل الوصفة في المودال
function displayRecipe(recipe) {
    var box = "";
    box += `<img src="${recipe.image_url}" class="img-fluid mb-3" alt="${recipe.title}">`;
    box += `<h5>${recipe.title}</h5>`;
    box += "<ul>";
    for (var i = 0; i < recipe.ingredients.length; i++) {
        box += `<li>${recipe.ingredients[i]}</li>`;
    }
    box += "</ul>";

    document.getElementById("recipeDetails").innerHTML = box;
}
