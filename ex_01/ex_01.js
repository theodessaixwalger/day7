document.addEventListener("DOMContentLoaded", function () {
  let rectangle = document.getElementById("square");
  function reduceOpacity() {
    rectangle.style.opacity = 0.5;
  }
  function resetOpacity() {
    rectangle.style.opacity = 1;
  }
  rectangle.addEventListener("mouseover", reduceOpacity);
  rectangle.addEventListener("mouseout", resetOpacity);
});
