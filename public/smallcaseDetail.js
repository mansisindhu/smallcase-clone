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
                    const modalContainer = document.querySelector(".modal-container");
                    modalContainer.innerHTML = "";

                    const topRowEl = document.createElement("div");
                    topRowEl.className = "top-row";

                    const imageEl = document.createElement("img");
                    imageEl.src = product.img;

                    const nameEl = document.createElement("p");
                    nameEl.textContent = `Invested in ${product.title}`;

                    const closeButton = document.createElement('p');
                    closeButton.className = "close-modal";
                    closeButton.textContent = 'X';

                    closeButton.addEventListener('click', closeModal);

                    topRowEl.appendChild(imageEl);
                    topRowEl.appendChild(nameEl);
                    topRowEl.appendChild(closeButton);

                    const successfullMessage = document.createElement("h2");
                    successfullMessage.textContent = "You have already invested in this smallcase!";


                    const goToOrderPageBtn = document.createElement("button");
                    goToOrderPageBtn.textContent = "Invest More";
                    goToOrderPageBtn.className = "gotoOrders-btn";

                    goToOrderPageBtn.addEventListener("click", function () {
                        window.location.pathname = "/discover/all";
                    })

                    modalContainer.appendChild(topRowEl);
                    modalContainer.appendChild(successfullMessage);
                    modalContainer.appendChild(goToOrderPageBtn);
                } else {
                    const modalContainer = document.querySelector(".modal-container");
                    modalContainer.innerHTML = "";

                    const topRowEl = document.createElement("div");
                    topRowEl.className = "top-row";

                    const imageEl = document.createElement("img");
                    imageEl.src = product.img;

                    const nameEl = document.createElement("p");
                    nameEl.textContent = `Invested in ${product.title}`;

                    const closeButton = document.createElement('p');
                    closeButton.className = "close-modal";
                    closeButton.textContent = 'X';

                    closeButton.addEventListener('click', closeModal);

                    topRowEl.appendChild(imageEl);
                    topRowEl.appendChild(nameEl);
                    topRowEl.appendChild(closeButton);

                    const successfullMessage = document.createElement("h2");
                    successfullMessage.textContent = "Hey! Your order is successful. Thankyou for investing.";


                    const goToOrderPageBtn = document.createElement("button");
                    goToOrderPageBtn.textContent = "Go to your orders";
                    goToOrderPageBtn.className = "gotoOrders-btn";

                    goToOrderPageBtn.addEventListener("click", function () {
                        window.location.pathname = "/orders";
                    })

                    modalContainer.appendChild(topRowEl);
                    modalContainer.appendChild(successfullMessage);
                    modalContainer.appendChild(goToOrderPageBtn);
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

const renderMethodologyModal = () => {
    const rootElement = document.querySelector(".root");

    const modalOverlay = document.createElement('div');
    modalOverlay.setAttribute('class', 'modal-overlay');

    modalOverlay.innerHTML = `
    <div class="modal-container-method">
        <div id="heading">
            <div>Methodology</div>
            <div onclick="closeModal()" id="plus">+</div>
        </div>
        <div id="content_wrapper">
            <div class="flex-inner-content">
                <div class="img-cont">
                    <img src="https://assets.smallcase.com/images/methodology-icons/universe.svg" />
                </div>
                <div class="text-cont">
                    <h2 class="subheading">Defining the universe</h2>
                    <div class="detail-text">All publicly traded ETFs on the National Stock Exchange of India
                        are
                        included in the universe</div>
                </div>
            </div>
            <div class="flex-inner-content">
                <div class="img-cont">
                    <img src="https://assets.smallcase.com/images/methodology-icons/research.svg" />
                </div>
                <div class="text-cont">
                    <h2 class="subheading">Research</h2>
                    <div class="detail-text">Windmill Capital studies research papers and documents various
                        asset
                        allocation algorithms & strategies. Algorithms are further developed & adapted to suit
                        the
                        Indian market conditions</div>
                </div>
            </div>
            <div class="flex-inner-content">
                <div class="img-cont">
                    <img src="https://assets.smallcase.com/images/methodology-icons/backTesting.svg" />
                </div>
                <div class="text-cont">
                    <h2 class="subheading">Historical back-testing</h2>
                    <div class="detail-text">All ETF-based asset allocation strategies are checked for
                        historical
                        outperformance over a minimum of 10 year period. Only consistently outperforming asset
                        allocation models are selected</div>
                </div>
            </div>
            <div class="flex-inner-content">
                <div class="img-cont"><img
                        src="https://assets.smallcase.com/images/methodology-icons/stockScreening.svg" /></div>
                <div class="text-cont">
                    <h2 class="subheading">ETF Screening</h2>
                    <div id="list_text">
                        <ul>
                            <li>Proprietary liquidity filters are applied to select ETFs that are liquid</li>
                            <li>Selected ETFs are divided into three categories : Equity, Gold, Fixed Income
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="flex-inner-content">
                <div class="img-cont"><img
                        src="https://assets.smallcase.com/images/methodology-icons/weighting.svg" />
                </div>
                <div class="text-cont">
                    <h2 class="subheading">Asset Allocation</h2>
                    <div class="detail-text">The final screened ETFs are then weighted according to the selected
                        asset
                        allocation algorithm</div>
                </div>
            </div>
            <div class="flex-inner-content">
                <div class="img-cont"><img
                        src="https://assets.smallcase.com/images/methodology-icons/rebalance.svg" />
                </div>
                <div class="text-cont">
                    <h2 class="subheading">Rebalance</h2>
                    <div class="detail-text">This smallcase has a quarterly rebalance schedule. Once every
                        quarter, the
                        research team reviews this smallcase and realign the weights with the selected asset
                        allocation
                        strategy for the next quarter.</div>
                </div>
            </div>
        </div>
    </div>`

    rootElement.appendChild(modalOverlay)
}