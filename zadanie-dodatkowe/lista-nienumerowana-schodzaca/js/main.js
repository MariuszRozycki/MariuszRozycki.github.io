const button = document.querySelector('button');
button.addEventListener('click', function (event) {
  event.preventDefault();
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  li.textContent = 'Item';
  ul.appendChild(li);
  let allLi = document.getElementsByTagName('li');
  console.log(allLi);
  for (let i = 0; i < allLi.length; i++) {
    allLi[i].style.backgroundColor = 'red';
    allLi[i].style.marginLeft = 10 * i + 'px';
  }
});