const green = document.querySelector(".green");
const pink = document.querySelector(".pink");
const blue = document.querySelector(".blue");

window.addEventListener("click", (e) => {
  console.log("5. window Event trigger");
});

document.body.addEventListener("click", (e) => {
  console.log("4. Body is click");
});

green.addEventListener("click", (e) => {
  console.log("3. Green Event trigger");
});

pink.addEventListener("click", (e) => {
  console.log("2. Pink Event trigger");
});

blue.addEventListener("click", (e) => {
  console.log("1. blue is Event trigger");
});
