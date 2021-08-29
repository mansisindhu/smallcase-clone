var acc=document.getElementsByClassName("first");
for(var i=0;i<acc.length;i++){
    acc[i].addEventListener('click',function(){
        this.classList.toggle("active");
        var demo = this.nextElementSibling;
        if(demo.style.display === "block"){
            demo.style.display = "none";
        }else{
          demo.style.display = "block";
        }
    });
}


const smallcasesData = [
    {
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
    },
    {
        name: "All Weather Investing",
        minAmount: 4417,
        shortDescription: "One investment for all market conditions. Works for everyone",
        longDescription1: "All Weather Investing is a popular strategy that ensures your investments do well in good as well as bad times. This is a long-term investment strategy that you can use to build wealth over the years to come.",
        listElement1: "This smallcase invests in 3 asset classes--equity, debt and gold",
        listElement2: "The portfolio is rebalanced periodically to generate relatively higher returns by assuming the least possible risks",
        longDescription2: "This smallcase is ideal for all types of market conditions. It will ensure that neither will your investment ship sink, nor will the investment flight soar to scary heights. What you will get here is a steady ride to help you meet your long-term investment goals.",
        votalityType: "Low Volatility",
        image: "https://assets.smallcase.com/images/smallcases/200/SCAW_0001.png",
        cagr: 13.87,
        cagrYear: "3Y CAGR"
    },
    {
        name: "Top 100 Stocks",
        minAmount: 953,
        longDescription1: "smallcase invests in top 100 marketcap companies using Nippon India ETF Nifty Bees for top 50 companies and Nippon India ETF Junior Bees for 51-100 marketcap companies",
        shortDescription: "India's most powerful companies in one portfolio. Solid stability",
        listElement1: "Large cap companies are usually well established and the chances of such companies going bust are low",
        listElement2: "Adding such stocks to the portfolio increases stability of the portfolio as their stock prices are not very volatile. They are also best suited for long term wealth creation",
        longDescription2: "This smallcase has companies that either derive a significant amount of their revenue from rural India or are striving to enhance their foothold across rural markets to benefit from increasing rural demand.",
        votalityType: "Med. Volatility",
        image: "https://assets.smallcase.com/images/smallcases/200/SCET_0004.png",
        cagr: 18.52,
        cagrYear: "3Y CAGR"
    },
    {
        name: "Equity & Gold",
        minAmount: 262,
        shortDescription: "Create wealth with equities, stay protected with Gold. The sweet spot",
        longDescription1: "This smallcase invests in Equity & Gold, fixing their weights to 70% and 30%. smallcase invests in large-cap companies using Nippon India ETF Nifty Bees",
        listElement1: "Large cap companies are usually well established and the chances of such companies going bust are low",
        listElement2: "Adding such stocks to the portfolio increases stability of the portfolio as their stock prices are not very volatile. They are also best suited for long term wealth creation",
        longDescription2: "Historically gold has maintained its value and is the best form of hedge against inflation and geo-political uncertainties. Since price of gold is negatively correlated with price of stock, the former is a very effective portfolio diversifier.",
        votalityType: "Low Volatility",
        image: "https://assets.smallcase.com/images/smallcases/160/SCET_0005.png",
        cagr: 19.93,
        cagrYear: "3Y CAGR"
    },
    
]


function smallcaseDetail(number, e) {
    e.preventDefault();
    const dataToBeSent = JSON.stringify(smallcasesData[number - 1]);
    console.log(dataToBeSent);
    window.localStorage.setItem("smallcase-detail", dataToBeSent);
    window.location.pathname = "smallcaseDetail/smallcaseDetail.html";
}


function renderGetStarted(e) {
    e.preventDefault();
    if (loginStatus !== "") {
        window.location.pathname = "allSmallcases/allSmallCases.html";
    } else {
        window.location.pathname = "loginSignupPages/login_page.html";
    }
}

