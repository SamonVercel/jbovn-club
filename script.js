var nav = document.getElementById("nav");
var menuBtnn = document.getElementById("menu-btn");
var closeBtn = document.getElementById("close-btn");

menuBtnn.addEventListener("click", function () {
  nav.classList.add("show");
});

closeBtn.addEventListener("click", function () {
  nav.classList.remove("show");
});
