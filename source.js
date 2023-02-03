const toggle = document.querySelector(".dark-mode-toggle img");
let originalSrc = toggle.getAttribute("src");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    toggle.src = toggle.getAttribute("data-src");
  } else {
    toggle.src = originalSrc;
  }
});

// document.querySelector('body').classList.toggle('dark-mode');


const header = document.querySelector("header");

window.addEventListener ("scroll",function() {
     header.classList.toggle ("sticky", window.scrollY > 0);
})

