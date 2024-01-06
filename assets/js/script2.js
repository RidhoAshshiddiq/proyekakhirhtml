const slideIns = document.querySelectorAll(".slide-in");
function checkSlide() {
  slideIns.forEach(slideIn => {
    const slideInAt = (window.scrollY + window.innerHeight) - slideIn.clientHeight / 2;
    const slideInBottom = slideIn.offsetTop + slideIn.clientHeight;
    const isHalfShown = slideInAt > slideIn.offsetTop;
    const isNotScrolledPast = window.scrollY < slideInBottom;

    if (isHalfShown && isNotScrolledPast) {
      const direction = slideIn.getAttribute("data-direction");
      slideIn.classList.add("active", `slide-in-${direction}`);
    } else {
      slideIn.classList.remove("active", "slide-in-left", "slide-in-right");
    }
  });
}
window.addEventListener("scroll", checkSlide);
window.addEventListener("resize", checkSlide);
checkSlide();
