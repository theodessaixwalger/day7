function supp(button) {
  button.closest(".item").remove();
}
document.querySelectorAll(".delete-btn").forEach((button) => {
  button.addEventListener("click", () => supp(button));
});

function like(button) {
  button.classList.toggle("is-active");
}
document.querySelectorAll(".like-btn").forEach((button) => {
  button.addEventListener("click", () => like(button));
});

function plus(button, value) {
  let input = button.parentNode.querySelector("input");
  let newValue = parseInt(input.value) + value;

  if (newValue >= 1) {
    input.value = newValue;
  }
}
document.querySelectorAll(".plus-btn").forEach((button) => {
  button.addEventListener("click", () => plus(button, 1));
});
document.querySelectorAll(".minus-btn").forEach((button) => {
  button.addEventListener("click", () => plus(button, -1));
});
