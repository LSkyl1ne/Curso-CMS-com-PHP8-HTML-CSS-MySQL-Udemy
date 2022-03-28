let menu = document.querySelector(".menu");
let bar = document.querySelector(".bar");
let barButton = document.querySelectorAll(".bar-button");

bar.addEventListener("click", () => {
    if(menu.classList.value == "menu"){
        menu.classList.add("active");
        barButton.forEach(button => {
            button.remove();
        });
    }
    else if(menu.classList.value == "menu active"){
         menu.classList.remove("active");
    }
});
