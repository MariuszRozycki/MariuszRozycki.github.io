const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('.clear');
const del = document.querySelector('.delete');
const equal = document.querySelector('.equal');
const resultBefore = document.querySelector('.result-before');
const resultActually = document.querySelector('.result-actually');

console.log(numbers);
console.log(operators);
console.log(clear);
console.log(del);
console.log(equal);
console.log(resultBefore);
console.log(resultActually);

let actionBefore = '';
let actionActually = '';
let action = undefined;

const calculate = () => {
  let calculateAction;
  if (!actionBefore || !actionActually) {
    return;
  }

  const before = parseFloat(actionBefore);
  const actually = parseFloat(actionActually);

  if (isNaN(before) || isNaN(actually)) {
    return;
  }

  switch (action) {
    case '+':
      action = before + actually;
      break;

    case '-':
      action = before - actually;
      break;

    case '×':
      action = before * actually;
      break;

    case '÷':
      if (actually === 0) {
        clearResult();
        return alert('Nie dziel przez zero!');
      }
      action = before / actually;
      break;

    case '√':
      action = Math.pow(before, 1 / actually);
      break;

    case '%':
      action = before / 100 * actually;
      break;

    case '^':
      action = Math.pow(before, actually);
      break;

    case 'log':
      action = Math.log(before) / Math.log(actually);
      break;

    default:
      return;
  }

  actionActually = action;
  action = undefined;
  actionBefore = '';

}

const choseAction = (operator) => {
  if (actionActually === '') {
    return;
  }
  if (actionBefore !== '') {
    const before = resultBefore.innerText;
    if (actionActually.toString() === '0' && before[before.length - 1] === '÷') {
      clearResult();
      return;
    }
    calculate();
  }
  action = operator;
  actionBefore = actionActually;
  actionActually = '';
}

const updateResult = () => {
  resultActually.innerText = actionActually;
  if (action != null) {
    resultBefore.innerText = actionBefore + action;
  } else {
    resultBefore.innerText = '';
  }

}

const addNumber = (number) => {
  if (number === '•') {
    if (actionActually.includes('.')) {
      return;
    }
    number = '.';
  }
  actionActually = actionActually.toString() + number.toString();

}

const removeNumber = () => {
  actionActually = actionActually.toString().slice(0, -1);
  console.log(actionActually);
}

const clearResult = () => {
  actionBefore = '';
  actionActually = '';
  action = undefined;
}


numbers.forEach((number) => {
  number.addEventListener('click', () => {
    addNumber(number.innerText);
    updateResult();
  });
});

del.addEventListener('click', () => {
  removeNumber();
  updateResult();
});

operators.forEach((operator) => {
  operator.addEventListener('click', () => {
    choseAction(operator.innerText);
    updateResult();
  });
});

equal.addEventListener('click', () => {
  calculate();
  updateResult();
});

clear.addEventListener('click', () => {
  clearResult();
  updateResult();
});

