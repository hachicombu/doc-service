const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    header.classList.add("inview");
  } else {
    header.classList.remove("inview");
  }
});
