const btns = document.querySelectorAll(".game-container button");
const msg = document.querySelector(".msg");
const msg2 = document.querySelector(".msg2");

let colors = ["red", "yellow", "green", "blue"];
let userArr = [];
let computerArr = [];
let level = 0;
let idx = 0;

addEventListener("keypress", startgame);

function startgame() {
  level = 0;
  computerArr = [];
  userArr = [];
  msg.innerText = "Game started!";
  msg2.innerText = "Start!";
  setTimeout(() => {
    levelUpdate();
  }, 500);
}

btns.forEach((btn) => {
  btn.addEventListener("click", (evt) => {
    userArr.push(evt.target.innerText.toLowerCase());
    if (level === 0) {
      btnDisabled();
    }
    checkMemeory(btn);
  });
});

function checkMemeory(btn) {
  if (userArr[idx] === computerArr[idx]) {
    idx++;
    if (userArr.length === computerArr.length) {
      levelUpdate();
      idx = 0;
      userArr = [];
    }
  } else {
    btnDisabled();
    msg.innerText = `Game Over your score is level: ${level}`;
    msg2.innerText = "Game Over!";
  }
}

function levelUpdate() {
  btnEnabled();
  level++;
  msg.innerText = `Level ${level}`;
  msg2.innerText = level;
  let randomIdx = Math.floor(Math.random() * 4);
  computerArr.push(colors[randomIdx]);
  blink(randomIdx);
}

function blink(randomIdx) {
  btns[randomIdx].style.backgroundColor = "white";
  setTimeout(() => {
    btns[randomIdx].style.backgroundColor =
      btns[randomIdx].innerText.toLowerCase();
  }, 300);
}

function btnDisabled() {
  btns.forEach((btn) => {
    btn.disabled = true;
  });
}

function btnEnabled() {
  btns.forEach((btn) => {
    btn.disabled = false;
  });
}
