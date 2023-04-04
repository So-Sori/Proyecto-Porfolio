let menuBtnHamburguesa = document.getElementById("menu-btn-hamburguesa");
let menuBtnCerrar = document.getElementById("menu-btn-cerrar");
let menu = document.getElementById("menu");

menuBtnHamburguesa.addEventListener("click", ()=> {
    menu.classList.add("menu-visible");
    
})
menuBtnCerrar.addEventListener("click", ()=> {
    menu.classList.remove("menu-visible");
    
})