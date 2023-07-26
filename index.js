const hiddenSection = document.querySelector(".hidden-section");
const productsLink = document.querySelector(".products");
const signIn = document.querySelector(".sign-in");
productsLink.addEventListener("click", () => {
  hiddenSection.classList.toggle("flex");
  // signIn.style.zIndex = "0";
});

const navBar = document.querySelector("header nav");
const xIcone = document.querySelector(".x-icone");
const menu = document.querySelector(".menu");
menu.addEventListener("click", () => {
  navBar.classList.toggle("translate");
  hiddenSection.style.display = "none";
});

xIcone.addEventListener("click", () => {
  hiddenSection.style.display = "none";
});
