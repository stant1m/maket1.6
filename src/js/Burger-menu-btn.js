let burgerBtnOpen = document.querySelector(".header__burger-menu");
let burgerMenu = document.querySelector(".mobile-menu-main-container");
let burgerBtnClose = document.querySelector(".menu-back");

document.addEventListener('click', function(evt) {
  evt.preventDefault(burgerBtnClose);
  if (window.innerWidth < 1440 && evt.target.closest(".header__burger-menu")) {
    burgerMenu.classList.toggle("active");
  } else if (window.innerWidth < 1440 && (!evt.target.closest(".mobile-menu-main-container"))
    || (evt.target.closest(".menu-back"))) {
    burgerMenu.classList.remove("active");
  }
});