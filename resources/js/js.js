let menu = document.querySelector(".menu");
let bar = document.querySelector(".bar");
let barButton = document.querySelectorAll(".bar-button");
let x = document.querySelector(".bi-x-lg")
bar.addEventListener("click", () => {
    if(menu.classList.value == "menu"){
        menu.classList.add("active");
        barButton.forEach(button => {
            button.classList.remove("active");
        });
        x.classList.add("active");
    }
    else if(menu.classList.value == "menu active"){
         menu.classList.remove("active");
         barButton.forEach(button => {
            button.classList.add("active");
        });
        x.classList.remove("active");
    }
});
let banner = document.querySelector(".banner");
let bannerItem = document.querySelectorAll(".banner-item")