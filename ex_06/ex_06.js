function hurts() {
  let message = document.getElementById("speech-bubble");
  message.textContent = "Ooch, that hurts!";
  setTimeout(() => {
    message.textContent = "Hello!";
  }, 2000);
}
document.getElementById("robot").addEventListener("click", hurts);

function coordinates(event) {
  let ecran = document.getElementById("screen-text");
  let x = event.clientX;
  let y = event.clientY;
  ecran.textContent = "X: " + x + "\nY: " + y;
}
document.getElementById("robot").addEventListener("mousemove", coordinates);

function writemessage() {
  let screenText = document.getElementById("screen-text");
  screenText.textContent = "Don't worry, I'll take care of it!";

  setTimeout(() => {
    screenText.textContent = "Bip bip bip!";
  }, 2000);
}
document.getElementById("robot-input").addEventListener("input", writemessage);

let eyeClickCount = 0;
function countEyeClicks() {
  eyeClickCount += 1;
  if (eyeClickCount >= 10) {
    let leftIris = document.querySelector(".eye-left-iris");
    let rightIris = document.querySelector(".eye-right-iris");

    leftIris.style.fill = generateRandomColor();
    rightIris.style.fill = generateRandomColor();
    eyeClickCount = 0;
  }
}
function generateRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.querySelectorAll(".eye-left-iris, .eye-right-iris").forEach((eye) => {
  eye.addEventListener("click", countEyeClicks);
});
