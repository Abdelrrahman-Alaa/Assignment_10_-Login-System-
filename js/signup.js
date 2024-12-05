var signupName = document.querySelector("#signupName");
var signupEmail = document.querySelector("#signupEmail");
var signupPassword = document.querySelector("#signupPassword");
var success = document.querySelector("#exist");
var signup = document.querySelector("#signup");

signupName.addEventListener("input", function (e) {
  validateForm(e.target);
});
signupEmail.addEventListener("input", function (e) {
  validateForm(e.target);
});
signupPassword.addEventListener("input", function (e) {
  validateForm(e.target);
});

signup.addEventListener("click", function () {
  if (checkValidity()) {
    var isEmailExist = users.some((u) => u.email === signupEmail.value);

    if (isEmailExist) {
      alert("Email already exists!");
      return;
    }

    var user = {
      name: signupName.value,
      email: signupEmail.value,
      password: signupPassword.value,
    };

    users.push(user);
    localStorage.setItem("Users", JSON.stringify(users));
    removeValidity();
    clearForm();
    success.classList.remove("d-none");
  }
});
