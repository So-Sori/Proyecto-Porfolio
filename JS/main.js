//TYPE JS TITULO
// Setup and start animation!
let bannerTitulo = document.querySelector(".banner-tittle");
let typed = new Typed(bannerTitulo,{
  strings: ['FullStack <br> Developer'],
  typeSpeed: 45,
  showCursor: false
  });

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

// FORMULARIO VERIFICACION
const btn = document.getElementById('btn-form');

document.getElementById('form')
 .addEventListener('submit', function(event) {

    event.preventDefault();

    let fullname = document.getElementById('fullname');
    let email = document.getElementById('email');
    let message = document.getElementById('message').value;
    let warning = document.getElementById('warning');
    let warningMessage = "";

    const serviceID = 'service_xr97ydw';
    const templateID = 'template_mghm9xt';
    let valid = true;

    if(fullname.value.endsWith("  ")) {
      valid = false;
      warning.textContent = `Too much space, on fullname.`;
    } 
    if(message.length < 35){
      valid = false;
      warning.innerHTML = `${warning.textContent}<br>The message is too short.`;
    }
    if(valid){
    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Send Email';
        alert('Sent!');
      }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
      });
    }

});