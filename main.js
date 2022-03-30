const stopwatch = document.querySelector(".stopwatch");
let seconds = 0;
let decimals = 0;
const decimalsElement = document.getElementById("decimals");
const secondsElement = document.getElementById("seconds");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
let interval;

const startCount = () => {
  decimals++;
  if (decimals <= 9) {
    decimalsElement.innerHTML = "0" + decimals;
  }

  if (decimals > 9) {
    decimalsElement.innerHTML = decimals;
  }

  if (decimals > 99) {
    seconds++;
    secondsElement.innerHTML = "0" + seconds;
    decimals = 0;
    decimalsElement.innerHTML = "0" + 0;
  }

  if (seconds > 9) {
    secondsElement.innerHTML = seconds;
  }
};

stopwatch.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.id === "start") {
    clearInterval(interval);
    interval = setInterval(startCount, 8);
  }
  if (event.target.id === "stop") {
    clearInterval(interval);
  }
  if (event.target.id === "reset") {
    clearInterval(interval);
    decimals = "00";
    seconds = "00";
    decimalsElement.innerHTML = decimals;
    secondsElement.innerHTML = seconds;
  }
});
