const text = "kzthik";
const typedEl = document.getElementById("typed");

let i = 0;
const delayMs = 650; // slow typing speed (increase for even slower)

function typeNext() {
  if (i <= text.length) {
    typedEl.textContent = text.slice(0, i);
    i++;
    setTimeout(typeNext, delayMs);
  }
}

typeNext();
