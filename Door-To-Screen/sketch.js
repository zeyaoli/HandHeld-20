//define elements
let slider = document.getElementById("slider");
let firstPic = document.getElementById("first");
let secondPic = document.getElementById("second");
let thirdPic = document.getElementById("third");

let noOpacity = false;

function update() {
  // let ratio = 9 / 16;
  // let increaseWidth = slider.value;
  // console.log(increaseWidth);

  updateScale(firstPic, slider.value);
  updateScale(secondPic, slider.value);
  updateScale(thirdPic, slider.value);

  setZIndex(firstPic);
  setZIndex(secondPic);
  setZIndex(thirdPic);

  secondPic.style.transform = `scale(${slider.value})`;
  thirdPic.style.transform = `scale(${slider.value})`;

  fadeOut(firstPic, 0.028 * slider.value);
  fadeOut(secondPic, 0.028 * slider.value);
  fadeOut(thirdPic, 0.03 * slider.value);

  console.log(`First: ${getHeight(firstPic)}`);

  // console.log(`First: ${firstPic.style.zIndex}`);
  // console.log(`Second: ${secondPic.style.zIndex}`);
  // console.log(`Third: ${thirdPic.style.zIndex}`);
}

function updateScale(pic, value) {
  pic.style.transform = `scale(${value})`;
}

function setZIndex(element) {
  let height = getHeight(element);
  element.style.zIndex = 10000 - height;
}

//NO NEED FOR THIS TIME
function getScaleNum(element) {
  return element.getBoundingClientRect().width / element.offsetWidth;
}

function getHeight(element) {
  return element.getBoundingClientRect().height;
}

function fadeOut(pic, value) {
  let picHeight = getHeight(pic);
  // console.log(picHeight);
  if (picHeight >= 850) {
    pic.style.opacity = 1 - (picHeight - 850) / 500;
  }

  if (pic.style.opacity <= 0 && noOpacity == false) {
    noOpacity = true;
  }
  resetPic(pic, value, picHeight);
}

function resetPic(pic, value, height) {
  if (noOpacity == true) {
    pic.style.opacity = 1;
    updateScale(pic, value);
    pic.style.zIndex = 100000 - height;
    noOpacity = false;
  }
}

slider.addEventListener("input", update);

window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
});
