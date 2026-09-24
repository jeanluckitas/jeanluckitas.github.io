const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

function toggleMenu() {
  menu.classList.toggle("open");
  overlay.classList.toggle("show");
}

hamburger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", toggleMenu);
});