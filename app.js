const navToggle = document.querySelector(".nav-toggle");
const link = document.querySelector(".links");
const nav = document.querySelector("nav");

navToggle.addEventListener("click", function () {
  link.classList.toggle("show-links");
  nav.classList.toggle("expand-nav");
});
