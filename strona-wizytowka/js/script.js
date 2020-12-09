$(document).ready(function () {
  /* menu-hamburger */
  const hamburger = $('#hamburger');
  const times = $('#times');
  const menuOpen = $('#menu-open');
  console.log(hamburger);

  hamburger.click(function () {
    hamburger.hide();
    times.fadeIn(550);
    menuOpen.slideDown(550);
  });

  times.click(function () {
    menuOpen.slideUp(550);
    times.hide();
    hamburger.fadeIn();
  });

  /* about-description-height */
  const aboutDescription = $('.about-description');
  const aboutDescriptionHeight = $('.about-description-height');
  const showMore = $('.show-more');
  const autoHeight = $('.description-height-auto');
  

  showMore.click(function () {
    
    let aboutDescriptionHeightContainer = aboutDescription.height();
    console.log(aboutDescriptionHeightContainer);
    
    aboutDescriptionHeight.animate({
      flexBasis: aboutDescriptionHeightContainer
    }, 500, function () {
      aboutDescriptionHeight.after(showMore.hide());
      const hideDescription = $('<button class="hide-description">Hide description</button>');
      showMore.after(hideDescription);
      console.log('hideDescription', hideDescription);
      hideDescription.click(function () {
        console.log('dziala');
        aboutDescriptionHeight.animate({
          flexBasis: '200px'
        }, 500, function () {
          aboutDescriptionHeight.after(hideDescription.hide(), showMore.show())
        });
      });
    });
  });

  /* smooth scrolling */
  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 700, function () {
          window.location.hash = hash;
      });
    }
  });

  /* form */
  const createAppointment = (appointment) => {
    console.log(appointment);

    const appointmentMessage = document.querySelector('.appointment-message');

    fetch('https://formspree.io/f/xnqogare', {
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify(appointment)
      })
      .then(res => res.json())
      .then(resJSON => {
        console.log(resJSON);
        appointmentMessage.classList.add('send');
        appointmentMessage.classList.remove('failure');
        appointmentMessage.innerText = `Thank you ${appointment.name}. Your message is sent!`;
      });
  }

  const appointemntForm = document.getElementById('appointment-form');

  appointemntForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const appointmentMessage = document.querySelector('.appointment-message');
    let formFields = document.getElementsByClassName('form-field');
    let fieldsErrors = 0;
    let appointment = {
      name: document.getElementById('appointment-name').value,
      email: document.getElementById('appointment-email').value,
      city: document.getElementById('appointment-city').value,
      phone: document.getElementById('appointment-phone').value,
      message: document.getElementById('appointment-message').value
    }


    for (let i = 0; i < formFields.length; i++) {
      console.log(formFields[i].value);
      if (formFields[i].value === '') {
        ++fieldsErrors;
        formFields[i].classList.add('failure');
      } else {
        formFields[i].classList.remove('failure');
      }
    }

    if (fieldsErrors === 0) {
      createAppointment(appointment);
    } else {
      appointmentMessage.classList.add('failure');
      appointmentMessage.innerText = 'Fill up all empty fields!';
    }
  });
});