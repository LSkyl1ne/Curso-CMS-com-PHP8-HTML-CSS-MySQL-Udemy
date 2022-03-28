let menu = document.querySelector(".menu");
let bar = document.querySelector(".bar");
let barButton = document.querySelector(".bar-button");

bar.addEventListener("click", () => {
    if(menu.classList.value == "menu"){
        menu.classList.add("active");
        barButton.outerHTML = "";
    }
    else if(menu.classList.value == "menu active"){
         menu.classList.remove("active");
    }
});
