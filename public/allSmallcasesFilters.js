renderSmallcases = (arr) => {
    smallcaseDiv.innerHTML = "";

    arr.forEach(function (product) {
        const productDiv = document.createElement("div");
        productDiv.className = "product";

        const anchorTag = document.createElement("a");
        anchorTag.href = `/smallcase/${product.id}`;

        const productmainInfoDiv = document.createElement("div");
        productmainInfoDiv.className = "product-main-info";

        const imageElement = document.createElement("img");
        imageElement.src = product.img;

        const nameElement = document.createElement("p");
        nameElement.textContent = product.title;

        productmainInfoDiv.appendChild(imageElement);
        productmainInfoDiv.appendChild(nameElement);


        const shortInfoElement = document.createElement("p");
        shortInfoElement.className = "product-short-info";
        shortInfoElement.textContent = product.shortDescription;


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
        cagrElement.textContent = `${product.cagYear}Y CAGR`;

        const cagrRateElement = document.createElement("p");
        cagrRateElement.textContent = `${product.cagRate}%`;

        if (product.cagRate > 0) {
            cagrRateElement.style.color = "#19af55";
        } else {
            cagrRateElement.style.color = "red";
        }

        statDiv2.appendChild(cagrElement);
        statDiv2.appendChild(cagrRateElement);

        const statDiv3 = document.createElement("div");
        statDiv3.className = "stat-3";

        const volatilityElement = document.createElement("p");
        volatilityElement.textContent = `${product.volatility} Volatility`;

        statsDiv.appendChild(statDiv1);
        statsDiv.appendChild(statDiv2);
        statsDiv.appendChild(statDiv3);

        statDiv3.appendChild(volatilityElement);

        productDiv.appendChild(productmainInfoDiv);
        productDiv.appendChild(shortInfoElement);
        productDiv.appendChild(statsDiv);

        anchorTag.appendChild(productDiv);
        smallcaseDiv.appendChild(anchorTag);

    })
}

const value = {};
const serverData = JSON.parse(document.getElementById('__EJS_DATA__').innerText);

document.querySelectorAll('input[name="investment-amount"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        value.under = e.target.value;
        
        const url = `/api/data?${new URLSearchParams(value).toString()}`;
        fetch(url).then(res => res.json()).then(res => renderSmallcases(res));
    })
});

document.querySelectorAll('input[name="sorting-filters"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        value.sortBy = e.target.value;
        
        const url = `/api/data?${new URLSearchParams(value).toString()}`;
        fetch(url).then(res => res.json()).then(res => renderSmallcases(res));
    })
});

let checkboxesArr = [];

document.querySelectorAll('input[name="volatility"]').forEach(radio => {
    radio.addEventListener('click', (e) => {
        if (e.target.checked && !checkboxesArr.includes(e.target.value)) {
            checkboxesArr.push(e.target.value)
        } else {
            checkboxesArr = checkboxesArr.filter(el => el !== e.target.value);
        }

        value.volatility = checkboxesArr.join(",")
        const url = `/api/data?${new URLSearchParams(value).toString()}`;

        console.log({url, value});
        fetch(url).then(res => res.json()).then(res => renderSmallcases(res));
    })
});

const smallcaseDiv = document.querySelector(".smallcases");

renderSmallcases(serverData);
