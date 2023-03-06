import { hello } from "unpkg";

console.log(hello("World"));

const SUCCESS_BTN_STYLE = "success-button";
const FAILED_BTN_STYLE = "failed-button";
const STANDART_BTN_TEXT = "login";
const FAILED_BTN_TEXT = "Retry";

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
  refs.submitBtn.classList.remove(FAILED_BTN_STYLE, SUCCESS_BTN_STYLE);
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
    refs.submitBtn.classList.remove(FAILED_BTN_STYLE, SUCCESS_BTN_STYLE);
    refs.submitBtn.textContent = STANDART_BTN_TEXT;
    return;
  }
  if (!ref.matches(":valid")) {
    refs.title.textContent = error;
    refs.submitBtn.classList.remove(SUCCESS_BTN_STYLE);
    refs.submitBtn.classList.add(FAILED_BTN_STYLE);
    refs.submitBtn.textContent = FAILED_BTN_TEXT;
    return;
  }
  refs.title.textContent = "Welcome";
  refs.submitBtn.classList.remove(FAILED_BTN_STYLE, SUCCESS_BTN_STYLE);
  refs.submitBtn.textContent = STANDART_BTN_TEXT;
  if (
    refs.emailInput.matches(":valid") &&
    refs.passwordInput.matches(":valid")
  ) {
    refs.submitBtn.classList.add(SUCCESS_BTN_STYLE);
    refs.submitBtn.textContent = STANDART_BTN_TEXT;
  }
};
