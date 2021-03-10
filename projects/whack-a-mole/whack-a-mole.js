let squares = document.getElementsByClassName("square");
let score = document.getElementById("score");
let timeLeft = document.getElementById("time-left");
let moleImage =
  '<img src="mole.PNG" onClick="whackTheMole(this)" id="mole" alt="" />';

squares[Math.floor(Math.random() * 25)].innerHTML = moleImage;

function whackTheMole(el) {
  if (timer > 0) {
    el.remove();
    let audio = new Audio("whack-audio.wav");
    audio.play();
    result = result + 1;
    score.textContent = result;
    squares[Math.floor(Math.random() * 25)].innerHTML = moleImage;
  }
}

let result = 0;

let timer = 15;
timeLeft.textContent = timer + " seconds";

let downloadTimer = setInterval(function () {
  timeLeft.textContent = timer + " seconds";
  if (timer <= 0) {
    clearInterval(downloadTimer);
    timeLeft.textContent = "GAME OVER!";
  }
  timer -= 1;
}, 1000);

function restart() {
  document.location.reload();
}
