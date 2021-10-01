const loginBtnElement = document.querySelector(".login-p");

loginBtnElement.addEventListener("click", async () => {
    if (loginBtnElement.textContent === "Login") {
        loginBtnElement.href = "/login";
    } else if (loginBtnElement.textContent === "Logout") {
        loginBtnElement.textContent = "Login";
        await fetch("/api/logout");
    }
})
