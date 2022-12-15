let btn = document.querySelectorAll(".boxes");
let popup = document.querySelector(".popup");
let newgame = document.getElementById("new-game");
let restart = document.getElementById("restart");
let msg = document.getElementById("message");
let win = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
];
let turn = true;
let count = 0;
const disableButtons = () => {
  btn.forEach((element) => (element.disabled = true));
  popup.classList.remove("hide");
};
const enableButtons = () => {
  btn.forEach((element) => {
    element.innerText = "";
    element.disabled = false;
  });
  popup.classList.add("hide");
};
const isWinning = (letter) => {
  disableButtons();
  msg.innerHTML = (letter == "X")?"Player 1 Wins!!":"Player 2 Wins!!";
};
newgame.addEventListener("click", () => {
  count = 0;
  enableButtons();
});
restart.addEventListener("click", () => {
  count = 0;
  enableButtons();
});
const win_check = () => {
  for (let i of win) {
    let [a, b, c] = [
      btn[i[0]].innerText,
      btn[i[1]].innerText,
      btn[i[2]].innerText,
    ];
    if (a != "" && (b != "") & (c != ""))//To ensure only the filled cells are checked
    {
        if (a == b && b == c) //If 3 consecutive filled with same symbol
        isWinning(a);
    }
  }
};
btn.forEach((move) => {
  move.addEventListener("click", () => {
    if (turn == true) 
    {
      turn = false;
      move.innerText = "X";
      move.disabled = true;
    } 
    else
    {
      turn = true;
      move.innerText = "O";
      move.disabled = true;
    }
    count += 1;
    if (count == 9) 
    {
        disableButtons();
        msg.innerHTML = "Draw!!";
    }
    win_check();
  });
});
window.onload = enableButtons;