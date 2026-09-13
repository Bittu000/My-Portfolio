const menu = document.querySelector(".hamburger");
const anch = document.querySelector(".anch");

menu.addEventListener("click", () => {
    anch.classList.toggle("show");
});