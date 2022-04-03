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

let bannerItem = document.querySelectorAll(".banner-item");
let currentImageIndex = 0;
let max = bannerItem.length;
let time = 4000;
function nextImage(){
    currentImageIndex++;
    bannerItem[currentImageIndex].classList.remove("atual")
    bannerItem[currentImageIndex].classList.add("atual")
    if(currentImageIndex == max){
        currentImageIndex = 0;
    }
    bannerItem[currentImageIndex].classList.add("atual")
    bannerItem[currentImageIndex].classList.remove("atual")
}
function start(){setInterval(() => {nextImage()}, time)};
window.addEventListener("load", start);