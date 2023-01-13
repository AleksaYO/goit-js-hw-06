const refs = {
  form: document.querySelector(".login-form"),
  inputEmail: document.querySelector('[type="email"]'),
  inputPassword: document.querySelector('[type="password"]'),
  btnSubmit: document.querySelector('[type="submit"]'),
};

refs.form.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (refs.inputEmail.value === "" || refs.inputPassword.value === "") {
    alert("Все поля должны быть заполнены!");
  } else if (
    refs.inputEmail.value === email.value ||
    refs.inputPassword.value === password.value
  ) {
    console.log(`Login: ${email.value}, Password: ${password.value}`);
  }
  event.currentTarget.reset();
}
