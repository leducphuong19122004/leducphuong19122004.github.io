const button_skill = document.querySelectorAll(".button_skill");
const read_more_text = document.querySelectorAll(".read-more-text");
const menu_btn = document.querySelector(".menu");
const menu_dropdown = document.querySelector('.menu-dropdown');
const close_menu = document.querySelector('.close');

window.onclick = (event) => {
    if (event.target.matches('.close')) {
        menu_dropdown.style.display = "none";
        close_menu.style.display = "none";
        menu_btn.style.display = "block";
    } else if (event.target.matches('.menu')) {
        menu_dropdown.style.display = "flex";
        close_menu.style.display = "block";
        menu_btn.style.display = "none";
    } else {
        menu_dropdown.style.display = "none";
        close_menu.style.display = "none";
        menu_btn.style.display = "block";
    }
};

button_skill[0].addEventListener("click", () => {
    if (button_skill[0].textContent == "Read More") {
        read_more_text[0].style.display = "block";
        button_skill[0].textContent = "Read Less";
    } else {
        read_more_text[0].style.display = "none";
        button_skill[0].textContent = "Read More";
    }
});

button_skill[1].addEventListener("click", () => {
    if (button_skill[1].textContent == "Read More") {
        read_more_text[1].style.display = "block";
        button_skill[1].textContent = "Read Less";
    } else {
        read_more_text[1].style.display = "none";
        button_skill[1].textContent = "Read More";
    }
});

button_skill[2].addEventListener("click", () => {
    if (button_skill[2].textContent == "Read More") {
        read_more_text[2].style.display = "block";
        button_skill[2].textContent = "Read Less";
    } else {
        read_more_text[2].style.display = "none";
        button_skill[2].textContent = "Read More";
    }
});