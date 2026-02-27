const text = "kzthik";
const typedEl = document.getElementById("typed");

const typingSpeed = 120;
const deletingSpeed = 70;
const holdAfterTyping = 1200;
const holdAfterDeleting = 400;

let i = 0;
let isDeleting = false;

function loopTyping() {
  if (!isDeleting) {
    typedEl.textContent = text.substring(0, i + 1);
    i++;

    if (i === text.length) {
      setTimeout(() => isDeleting = true, holdAfterTyping);
    }
  } else {
    typedEl.textContent = text.substring(0, i - 1);
    i--;

    if (i === 0) {
      isDeleting = false;
      setTimeout(() => {}, holdAfterDeleting);
    }
  }

  const speed = isDeleting ? deletingSpeed : typingSpeed;
  setTimeout(loopTyping, speed);
}

loopTyping();
