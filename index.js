// navber section 
window.addEventListener("scroll", function () {
    let nav = document.querySelector("nav");
    if (window.scrollY > 0) {
        nav.classList.add("fixed");
    } else {
        nav.classList.remove("fixed");
    }
});
// question section 
document.querySelectorAll('.relative').forEach(div => {
    const incrementBtn = div.querySelector('.incrementBtn');
    const decrementBtn = div.querySelector('.decrementBtn');
    const secondPara = div.querySelector('.secondPara');

    incrementBtn.addEventListener("click", () => {
        secondPara.classList.remove("hidden");
        incrementBtn.classList.add("hidden");
        decrementBtn.classList.remove("hidden");
    });

    decrementBtn.addEventListener("click", () => {
        secondPara.classList.add("hidden");
        incrementBtn.classList.remove("hidden");
        decrementBtn.classList.add("hidden");
    });
  });