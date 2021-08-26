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


    const aboutInfoEl =  document.createElement("div");
    aboutInfoEl.className = "about-info";

    const nameElement =  document.createElement("p");
    nameElement.textContent = product.name;
    nameElement.className = "product-name";

    const shortInfoElement =  document.createElement("p");
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
        cagrRateElement.style.color = "green";
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

    buttonEl.addEventListener("click", function() {
        renderModal();
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
    closeButton.className  = "close-modal";
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

    const fiveKButton = document.createElement("button");
    fiveKButton.textContent = "+5000";

    const tenKButton = document.createElement("button");
    tenKButton.textContent = "+10000";


    incrementBtnsEl.appendChild(oneKButton);
    incrementBtnsEl.appendChild(fiveKButton);
    incrementBtnsEl.appendChild(tenKButton);


    const paymentBtnElement = document.createElement("button");
    paymentBtnElement.textContent = "Invest Now";
    paymentBtnElement.className = "payment-section-btn-modal";

    paymentBtnElement.addEventListener("click", setToLocalStorage(product));


    modalContainer.appendChild(topRowEl);
    modalContainer.appendChild(midRowEl);
    modalContainer.appendChild(amountBoxEl);
    modalContainer.appendChild(incrementBtnsEl);
    modalContainer.appendChild(paymentBtnElement);


    modalOverlay.appendChild(modalContainer);

    rootElement.appendChild(modalOverlay);
}



function setToLocalStorage(product) {
    return function() {
        closeModal();
        const orderData = JSON.parse(window.localStorage.getItem("orders")) || [];
        orderData.push(product);
        const orderDataJson = JSON.stringify(orderData);
        window.localStorage.setItem("orders", orderDataJson);
    }
}



[
    {
        name: "",
        date: "",
        status: "",
        batch: "",
        image: "",
    }
]