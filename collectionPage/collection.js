const smallcaseDetail = {
    name: "Top 250 Stocks",
    minAmount: 1176,
    shortDescription: "Stability of large caps combined with growth potential of mid caps",
    longDescription1: "Blue chip companies have well established business models and hence their  stock prices tend to be stable. Adding blue chip stocks to the portfolio increases stability of the portfolio. Another positive aspect of investing in blue chips is the possibility of receiving high dividends.",
    listElement1: "The key to a well diversified portfolio is to ensure an appropriate combination of large and mid cap stocks.",
    listElement2: "This smallcase provides exposure to top 250 companies by market capitalization. Weights of the smallcase are adjusted to maximize the return potential while minimizing risk of the portfolio.",
    longDescription2: "Mid cap companies are still in the middle of their growth curve and are expected to exponentially grow their sales and profits. As their growth potential is high, the possibility of their stock price increasing multi fold also tends to be high.",
    votalityType: "Low Volatility",
    image: "https://assets.smallcase.com/images/smallcases/160/SCET_0015.png",
    cagr: 15.96,
    cagrYear: "6M Returns"
}


const smallcaseDivElement = document.querySelector(".top-box-2");

const smallcaseDivResponsiveElement = document.querySelector(".top-box-responsive");

smallcaseDivElement.addEventListener("click", function () {
    const dataToBeSent = JSON.stringify(smallcaseDetail);
    window.localStorage.setItem("smallcase-detail", dataToBeSent);
    window.location.pathname = "smallcaseDetail/smallcaseDetail.html";
})


smallcaseDivResponsiveElement.addEventListener("click", function () {
    const dataToBeSent = JSON.stringify(smallcaseDetail);
    window.localStorage.setItem("smallcase-detail", dataToBeSent);
    window.location.pathname = "smallcaseDetail/smallcaseDetail.html";
})




// Login and logout functionality

const loginStatus = window.localStorage.getItem("loginStatus");

const loginBtnEl = document.querySelector(".login-p");

if (loginStatus === "true") {
    loginBtnEl.textContent = "Logout";
}


loginBtnEl.addEventListener("click", function() {
    if (loginStatus === "true") {
        alert("You have successfully logged out.")
        loginBtnEl.href = "";
        window.localStorage.setItem("loginStatus", "false");
    }
})



// Order page rendering logic
function renderOrders() {
    if (loginStatus === "true") {
        window.location.pathname = "orderPage/order.html";
    } else {
        window.location.pathname = "loginSignupPages/login_page.html";
    }
}
