const throttle = require('lodash.throttle');

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
}

refs.form.addEventListener('input', throttle(onSetData, 500))
refs.form.addEventListener('submit', onSubmitForm)

if (localStorage.getItem("feedback-form-state")) {
    refs.input.value = JSON.parse(localStorage.getItem("feedback-form-state")).email
    refs.textarea.value = JSON.parse(localStorage.getItem("feedback-form-state")).message
}
    
function onSetData(event) {
      let inputData = {
        email: event.target.form[0].value,
        message: event.target.form[1].value,
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(inputData));
}

function onSubmitForm(event) {
    event.preventDefault();

    refs.form.reset();
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
    localStorage.removeItem("feedback-form-state");
}
