let mainNav = document.getElementById("main-menu");
let navBarToggle = document.getElementById("toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});

function navFunction() {
  let x = document.getElementById("second-nav");
  if (x.className === "bottom-nav__items") {
    x.className += " active";
  } else {
    x.className = "bottom-nav__items";
  }
}
