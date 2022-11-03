const showAll = document.querySelector(".brands-menu__show-all");
const showAlltext = document.querySelector(".brands-text__show-all");
const showAllBtn = document.querySelector(".content__btn-next_btn-next-drop");
const showAllBtn2 = document.querySelector(".brands-menu__show-all_btn-next-drop");
const brand9 = document.querySelector(".brand-9");
const brand10 = document.querySelector(".brand-10");
const brand11 = document.querySelector(".brand-11");
const contentSelector = document.querySelector(".text__2")
const contentSelectorBnt = document.querySelector(".content__btn-next")
let contentsSelectorBtnText = document.querySelector(".content__btn-next-text")
let statusMenuOpenedBrand = true;
showAll.addEventListener("click", function (){
  if (statusMenuOpenedBrand) {
    brand9.style.display = "inline";
    brand10.style.display = "inline";
    brand11.style.display = "inline";
    showAllBtn2.style.backgroundImage = "url('/src/img/helpers/expand.svg')";
    showAlltext.innerHTML = "<p>Скрыть</p>"
    statusMenuOpenedBrand = false;
  } else {
    brand9.style.display = "none";
    brand10.style.display = "none";
    brand11.style.display = "none";
    showAllBtn2.style.backgroundImage = "url('/src/img/helpers/dropdown.svg')";
    showAlltext.innerHTML = "<p>Показать все</p>"
    statusMenuOpenedBrand = true;
  }
})
let statusContent = true;
contentSelectorBnt.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (statusContent){
    contentSelector.style.display = "inline";
    showAllBtn.style.backgroundImage = "url('/src/img/helpers/expand.svg')";
    statusContent = false;
    contentsSelectorBtnText.innerHTML = "<a>Скрыть</a>"
  } else{
    contentSelector.style.display = "none";
    showAllBtn.style.backgroundImage = "url('/src/img/helpers/dropdown.svg')";
    statusContent = true;
    contentsSelectorBtnText.innerHTML = "<a>Читать далее</a>"
  }
})