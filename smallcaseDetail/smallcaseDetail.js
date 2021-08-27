const product = JSON.parse(window.localStorage.getItem("smallcase-detail"));

const mainDivElement = document.querySelector(".main");


function renderData() {
    const grayBoxEl = document.createElement("div");
    grayBoxEl.className = "gray-box";

    const topDetailBoxEl = document.createElement("div");
    topDetailBoxEl.className = "top-detail-box";

    const productMainInfo = document.createElement("div");
    productMainInfo.className = "product-main-info";

    const imageElement = document.createElement("img");
    imageElement.src = product.image;


    const aboutInfoEl = document.createElement("div");
    aboutInfoEl.className = "about-info";

    const nameElement = document.createElement("p");
    nameElement.textContent = product.name;
    nameElement.className = "product-name";

    const shortInfoElement = document.createElement("p");
    shortInfoElement.textContent = product.shortDescription;
    shortInfoElement.className = "product-short-info";

    aboutInfoEl.appendChild(nameElement);
    aboutInfoEl.appendChild(shortInfoElement);

    productMainInfo.appendChild(imageElement);
    productMainInfo.appendChild(aboutInfoEl);


    const statsDiv = document.createElement("div");
    statsDiv.className = "stats";

    const statDiv1 = document.createElement("div");
    statDiv1.className = "stat-1";

    const minAmountElement = document.createElement("p");
    minAmountElement.textContent = "Min Amount";

    const amountElement = document.createElement("p");

    amountElement.textContent = `₹ ${product.minAmount}`;

    statDiv1.appendChild(minAmountElement);
    statDiv1.appendChild(amountElement);

    const statDiv2 = document.createElement("div");
    statDiv2.className = "stat-2";

    const cagrElement = document.createElement("p");
    cagrElement.textContent = product.cagrYear;

    const cagrRateElement = document.createElement("p");
    cagrRateElement.textContent = `${product.cagr}%`;

    if (product.cagr > 0) {
        cagrRateElement.style.color = "#19af55";
    } else {
        cagrRateElement.style.color = "red";
    }

    statDiv2.appendChild(cagrElement);
    statDiv2.appendChild(cagrRateElement);

    const statDiv3 = document.createElement("div");
    statDiv3.className = "stat-3";

    const volatilityElement = document.createElement("p");
    volatilityElement.textContent = product.votalityType;

    statDiv3.appendChild(volatilityElement);

    statsDiv.appendChild(statDiv1);
    statsDiv.appendChild(statDiv2);
    statsDiv.appendChild(statDiv3);

    topDetailBoxEl.appendChild(productMainInfo);
    topDetailBoxEl.appendChild(statsDiv);

    grayBoxEl.appendChild(topDetailBoxEl);

    mainDivElement.appendChild(grayBoxEl);


    const bottomDetailBoxEl = document.createElement("div");
    bottomDetailBoxEl.className = "bottom-detail-box";

    const longDescriptionDivEl = document.createElement("div");
    longDescriptionDivEl.className = "long-description";

    const overviewEl = document.createElement("p");
    overviewEl.className = "overview";
    overviewEl.textContent = "Overview";

    const questionEl = document.createElement("p");
    questionEl.className = "question";
    questionEl.textContent = "Why should you invest in this smallcase?";

    const firstParaEl = document.createElement("p");
    firstParaEl.textContent = product.longDescription1;

    const unOrderedListEl = document.createElement("ul");
    const listItem1 = document.createElement("li");
    listItem1.textContent = product.listElement1;

    const listItem2 = document.createElement("li");
    listItem2.textContent = product.listElement2;

    unOrderedListEl.appendChild(listItem1);
    unOrderedListEl.appendChild(listItem2);

    const secondParaEl = document.createElement("p");
    secondParaEl.textContent = product.longDescription2;

    longDescriptionDivEl.appendChild(overviewEl);
    longDescriptionDivEl.appendChild(questionEl);
    longDescriptionDivEl.appendChild(firstParaEl);
    longDescriptionDivEl.appendChild(unOrderedListEl);
    longDescriptionDivEl.appendChild(secondParaEl);


    const paymentSectionDivEl = document.createElement("div");
    paymentSectionDivEl.className = "payment-section";

    const buttonEl = document.createElement("button");
    buttonEl.className = "payment-section-btn";
    buttonEl.textContent = "Invest Now";

    buttonEl.addEventListener("click", function () {

        const loginStatus = window.localStorage.getItem("loginStatus");

        const loginBtnEl = document.querySelector(".login-p");

        if (loginStatus === "true") {
            renderModal();
        } else {
            window.location.pathname = "loginSignupPages/login_page.html"
        }
        
    })

    paymentSectionDivEl.appendChild(buttonEl);

    const paymentSectioneResponsiveDivEl = document.createElement("div");
    paymentSectioneResponsiveDivEl.className = "payment-section-responsive";

    const paymentInfoDivElement = document.createElement("div");
    paymentInfoDivElement.className = "payment-info";

    const minimumAmountElement = document.createElement("p");
    minimumAmountElement.textContent = "Minimum Investment Amount";

    const amountEl = document.createElement("p");
    amountEl.textContent = `₹ ${product.minAmount}`;

    paymentInfoDivElement.appendChild(minimumAmountElement);
    paymentInfoDivElement.appendChild(amountEl);

    const buttonElement = document.createElement("button");
    buttonElement.textContent = "Invest Now";
    buttonElement.className = "payment-section-btn";

    paymentSectioneResponsiveDivEl.appendChild(paymentInfoDivElement);
    paymentSectioneResponsiveDivEl.appendChild(buttonElement);


    bottomDetailBoxEl.appendChild(longDescriptionDivEl);
    bottomDetailBoxEl.appendChild(paymentSectionDivEl);
    bottomDetailBoxEl.appendChild(paymentSectioneResponsiveDivEl);


    mainDivElement.appendChild(grayBoxEl);
    mainDivElement.appendChild(bottomDetailBoxEl);

}

