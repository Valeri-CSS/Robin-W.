const menu = document.querySelector(".header-burger");
const menuactive = document.querySelector(".active");
const burgerlist = document.querySelector(".burger-menu-content-list");
const menuburger = document.querySelector(".menu-burger");
const btn = document.querySelectorAll(".photo-btn");
const activelist = document.querySelectorAll(".tab-wrapper");
const italybtn = document.querySelector(".photo-btn-italy");
const italyactive = document.querySelector(".tab-wrapper-italy");
const australiabtn = document.querySelector(".photo-btn-australia");
const australiaactive = document.querySelector(".tab-wrapper-australia");
const indiabtn = document.querySelector(".photo-btn-india");
const indiaactive = document.querySelector(".tab-wrapper-india");
const brazilbtn = document.querySelector(".photo-btn-brazil");
const brazilactive = document.querySelector(".tab-wrapper-brazil");

function addclass() {
    this.classList.toggle("btn-active")
};

var is_open = 0;
var is_open_italy = 0;
var is_open_australia = 0;
var is_open_india = 0;
var is_open_brasil = 0;


menuburger.addEventListener("click", function () {
    this.classList.toggle("active");
    if (is_open == 0) {
        menu.style.transform = "translateX(0%)";
        is_open = 1;
    } else {
        menu.style.transform = "translateX(100%)";
        is_open = 0;
    }
});


burgerlist.addEventListener("click", () => {
    if (menuburger.classList.contains("active")) {
        menuburger.classList.remove("active")
    } else {
        menuburger.classList.toggle("active")
    }
});

burgerlist.addEventListener("click", () => {
    menu.style.transform = "translateX(100%)";
    if (is_open == 0) {
        menu.style.transform = "translateX(0%)";
        is_open = 1;
    } else {
        menu.style.transform = "translateX(100%)";
        is_open = 0;
    }
});

btn.forEach(button => {
    button.addEventListener("click", addclass);
})

italybtn.addEventListener("click", function () {
    if (is_open_italy == 0) {
        italyactive.style.display = "flex";
        is_open_italy = 1;
    } else {
        italyactive.style.display = "none";
        is_open_italy = 0;
    }
});


australiabtn.addEventListener("click", function () {
    if (is_open_australia == 0) {
        australiaactive.style.display = "flex";
        is_open_australia = 1;
    } else {
        australiaactive.style.display = "none";
        is_open_australia = 0;
    }
});


indiabtn.addEventListener("click", function () {
    if (is_open_india == 0) {
        indiaactive.style.display = "flex";
        is_open_india = 1;
    } else {
        indiaactive.style.display = "none";
        is_open_india = 0;
    }
});


brazilbtn.addEventListener("click", function () {
    if (is_open_brasil == 0) {
        brazilactive.style.display = "flex";
        is_open_brasil = 1;
    } else {
        brazilactive.style.display = "none";
        is_open_brasil = 0;
    }
});