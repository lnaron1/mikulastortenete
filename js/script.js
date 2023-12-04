const collapse = document.querySelector(".collapse");
const collnav = document.querySelector(".collapsed-nav");

collapse.addEventListener("click", () => {
    collapse.classList.toggle("active");
    collnav.classList.toggle("active");
});