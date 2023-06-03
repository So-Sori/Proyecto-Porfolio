//TYPE JS TITULO
// Setup and start animation!
let bannerTitulo = document.querySelector(".banner-tittle");
let typed = new Typed(bannerTitulo,{
  strings: ['Full Stack <br> Developer'],
  typeSpeed: 45,
  showCursor: false
  });

// INTERACTIVIDAD BOTONES ABRIR Y CERRAR MENU
let menuBtnHamburguesa = document.getElementById("menu-btn-hamburguesa");
let menuBtnCerrar = document.getElementById("menu-btn-close");
let menu = document.getElementById("menu");

for (let i = 0; i < menu.children.length; i++) {
  menu.children[i].addEventListener("click",() => {
    menu.classList.remove("menu-visible");
  })
}
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

    const serviceID = 'service_xr97ydw';
    const templateID = 'template_mghm9xt';
    let valid = true;

    if(fullname.value.endsWith("  ")) {
      warning.textContent = "";
      valid = false;
      warning.textContent = `Too much space, on fullname.`;
    } 
    if(message.length < 20){
      warning.textContent = "";
      valid = false;
      warning.innerHTML = `${warning.textContent}<br>The message is too short.`;
    }
    if(valid){
      warning.textContent = "";
    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Send Email';
        Swal.fire({
          icon: 'success',
          title: 'Send it!',
          text: `Thank you for you message!`,
        })
        fullname.value = "";
        message.value = "";
        email.value = "";
      }, (err) => {
        btn.value = 'Send Email';
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${JSON.stringify(err)}!`,
        })
      });
    }

});