
// Login and logout functionality

const loginStatus = window.localStorage.getItem("loginStatus");

const loginBtnEl = document.querySelector(".login-p");

if (loginStatus !== "") {
    loginBtnEl.textContent = "Logout";
}


loginBtnEl.addEventListener("click", function() {
    if (loginStatus !== "") {
        loginBtnEl.href = "";
        window.localStorage.setItem("loginStatus", "");
    }
})



// Order page rendering logic
function renderOrders() {
    if (loginStatus !== "") {
        window.location.pathname = "orderPage/order.html";
    } else {
        window.location.pathname = "loginSignupPages/login_page.html";
    }
}
