const toggleButton = document.querySelector(".toggle-btn");
const sidebar = document.querySelector("#side-bar");

function openMenu() {
  sidebar.style.left = "0";
}

toggleButton.addEventListener("click", openMenu);