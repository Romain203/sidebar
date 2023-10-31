const toggleButton = document.querySelector(".toggle-btn");
const sidebar = document.querySelector("#side-bar");
//ma version
// function openMenu() {
//   sidebar.style.left = "0";
// }

// toggleButton.addEventListener("click", openMenu);
// corrigé 1
// let sideBarvisible = false;
// function openMenu(){
//     if (sideBarvisible) {
//         sidebar.classList.remove("active");
//     } else {
//         sidebar.classList.add("active");
//     }
//     sideBarvisible=!sideBarvisible;
// }
// toggleButton.addEventListener("click", openMenu);

// corrigé 2
function openMenu(){
    sidebar.classList.toggle("active");
};

toggleButton.addEventListener("click", openMenu);

const menuSpan = document.querySelectorAll(".toggle-btn span");

function transformMenu(){
    if (sidebar.classList.contains("active")) {
        menuSpan[1].style.opacity = 0;
    }
    else{
        menuSpan[1].style.opacity = 1;
    }
}
