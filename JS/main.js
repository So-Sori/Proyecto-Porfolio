// INTERACTIVIDAD BOTONES ABRIR Y CERRAR MENU
let menuBtnHamburguesa = document.getElementById("menu-btn-hamburguesa");
let menuBtnCerrar = document.getElementById("menu-btn-close");
let menu = document.getElementById("menu");

menuBtnHamburguesa.addEventListener("click", ()=> {
    menu.classList.add("menu-visible");
    
})
menuBtnCerrar.addEventListener("click", ()=> {
    menu.classList.remove("menu-visible");
    
})