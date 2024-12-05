currentUser = JSON.parse(localStorage.getItem("currentUser"));

document.querySelector("h1").innerHTML = `Hello ${currentUser.name}`;
