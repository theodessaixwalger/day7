function map(elements, modifier) {
  let finalarr = [];
  for (let a = 0; a < elements.length; a++) {
    finalarr.push(modifier(elements[a]));
  }
  return finalarr;
}
function isEven(number) {
  return number % 2 === 0;
}
console.log(map([5, 8, 10], isEven));