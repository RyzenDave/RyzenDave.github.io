const changeTextColor = (element, color = "black") => {
  element.style.color = color;
};

const changeFontSize = (element, textSize = 24) => {
  element.style.fontSize = `${textSize}px`;
};

document.getElementById("styleButton").addEventListener("click", () => {
  const header = document.getElementById("header");
  const sizeInput = document.getElementById("textSizeInput");
  const colorInput = document.getElementById("colorInput");

  changeFontSize(header, sizeInput.value);
  changeTextColor(header, colorInput.value);
});
