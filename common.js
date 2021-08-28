
// Login and logout functionality

const loginStatus = window.localStorage.getItem("loginStatus");

const loginBtnEl = document.querySelector(".login-p");

if (loginStatus !== "") {
    loginBtnEl.textContent = "Logout";
}


loginBtnEl.addEventListener("click", function() {
    if (loginStatus !== "") {
        alert("You have successfully logged out.")
        loginBtnEl.href = "";
        window.localStorage.setItem("loginStatus", "");
    }
})