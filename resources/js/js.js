let menu = document.querySelector(".menu");
let bar = document.querySelector(".bar");
let barButton = document.querySelectorAll(".bar-button");

bar.addEventListener("click", () => {
    if(menu.classList.value == "menu"){
        menu.classList.add("active");
        bar.removeChild(barButton)
    }
    else if(menu.classList.value == "menu active"){
         menu.classList.remove("active");
    }
});
