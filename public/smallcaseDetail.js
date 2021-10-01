function closeModal() {
    const modalOverlay = document.querySelector('.modal-overlay');
    modalOverlay.remove();
}

loginBtnElement = document.querySelector(".login-p");

const renderModal = (product) => {
    if (loginBtnElement.textContent === "Login") {
        window.location.pathname = "/login";
        return;
    } 
    let totalPrice = product.minAmount;
    const rootElement = document.querySelector(".root");

    const modalOverlay = document.createElement('div');
    modalOverlay.setAttribute('class', 'modal-overlay');

    const modalContainer = document.createElement('div');
    modalContainer.setAttribute('class', 'modal-container');

    const topRowEl = document.createElement("div");
    topRowEl.className = "top-row";

    const imageEl = document.createElement("img");
    imageEl.src = product.img;

    const nameEl = document.createElement("p");
    nameEl.textContent = `Investing in ${product.title}`;

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

    const paymentBtnElement = document.createElement("button");
    paymentBtnElement.textContent = "Invest Now";
    paymentBtnElement.className = "payment-section-btn-modal";

    paymentBtnElement.addEventListener("click", () => {
        console.log("clicked");
        fetch("/api/add-orders", {
            method: "post",
            body: JSON.stringify({
                "id": product._id
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(res => {
            if (res.error) {
                alert("already invested")
            } else {
                alert("success");
            }
        })
    })

    modalContainer.appendChild(topRowEl);
    modalContainer.appendChild(midRowEl);
    modalContainer.appendChild(amountBoxEl);
    modalContainer.appendChild(incrementBtnsEl);
    modalContainer.appendChild(paymentBtnElement);

    modalOverlay.appendChild(modalContainer);

    rootElement.appendChild(modalOverlay);

    function incrementAmount(price) {
        return function () {
            const amountBoxEl = document.querySelector(".amount-box");
            const minimumAmountElement = document.querySelector(".minimum-amt");

            totalPrice += price;

            amountBoxEl.textContent = `₹ ${totalPrice}`;
            minimumAmountElement.textContent = `Min. Investment amount : ₹ ${totalPrice}`
        }
    }
}