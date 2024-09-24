const navbar = document.querySelector(".header .navbar");
const searchForm = document.querySelector(".search-form");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.add("active");
};

document.getElementById("nav-close").onclick = () => {
  navbar.classList.remove("active");
};

document.getElementById("search-btn").onclick = () => {
  searchForm.classList.add("active");
};

document.getElementById("close-search").onclick = () => {
  searchForm.classList.remove("active");
};

var swiper = new Swiper(".home-slider", {
  loop: true,
  grapCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
