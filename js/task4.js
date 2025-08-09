window.onload = function () {
    var lightbox = document.getElementById("lightbox");
    var imgs = Array.from(document.querySelectorAll(".item img"));
    var close = document.getElementById("close");
    var lightitem = document.getElementById("lightitem");
    var nextbtn = document.getElementById("next");
    var prevbtn = document.getElementById("prev");

    var currentindex = 0; // keep track of current image index

    // Open lightbox when clicking an image
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].addEventListener("click", function (e) {
            var imgsrc = e.target.src;
            lightbox.style.display = "flex";
            lightitem.style.backgroundImage = `url(${imgsrc})`;
            currentindex = imgs.indexOf(e.target); // set current index
        });
    }

    // Close lightbox
    close.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    // Next button
    nextbtn.addEventListener("click", function () {
        currentindex++;
        if (currentindex >= imgs.length) {
            currentindex = 0; // loop to first
        }
        lightitem.style.backgroundImage = `url(${imgs[currentindex].src})`;
    });

    // Prev button
    prevbtn.addEventListener("click", function () {
        currentindex--;
        if (currentindex < 0) {
            currentindex = imgs.length - 1; // loop to last
        }
        lightitem.style.backgroundImage = `url(${imgs[currentindex].src})`;
    });
};
