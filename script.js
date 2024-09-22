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
