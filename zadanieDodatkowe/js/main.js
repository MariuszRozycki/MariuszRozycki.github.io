const button = document.querySelector('button');
const ul = document.querySelector('ul');

button.addEventListener('click', function () {
  const li = document.createElement('li');
  li.textContent = 'Item';
  ul.appendChild(li);
});

/* Nie wiem jak napisac kod js's, zeby po kliknieciu, kazdy nastepny stworzony element mial margin-left zwiekszony o 10px */