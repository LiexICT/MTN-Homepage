function myFunction(x) {
  x.classList.toggle("change");
}

const container = document.querySelector(".container");
const headerNav = document.querySelector(".header-nav");

container.addEventListener("click", () => {
  if (headerNav.style.transform === "scaleY(1)") {
    headerNav.style.transform = "scaleY(0)";
  } else {
    headerNav.style.transform = "scaleY(1)";
  }
});

var acc = document.getElementsByClassName("accordion");

var i;

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}
