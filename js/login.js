var signinEmail = document.querySelector("#signinEmail");
var signinPassword = document.querySelector("#signinPassword");
var incorrect = document.querySelector("#incorrect");
var login = document.querySelector("#login");
var users = [];

if (localStorage.getItem("Users") != null) {
  users = JSON.parse(localStorage.getItem("Users"));
}
login.addEventListener("click", function () {
  if (signinEmail.value.trim() === "" || signinPassword.value.trim() === "") {
    alert("Please fill in all fields.");
    return;
  }

  var user = users.find(
    (u) => u.email === signinEmail.value && u.password === signinPassword.value
  );

  console.log();
  

  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
    window.location.href = "./pages/dashboard.html";
  } else {
    // alert("Invalid email or password.");
    incorrect.classList.remove("d-none");
  }
});
