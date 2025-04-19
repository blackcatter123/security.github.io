let slider = document.querySelector(".slider");
let chosenModeArr = document.querySelectorAll(".chosenMode");
let defaultNum = 0;
chosenModeArr[defaultNum].classList.add("beChosenStyle");
slider.addEventListener("click", () => {
  if (defaultNum == 0) {
    defaultNum = 1;
  } else {
    defaultNum = 0;
  }
  switchColor(defaultNum);
});
function switchColor(index) {
  document.querySelector(".beChosenStyle").classList.remove("beChosenStyle");
  chosenModeArr[index].classList.add("beChosenStyle");
}
