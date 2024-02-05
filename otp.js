const blinker = document.getElementById("blinker");
const seconds = document.getElementById("seconds");
const mins = document.getElementById("mins");

let secs = 60;
let minutes = 1;

function handleBlink() {
  blinker.style.visibility = blinker.style.visibility === "hidden" ? "visible" : "hidden";
}

function handleSeconds() {
  secs--;
  if (secs < 0) {
    secs = 60;
    minutes--;
    if (minutes < 0) {
      clearInterval(timer);
      minutes = 0;
      secs = 0;
    }
  }
  seconds.textContent = secs.toString().padStart(2, "0");
  mins.textContent = minutes.toString().padStart(2, "0");
}

const timer = setInterval(() => {
  handleBlink();
  handleSeconds();
}, 1000);
