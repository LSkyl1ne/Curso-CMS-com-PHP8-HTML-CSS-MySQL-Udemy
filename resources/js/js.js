let menu = document.querySelector(".menu");
let bar = document.querySelector(".bar");
let barButton = document.querySelectorAll(".bar-button");
let x = document.querySelector(".bi-x-lg")
bar.addEventListener("click", () => {
    if(menu.classList.value == "menu"){
        menu.classList.add("active");
        barButton.forEach(button => {
            button.outerHTML = "";
        });
        x.style.display = "block";
    }
    else if(menu.classList.value == "menu active"){
         menu.classList.remove("active");
    }
});
