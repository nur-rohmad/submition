const burgerButton = document.getElementsByClassName("nav-burger")[0];
const navLinks = document.getElementsByClassName("nav-links")[0];

burgerButton.addEventListener("click", () => {
  if (navLinks.style.display === "none") {
    navLinks.style.display = "block";
  } else {
    navLinks.style.display = "none";
  }
});
