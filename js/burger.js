

const menuElem = document.querySelector('.menu');
const hamburgerElem = document.querySelector('.humburger-menu');

const toggleMenu = () =>{
    menuElem.classList.toggle('menu-active');
    hamburgerElem.classList.toggle('humburger-menu-active');
}

hamburgerElem.addEventListener('click', toggleMenu );