renderData();

function closeModal() {
    const modalOverlay = document.querySelector('.modal-overlay');
    modalOverlay.remove();
}


let totalPrice = product.minAmount;


function incrementAmount(price) {
    return function () {
        const amountBoxEl = document.querySelector(".amount-box");
        const minimumAmountElement = document.querySelector(".minimum-amt");

        totalPrice += price;

        amountBoxEl.textContent = `₹ ${totalPrice}`;
        minimumAmountElement.textContent = `Min. Investment amount : ₹ ${totalPrice}`
    }
}



const renderModal = () => {

    const rootElement = document.querySelector(".root");

    const modalOverlay = document.createElement('div');
    modalOverlay.setAttribute('class', 'modal-overlay');

    const modalContainer = document.createElement('div');
    modalContainer.setAttribute('class', 'modal-container');

    const topRowEl = document.createElement("div");
    topRowEl.className = "top-row";

    const imageEl = document.createElement("img");
    imageEl.src = product.image;

    const nameEl = document.createElement("p");
    nameEl.textContent = `Investing in ${product.name}`;

    const closeButton = document.createElement('p');
    closeButton.className = "close-modal";
    closeButton.textContent = 'X';

    closeButton.addEventListener('click', closeModal)

    topRowEl.appendChild(imageEl);
    topRowEl.appendChild(nameEl);
    topRowEl.appendChild(closeButton);


    const midRowEl = document.createElement("div");
    midRowEl.className = "mid-row";

    const headingEl = document.createElement("h3");
    headingEl.textContent = "Confirm investment amount";

    const minimumAmountEl = document.createElement("p");
    minimumAmountEl.className = "minimum-amt";
    minimumAmountEl.textContent = `Min. Investment amount : ₹ ${product.minAmount}`

    midRowEl.appendChild(headingEl);
    midRowEl.appendChild(minimumAmountEl);

    const amountBoxEl = document.createElement("div");
    amountBoxEl.className = "amount-box";
    amountBoxEl.textContent = `₹ ${product.minAmount}`;

    const incrementBtnsEl = document.createElement("div");
    incrementBtnsEl.className = "increment-btns";

    const oneKButton = document.createElement("button");
    oneKButton.textContent = "+1000";

    oneKButton.addEventListener("click", incrementAmount(1000))

    const fiveKButton = document.createElement("button");
    fiveKButton.textContent = "+5000";

    fiveKButton.addEventListener("click", incrementAmount(5000))


    const tenKButton = document.createElement("button");
    tenKButton.textContent = "+10000";

    tenKButton.addEventListener("click", incrementAmount(10000))


    incrementBtnsEl.appendChild(oneKButton);
    incrementBtnsEl.appendChild(fiveKButton);
    incrementBtnsEl.appendChild(tenKButton);


    const paymentDiv = document.createElement("div");
    paymentDiv.className = "payment";

    const addHeadingEl = document.createElement("h3");
    addHeadingEl.textContent = "Add card details";

    const cardHolderNameInput = document.createElement("input");
    cardHolderNameInput.type = "text";
    cardHolderNameInput.placeholder = "Enter Card Holder Name";

    const cardNumberInput = document.createElement("input");
    cardNumberInput.type = "number";
    cardNumberInput.placeholder = "Enter Card Number";

    const cardCVVInput = document.createElement("input");
    cardCVVInput.type = "number";
    cardCVVInput.placeholder = "Enter CVV";

    const expirationMonthInput = document.createElement("input");
    expirationMonthInput.type = "number";
    expirationMonthInput.placeholder = "Enter Expiration Month";

    const yearInput = document.createElement("input");
    yearInput.type = "number";
    yearInput.placeholder = "Enter Year"


    paymentDiv.appendChild(addHeadingEl);
    paymentDiv.appendChild(cardHolderNameInput);
    paymentDiv.appendChild(cardNumberInput);
    paymentDiv.appendChild(cardCVVInput);
    paymentDiv.appendChild(expirationMonthInput);
    paymentDiv.appendChild(yearInput);


    const paymentBtnElement = document.createElement("button");
    paymentBtnElement.textContent = "Invest Now";
    paymentBtnElement.className = "payment-section-btn-modal";

    paymentBtnElement.addEventListener("click", setToLocalStorage(product));


    modalContainer.appendChild(topRowEl);
    modalContainer.appendChild(midRowEl);
    modalContainer.appendChild(amountBoxEl);
    modalContainer.appendChild(incrementBtnsEl);
    modalContainer.appendChild(paymentDiv);
    modalContainer.appendChild(paymentBtnElement);


    modalOverlay.appendChild(modalContainer);

    rootElement.appendChild(modalOverlay);
}



