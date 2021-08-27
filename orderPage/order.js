// Orders data

const data = JSON.parse(window.localStorage.getItem("orders"));

const reverseDataArray = data.reverse();
const ordersDivEl = document.querySelector(".orders");

function renderOrders() {
    reverseDataArray.forEach(function(product) {
        
        const orderDivEl = document.createElement("div");
        orderDivEl.className = "order";

        const topSectionDivEl = document.createElement("div");
        topSectionDivEl.className = "top-section";

        const topLeftDivEl = document.createElement("div");
        topLeftDivEl.className = "top-left";

        const imageEl = document.createElement("img");
        imageEl.src = product.image;

        const aboutIndoDivEl = document.createElement("div");
        aboutIndoDivEl.className = "about-info";

        const nameEl = document.createElement("p");
        nameEl.textContent = product.name;

        const dateEl = document.createElement("p");
        dateEl.textContent = product.date;

        aboutIndoDivEl.appendChild(nameEl);
        aboutIndoDivEl.appendChild(dateEl);

        topLeftDivEl.appendChild(imageEl);
        topLeftDivEl.appendChild(aboutIndoDivEl);

        const topRightDivEl = document.createElement("div");
        topRightDivEl.className = "top-right";

        topRightDivEl.textContent = "Track Performance";

        topSectionDivEl.appendChild(topLeftDivEl);
        topSectionDivEl.appendChild(topRightDivEl);

        const statsDiv = document.createElement("div");
        statsDiv.className = "stats";
    
        const statDiv1 = document.createElement("div");
        statDiv1.className = "stat-1";
    
        const batchEl = document.createElement("p");
        batchEl.textContent = "Batch";
    
        const batchInfoEl = document.createElement("p");
    
        batchInfoEl.textContent = product.batch;
    
        statDiv1.appendChild(batchEl);
        statDiv1.appendChild(batchInfoEl);
    
        const statDiv2 = document.createElement("div");
        statDiv2.className = "stat-2";
    
        const placedOnEl = document.createElement("p");
        placedOnEl.textContent = "Placed on";
    
        const dateElement = document.createElement("p");
        dateElement.textContent = product.date;
    
        statDiv2.appendChild(placedOnEl);
        statDiv2.appendChild(dateElement);
    
        const statDiv3 = document.createElement("div");
        statDiv3.className = "stat-3";
    
        const statusEl = document.createElement("p");
        statusEl.textContent = "Status";

        const filledEl = document.createElement("p");
        filledEl.textContent = product.status;
    
        statDiv3.appendChild(statusEl);
        statDiv3.appendChild(filledEl);


        statsDiv.appendChild(statDiv1);
        statsDiv.appendChild(statDiv2);
        statsDiv.appendChild(statDiv3);


        orderDivEl.appendChild(topSectionDivEl);
        orderDivEl.appendChild(statsDiv);

        ordersDivEl.appendChild(orderDivEl);

    })
}

renderOrders();




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
        window.location.pathname = "landingPage/MainHtml.html";
    }
})