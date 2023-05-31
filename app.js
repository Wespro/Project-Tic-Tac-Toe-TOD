//variables
const squares = document.querySelectorAll(".square");
const square = document.querySelector(".square");
let lastPlay = "";
//Putting markes
squares.forEach((item) => {
  item.addEventListener("click", function (e) {
    if (lastPlay === "X") {
      e.target.innerText = "O";
      lastPlay = e.target.innerText;
    } else {
      e.target.innerText = "X";
      lastPlay = e.target.innerText;
    }
  });
});
