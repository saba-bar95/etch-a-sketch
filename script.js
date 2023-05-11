const input = document.querySelector("input");
const gridContainter = document.querySelector(".grid-container");
const colorBtns = document.querySelector(".color-buttons");
let divs;

const randomRgbColor = function () {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + g + "," + b + ")";
};

function createHover(divs, e) {
  let targetValue;
  if (e === undefined) targetValue = true;
  else targetValue = e.target.classList.contains("black");
  divs.forEach((div) =>
    div.addEventListener("mouseover", function (e) {
      if (targetValue) {
        e.target.style.backgroundColor = "black";
      } else {
        e.target.style.backgroundColor = randomRgbColor();
      }
    })
  );
}

function createGrid(val = 16) {
  gridContainter.textContent = "";
  const divWidth = 500 / val;
  const divHeight = 500 / val;
  for (let i = 1; i <= val * val; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-square");
    div.style.width = divWidth + "px";
    div.style.height = divHeight + "px";
    gridContainter.appendChild(div);
  }
  divs = document.querySelectorAll(".grid-square");
  createHover(divs);
}

input.addEventListener("click", function () {
  const value = input.value;
  createGrid(value);
});

colorBtns.addEventListener("click", function (e) {
  if (e.target.classList.contains("reset")) {
    divs.forEach((div) => (div.style.backgroundColor = "white"));
    return;
  }
  createHover(divs, e);
});

createGrid();
