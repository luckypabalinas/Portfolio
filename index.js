let showMenu = true;

function hamburger() {
    const icon = document.querySelector(".burger-icon");
    const menuList = document.querySelector(".nav-menu ul");

    if(showMenu){
        icon.innerHTML = "X"
        menuList.classList.add("active");
    } else {
        icon.innerHTML = "O"
        menuList.classList.remove("active");
    }

    showMenu = !showMenu
};

// let showMenu = true;

// function hamburger() {
//     const icon = 
// }