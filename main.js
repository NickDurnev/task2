import { hello } from "unpkg";

console.log(hello("World"));

const refs = {
  form: document.querySelector("form"),
  showBtn: document.querySelector('button[data-action="show"]'),
  passwordInput: document.querySelector('input[name="password"]'),
};

refs.form.addEventListener("submit", (e) => {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;
  console.log("email", email.value, "password", password.value);
  e.currentTarget.reset();
});

refs.showBtn.addEventListener("click", () => {
  const input = refs.passwordInput;
  input.getAttribute("type") === "password"
    ? input.setAttribute("type", "text")
    : input.setAttribute("type", "password");
});
