const form = document.querySelector(".form");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");


function handleForm(e) {
  const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  e.preventDefault();
  if(firstName.value == "") {
    errorFunc(firstName, "First name cannot be empty");
  } else {
    sucessFunc(firstName);
  }

  if(lastName.value == "") {
    errorFunc(lastName, "Last name cannot be empty");
  } else {
    sucessFunc(lastName);
  }


  if(email.value == "") {
    errorFunc(email, "Email cannot be empty");
  } else if(!email.value.match(pattern)) {
    errorFunc(email, "Looks like not an email");
  } else {
    sucessFunc(email);
  }


  if(password.value == "") {
    errorFunc(password, "Password cannot be empty");
  } else {
    sucessFunc(password);
  }

}

function errorFunc(element, message) {
  element.previousElementSibling.classList.add("error");
  element.nextElementSibling.classList.add("active");
  element.nextElementSibling.innerHTML = message;
}

function sucessFunc(element) {
  element.previousElementSibling.classList.remove("error");
  element.nextElementSibling.classList.remove("active");
}

form.addEventListener("submit", handleForm);
