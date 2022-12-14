let slidePosition = 0;
const slider = document.querySelector(".slider");
const sliderBorder = document.querySelector(".slides-container");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

slider.addEventListener("click", (event) => {
  const { target } = event;

  if (target.className == "button next") {
    slidePosition += 300;
    slidePosition == 900
      ? (event.target.style.display = "none")
      : (prevButton.style.display = "block");
  } else if (target.className == "button prev") {
    slidePosition -= 300;
    slidePosition == 0
      ? (event.target.style.display = "none")
      : (nextButton.style.display = "block");
  }
  sliderBorder.style.left = -slidePosition + "px";
});
