function myFunction(x) {
  x.classList.toggle("change");
}

const headerNav = document.querySelector(".header-nav");
const container = document.querySelector(".container");

container.addEventListener("click", function () {
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
