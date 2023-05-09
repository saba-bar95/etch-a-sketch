const container = document.querySelector(".container");
const divWidth = 320 / 16;
const divHeight = 320 / 16;

function createHover(div) {
  div.forEach((div) =>
    div.addEventListener("mouseover", function (e) {
      e.target.style.backgroundColor = "black";
    })
  );
}

function createSquares() {
  for (let i = 1; i <= 256; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-square");
    div.style.width = divWidth + "px";
    div.style.height = divHeight + "px";
    container.appendChild(div);
  }

  const divs = document.querySelectorAll(".grid-square");
  createHover(divs);
}

createSquares();
