const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

const redNum = document.getElementById("redNum");
const greenNum = document.getElementById("greenNum");
const blueNum = document.getElementById("blueNum");

const colorBox = document.getElementById("colorBox");
const rgbText = document.getElementById("rgbText");
const hexText = document.getElementById("hexText");

function updateColorFromSliders() {
  redNum.value = red.value;
  greenNum.value = green.value;
  blueNum.value = blue.value;
  updateColor(red.value, green.value, blue.value);
}

function updateColorFromInputs() {
  let r = clamp(redNum.value);
  let g = clamp(greenNum.value);
  let b = clamp(blueNum.value);

  red.value = r;
  green.value = g;
  blue.value = b;
  updateColor(r, g, b);
}

function updateColor(r, g, b) {
  const rgb = `rgb(${r}, ${g}, ${b})`;
  colorBox.style.backgroundColor = rgb;
  rgbText.textContent = rgb;

  const hex = "#" +
    Number(r).toString(16).padStart(2, "0") +
    Number(g).toString(16).padStart(2, "0") +
    Number(b).toString(16).padStart(2, "0");

  hexText.textContent = hex.toUpperCase();
}

function clamp(value) {
  value = Number(value);
  if (value < 0) return 0;
  if (value > 255) return 255;
  return value;
}

red.addEventListener("input", updateColorFromSliders);
green.addEventListener("input", updateColorFromSliders);
blue.addEventListener("input", updateColorFromSliders);

redNum.addEventListener("input", updateColorFromInputs);
greenNum.addEventListener("input", updateColorFromInputs);
blueNum.addEventListener("input", updateColorFromInputs);

updateColorFromSliders();
