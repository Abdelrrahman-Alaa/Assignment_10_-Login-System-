var users = [];

if (localStorage.getItem("Users") != null) {
  users = JSON.parse(localStorage.getItem("Users"));
}

function clearForm() {
  signupName.value = "";
  signupEmail.value = "";
  signupPassword.value = "";
}

function validateForm(element) {
  var regex = {
    signupName: /^[a-zA-Z0-9]{3,}$/,
    signupEmail: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    signupPassword: /^.{3,}$/,
  };

  if (element.value.trim() === "") {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
    return;
  }

  if (regex[element.id].test(element.value)) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
  } else {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
  }
}

function checkValidity() {
  if (
    signupName.classList.contains("is-valid") &&
    signupEmail.classList.contains("is-valid") &&
    signupPassword.classList.contains("is-valid")
  ) {
    return true;
  } else {
    return false;
  }
}

function removeValidity() {
  signupName.classList.remove("is-valid");
  signupEmail.classList.remove("is-valid");
  signupPassword.classList.remove("is-valid");
}

