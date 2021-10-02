const carouselContainerElement = document.querySelector(".carousel-container");

const carouselItemElements = document.querySelectorAll(".carousel-item");

let currentItem = 0;

function onInterval() {
    currentItem++;
    carouselContainerElement.style.transitionDuration = "1s";
    carouselContainerElement.style.transform = `translateX(-${currentItem * 100}%)`;

    if (currentItem === carouselItemElements.length - 1) {
        currentItem = -1;
    }
}
let interval = setInterval(onInterval, 4000);

carouselContainerElement.addEventListener("transitionend", function () {
    if (currentItem === -1) {
        carouselContainerElement.style.transitionDuration = "0s";
        carouselContainerElement.style.transform = `translateX(0)`;
        clearInterval(interval);
        currentItem = 0;
        interval = setInterval(onInterval, 4000);
    }
})
