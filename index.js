const hiddenSection = document.querySelector(".hidden-section");
const productsLink = document.querySelector(".products");
productsLink.addEventListener("click", () => {
  hiddenSection.classList.toggle("flex");
});

const navBar = document.querySelector("header nav");
const signIn = document.querySelector(".sign-in");
const menu = document.querySelector(".menu");
menu.addEventListener("click", () => {
  navBar.classList.toggle("translate");
  signIn.classList.toggle("translate");
});
