const header = document.querySelector(".site-header");
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  header.classList.toggle("open");
  document.body.classList.toggle("no-scroll");
});
