let buttonMobile = document.getElementById("Burger");
let nav = document.querySelector("nav");
let links = document.querySelectorAll("nav ul li a");
//this makes it visible and not visible on scroll
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("topBtn").style.display = "block";
  } else {
    document.getElementById("topBtn").style.display = "none";
  }
}

//this makes scroll to top
function backtotopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
const mobMenu = () => {
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", mobMenu);
  }
  if (nav.classList.contains("responsive")) {
    nav.classList.remove("responsive");
    document.body.style.overflow = "";
  } else {
    nav.classList.add("responsive");
    document.body.style.overflow = "hidden";
  }
};

buttonMobile.addEventListener("click", mobMenu);
