import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');


form.addEventListener('input', throttle(onFormInput, 200));
form.addEventListener('submit', onFormSubmit);
window.addEventListener('DOMContentLoaded', editFormFields);



function onFormInput() {
    const formData = {
        email: emailInput.value,
        message: messageInput.value
      };
      localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}


function onFormSubmit(event) {
  event.preventDefault();
  const formData = {
    email: emailInput.value,
    message: messageInput.value
  };
  console.log(formData);
  localStorage.removeItem("feedback-form-state");
  form.reset();
}


function editFormFields() {
    const savedData = localStorage.getItem("feedback-form-state");
    if (savedData) {
      const formData = JSON.parse(savedData);
      emailInput.value = formData.email;
      messageInput.value = formData.message;
    }
  }