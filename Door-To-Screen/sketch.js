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

  secondPic.style.transform = `scale(${slider.value})`;
  thirdPic.style.transform = `scale(${slider.value})`;

  fadeOut(firstPic, 0.028 * slider.value);
  fadeOut(secondPic, 0.03 * slider.value);
  fadeOut(thirdPic, 0.03 * slider.value);

  console.log(firstPic.style.zIndex);
}

function updateScale(pic, value) {
  pic.style.transform = `scale(${value})`;
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
    pic.style.zIndex = 10000 - height;
    console.log(pic.style.zIndex);
    noOpacity = false;
  }
}

slider.addEventListener("input", update);
