let hiddenPage = document.querySelector("#hiddenPage");
let slider = document.querySelector(".slider");
let chosenModeArr = document.querySelectorAll(".chosenMode");
let submitBtn = document.querySelector(".submit");
let feedbackPage = document.querySelector(".form");
let selection = document.querySelector("#position");
let checkbox = document.querySelector(".checkbox");
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

selection.addEventListener("change", () => {
  if (selection.value == "在校安检专业学生") {
    document.querySelector(".chooseLine").style.display = "block";
    return;
  } else {
    alert("很抱歉,该身份分支的功能尚未开发,去尝试下别的身份吧！");
    selection.value = "在校安检专业学生";
    // document.querySelector(".chooseLine").style.display = "none";
  }
});

function switchColor(index) {
  document.querySelector(".beChosenStyle").classList.remove("beChosenStyle");
  chosenModeArr[index].classList.add("beChosenStyle");
}
