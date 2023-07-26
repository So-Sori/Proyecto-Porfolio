//TYPE JS TITULO
let bannerTitle = document.querySelector(".banner-tittle");
let typed = new Typed(bannerTitle,{
  strings: ['Full Stack <br> Developer'],
  typeSpeed: 45,
  showCursor: false
  });

let btnMenuBurger = document.getElementById("menu-btn-burger");
let btnMenuClose = document.getElementById("menu-btn-close");
let menu = document.getElementById("menu");

for (let i = 0; i < menu.children.length; i++) {
  menu.children[i].addEventListener("click",() => {
    menu.classList.remove("menu-visible");
  })
}
btnMenuBurger.addEventListener("click", ()=> {
    menu.classList.add("menu-visible");
    
})
btnMenuClose.addEventListener("click", ()=> {
    menu.classList.remove("menu-visible");
})

// FORM VERIFICATION
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
        fullname.value = "";
        email.value = "";
        document.getElementById('message').value = "";
        Swal.fire({
          icon: 'success',
          title: 'Send it!',
          text: `Thank you for you message!`,
        })
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