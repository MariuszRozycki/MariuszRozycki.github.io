document.getElementsByClassName('mobile-hamburger')[0].addEventListener('click', function () {
  document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
});
document.getElementsByClassName('mobile-close')[0].addEventListener('click', function () {
  document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
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
    service: document.getElementById('appointment-service').value,
    phone: document.getElementById('appointment-phone').value,
    date: document.getElementById('appointment-date').value,
    time: document.getElementById('appointment-time').value,
    message: document.getElementById('appointment-message').value
  }


  for (let i = 0; i < formFields.length; i++) {
    console.log(formFields[i].value);
    if (formFields[i].value === '') {
      ++fieldsErrors;
      formFields[i].classList.add('error');
    } else {
      formFields[i].classList.remove('error');
    }
  }

  if (fieldsErrors === 0) {
    createAppointment(appointment);
  } else {
    appointmentMessage.classList.add('error');
    appointmentMessage.innerText = 'Wypełnij wymagane pole!';
  }
});