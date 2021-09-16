const inputinho = document.querySelector(".inputinho");
const inputs = document.querySelectorAll("[placeholder]");

const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

firstName.setCustomValidity("First name cannot be empty");
lastName.setCustomValidity("Last name cannot be empty");
email.setCustomValidity("Looks like this is not an email");
password.setCustomValidity("Password cannot be empty");

function handleForm(event) {
  event.preventDefault();
  console.log(inputs);
  inputs.forEach((input) => {
    if (!input.checkValidity()) {
      console.log("oi");
      input.previousElementSibling.classList.add("error");
      input.nextElementSibling.classList.add("active");

      input.nextElementSibling.innerHTML = input.validationMessage;
    } else {
      input.previousElementSibling.classList.remove("error");
      input.nextElementSibling.classList.remove("active");
    }
  });
}

inputinho.addEventListener("click", handleForm);
