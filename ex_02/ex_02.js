document.addEventListener("DOMContentLoaded", function () {
  let rotation = 0;
  let circle = document.getElementById("circle");

  function rotateCircle(step) {
    let add = parseInt(step.target.value);
    if (add === 0) rotation = 0;
    else rotation += add;
    circle.style.transform = `rotate(${rotation}deg)`;
  }

  let button = document.querySelectorAll(".rotate-button");
  button.forEach((button) => {
    button.addEventListener("click", rotateCircle);
  });
});
