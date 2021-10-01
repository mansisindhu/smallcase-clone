const loginBtnElement = document.querySelector(".login-p");

loginBtnElement.addEventListener("click", async () => {
    if (loginBtnElement.textContent === "Login") {
        loginBtnElement.href = "/login";
    } else if (loginBtnElement.textContent === "Logout") {
        loginBtnElement.textContent = "Login";
        await fetch("/api/logout");
    }
})

const orderBtnElement = document.querySelector(".order-btn");

orderBtnElement.addEventListener("click", () => {
    if (loginBtnElement.textContent === "Login") {
        orderBtnElement.href = "/login";
    } else if (loginBtnElement.textContent === "Logout") {
        orderBtnElement.href = "/orders";
    }
})

if (window.location.pathname === "/orders") {
    document.querySelector(".order-btn").className = "active-header";
} else if (window.location.pathname === "/discover/explore" || window.location.pathname === "/discover/all") {
    document.getElementById("discover").className = "active-header";
}