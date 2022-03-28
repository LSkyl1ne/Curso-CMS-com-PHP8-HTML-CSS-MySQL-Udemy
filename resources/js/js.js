let menu = document.querySelector(".menu");
let bar = document.querySelector(".bar");

 bar.addEventListener("click", () => {
    menu.classList.add("active");
    console.log(menu.classList);
});