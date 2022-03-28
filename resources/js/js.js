let menu = document.querySelector(".menu");
let bar = document.querySelector(".bar");

 bar.addEventListener("click", () => {
     if(menu.classList.value == "menu"){
        menu.classList.add("active");
     }
     else if(menu.classList.value == "menu active"){
         menu.classList.remove("active");
     }
    
    console.log(menu.classList);
});