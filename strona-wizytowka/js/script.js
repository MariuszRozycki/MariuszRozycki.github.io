$(document).ready(function () {
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

  const createAppointment = (appointment) => {
    console.log(appointment);

    const appointmentMessage = document.querySelector('.appointment-message');

    fetch('https://akademia108.pl/api/ajax/post-appointment.php', {
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
        appointmentMessage.innerText = `Dziękujemy ${resJSON.appointment.name}. Zostałeś zapisany!`;
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
      appointmentMessage.innerText = 'Wypełnij wymagane pole!';
    }
  });
});