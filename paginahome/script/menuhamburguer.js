var btnMobile = document.getElementById("btn-mobile");

btnMobile.addEventListener("click", toggleMenu);

function toggleMenu() {
    var nav = document.getElementById("nav");
    nav.classList.toggle("active");
}
