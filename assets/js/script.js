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

/**
 * script for the language dropdown menu
 */
document.addEventListener('DOMContentLoaded', function() {
  const flagLinks = document.querySelectorAll('.flag-link');

  flagLinks.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          const language = this.getAttribute('data-lang');
          localStorage.setItem('preferredLanguage', language);
          if (language === 'en' && window.location.pathname !== '/index.html') {
              window.location.href = 'index.html';
          } else if (language === 'he' && window.location.pathname !== '/he-il.html') {
              window.location.href = 'he-il.html';
          }
      });
  });

  const preferredLanguage = localStorage.getItem('preferredLanguage');
  if (preferredLanguage) {
      if (preferredLanguage === 'he' && window.location.pathname !== '/he-il.html') {
          window.location.href = 'he-il.html';
      } else if (preferredLanguage === 'en' && window.location.pathname !== '/index.html') {
          window.location.href = 'index.html';
      }
  } else {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(success, error);
      } else {
          if (window.location.pathname !== '/index.html') {
              window.location.href = 'index.html';  // Redireciona para inglês se a geolocalização não for suportada
          }
      }
  }

  function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      
      // Define os limites aproximados de Israel
      const isInIsrael = latitude >= 29.3 && latitude <= 33.3 && longitude >= 34.3 && longitude <= 35.9;
      
      if (isInIsrael && window.location.pathname !== '/he-il.html') {
          window.location.href = 'he-il.html';
      } else if (!isInIsrael && window.location.pathname !== '/index.html') {
          window.location.href = 'index.html';
      }
  }

  function error() {
      if (window.location.pathname !== '/index.html') {
          window.location.href = 'index.html';  // Redireciona para inglês em caso de erro
      }
  }
});
