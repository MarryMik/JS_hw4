const menu = document.getElementsByClassName("burger-menu")[0];

const links = document.getElementsByClassName("menu__item");
const hamburger = document.getElementsByClassName("burger-menu__nav")[0];

const overlay = document.getElementsByClassName("burger-menu__overlay")[0];
const menuButton = document.getElementsByClassName("burger-menu__button")[0];
const menuLines = document.getElementsByClassName("burger-menu__line");



function Menu(){
 menuButton.addEventListener('click',(e)=>{
    e.preventDefault();
    toggleMenu();
 })
 
 Array.from(links).forEach(el =>{
    el.addEventListener('click', () => toggleMenu() );
 })
 
 overlay.addEventListener('click', () => toggleMenu());

 function toggleMenu(){
    if( Array.from(menu.classList).includes("burger-menu__active")){
        menu.classList.remove("burger-menu__active");
    }else{
        menu.classList.add("burger-menu__active");
    }
 }
}

  Menu();