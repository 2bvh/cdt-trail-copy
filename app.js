const navToggle = document.querySelector(".navbar-toggle");
const navLvl1 = document.querySelector(".nav-lvl1");
const navItems1 = document.querySelectorAll(".nav-item-1");
const lastSlide = document.querySelectorAll(".last-slide");
const nextSlide = document.querySelectorAll(".next-slide");

let mobileNavOpen = false;

navToggle.addEventListener("click", function () {
  if (mobileNavOpen === false) {
    navLvl1.style.display = "block";
    mobileNavOpen = true;
  } else if (mobileNavOpen === true) {
    navLvl1.style.display = "none";
    mobileNavOpen = false;
  }
});

let slideIndex = 1;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let jumboTimer = setTimeout(function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active-slide");
    dots[i].classList.remove("active-dot");
  }

  if (slideIndex < slides.length) {
    slideIndex++;
    console.log(slideIndex);
  } else if (slideIndex >= slides.length) {
    slideIndex = 1;
    console.log(slideIndex);
  }

  slides[slideIndex - 1].classList.add("active-slide");
  dots[slideIndex - 1].classList.add("active-dot");

  jumboTimer = setTimeout(showSlides, 5000);
}, 5000);

nextSlide.forEach((slide) => {
  slide.addEventListener("click", function () {
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active-slide");
      dots[i].classList.remove("active-dot");
    }

    if (slideIndex < slides.length) {
      slideIndex++;
    } else if (slideIndex >= slides.length) {
      slideIndex = 1;
    }

    slides[slideIndex - 1].classList.add("active-slide");
    dots[slideIndex - 1].classList.add("active-dot");
  });
});

lastSlide.forEach((slide) => {
  slide.addEventListener("click", function () {
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active-slide");
      dots[i].classList.remove("active-dot");
    }

    if (slideIndex > 1) {
      console.log(slideIndex);
      slideIndex--;
    } else if (slideIndex == 1) {
      console.log(slideIndex);
      slideIndex = 3;
    }

    slides[slideIndex - 1].classList.add("active-slide");
    dots[slideIndex - 1].classList.add("active-dot");
  });
});
