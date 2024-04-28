'use strict';

/**
 * navbar variables
 */
const menuToggleBtn = document.querySelector("[data-navbar-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }

menuToggleBtn.addEventListener("click", function () { elemToggleFunc(navbar); });




/**
 * go to top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 800) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }

});

/**
 * script for the CTA
 */

document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector('.cta-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const emailInput = document.querySelector('input[name="email"]');
    const userEmail = emailInput.value;

    window.location.href = "mailto:contact@360brave.com?subject=Free Consultation&body=" + encodeURIComponent("sender e-mail: " + userEmail);
  });
});


/**
 * script for the Contact secrtion
 */

document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector('.contact-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nameInput = document.getElementById('name').value;
    const phoneInput = document.getElementById('phone').value;
    const emailInput = document.getElementById('email').value;
    const messageInput = document.getElementById('message').value;

    // Montando o corpo do e-mail com os dados do formulário
    const emailBody = "Name: " + nameInput + "\n" +
                      "Phone: " + phoneInput + "\n" +
                      "Email Address: " + emailInput + "\n" +
                      "Message: " + messageInput;

    // Montando o link 'mailto' com o endereço de e-mail de destino e o corpo do e-mail
    const mailtoLink = "mailto:contact@360brave.com" +
                       "?subject=Contact Form Submission" +
                       "&body=" + encodeURIComponent(emailBody);

    // Criando um elemento de link 'a' com o link 'mailto' como href
    const link = document.createElement("a");
    link.href = mailtoLink;

    // Clicando no link programaticamente para abrir o cliente de e-mail do dispositivo
    link.click();
  });
});

