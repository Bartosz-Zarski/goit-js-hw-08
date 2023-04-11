import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const pEl = document.querySelector('p');
const textEl = document.querySelector('textarea');

function addInputToLocalStorage() {
  const email = inputEl.value;
  const message = textEl.value;
  const feedback = { email, message };
  localStorage.setItem('feedback-form-state', JSON.stringify(feedback));
}

const throttledInputHandler = _.throttle(addInputToLocalStorage, 500)

formEl.addEventListener('input', throttledInputHandler);

window.addEventListener('load', function () {
  if (this.localStorage.getItem('feedback-form-state')) {
    const retrieveFeedback = JSON.parse(
      localStorage.getItem('feedback-form-state')
    );

    if (retrieveFeedback) {
      inputEl.value = retrieveFeedback.email;
      textEl.value = retrieveFeedback.message;
    } else {
      inputEl.value = "";
      textEl.value = ""
    }
  }
});

function removeFromStorage() {
  event.preventDefault()
  console.log(localStorage.getItem('feedback-form-state'))
  localStorage.removeItem('feedback-form-state');
}

formEl.addEventListener('submit', removeFromStorage)