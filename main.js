import { hello } from "unpkg";

console.log(hello("World"));

const refs = {
  title: document.querySelector("#title"),
  form: document.querySelector("form"),
  showBtn: document.querySelector('button[data-action="show"]'),
  submitBtn: document.querySelector('button[data-action="submit"]'),
  emailInput: document.querySelector('input[name="email"]'),
  passwordInput: document.querySelector('input[name="password"]'),
};

refs.form.addEventListener("submit", (e) => {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;
  console.log("email", email.value, "password", password.value);
  e.currentTarget.reset();
  refs.submitBtn.classList.remove("failed-button", "success-button");
});

refs.emailInput.addEventListener("input", () =>
  isValidInput(refs.emailInput, "Oops!")
);

refs.passwordInput.addEventListener("input", () =>
  isValidInput(refs.passwordInput, "Wrong Password")
);

refs.showBtn.addEventListener("click", () => {
  const input = refs.passwordInput;
  input.getAttribute("type") === "password"
    ? input.setAttribute("type", "text")
    : input.setAttribute("type", "password");
});

const isValidInput = (ref, error) => {
  if (!ref.value) {
    refs.title.textContent = "Welcome";
    refs.submitBtn.classList.remove("failed-button", "success-button");
    refs.submitBtn.textContent = "Login";
    return;
  }
  if (!ref.matches(":valid")) {
    refs.title.textContent = error;
    refs.submitBtn.classList.remove("success-button");
    refs.submitBtn.classList.add("failed-button");
    refs.submitBtn.textContent = "Retry";
    return;
  }
  refs.title.textContent = "Welcome";
  refs.submitBtn.classList.remove("failed-button", "success-button");
  refs.submitBtn.textContent = "Login";
  if (
    refs.emailInput.matches(":valid") &&
    refs.passwordInput.matches(":valid")
  ) {
    refs.submitBtn.classList.add("success-button");
    refs.submitBtn.textContent = "Login";
  }
};