function setToLocalStorage(product) {
    return function () {

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;

        const orderData = JSON.parse(window.localStorage.getItem("orders")) || [];

        let result = true;

        orderData.forEach(function (el) {
            if (product.name === el.name) {
                result = false;
            }
        })


        if (result) {
            const productData = {
                name: product.name,
                date: today,
                status: "Filled",
                batch: "Invest",
                image: product.image,
            }


            orderData.push(productData);

            const orderDataJson = JSON.stringify(orderData);
            window.localStorage.setItem("orders", orderDataJson);


            const modalContainer = document.querySelector(".modal-container");
            modalContainer.innerHTML = "";

            const topRowEl = document.createElement("div");
            topRowEl.className = "top-row";

            const imageEl = document.createElement("img");
            imageEl.src = product.image;

            const nameEl = document.createElement("p");
            nameEl.textContent = `Invested in ${product.name}`;

            const closeButton = document.createElement('p');
            closeButton.className = "close-modal";
            closeButton.textContent = 'X';

            closeButton.addEventListener('click', closeModal)

            topRowEl.appendChild(imageEl);
            topRowEl.appendChild(nameEl);
            topRowEl.appendChild(closeButton);

            const successfullMessage = document.createElement("h2");
            successfullMessage.textContent = "Hey! Your order is successful. Thankyou for investing.";


            const goToOrderPageBtn = document.createElement("button");
            goToOrderPageBtn.textContent = "Go to your orders";
            goToOrderPageBtn.className = "gotoOrders-btn";

            goToOrderPageBtn.addEventListener("click", function () {
                window.location.pathname = "orderPage/order.html";
            })

            modalContainer.appendChild(topRowEl);
            modalContainer.appendChild(successfullMessage);
            modalContainer.appendChild(goToOrderPageBtn);
        } else {

            alert("You have alredy invested in this smallcase! Kindly choose other.");
            window.location.pathname = "allSmallcases/allSmallCases.html";

        }

    }
}



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