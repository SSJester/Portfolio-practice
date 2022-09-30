"use strict"

const leftButton = document.querySelector(".slider__left-btn");
const rightButton = document.querySelector(".slider__right-btn");
const sliderImages = document.querySelectorAll(".slider__image img");
const backgroundImage = document.querySelector(".background img");
let num = 0;
let index;
let attribute;

const counter = document.querySelector(".counter");
const amountSlides = document.createElement("span");
amountSlides.className = "amount-slides";
amountSlides.innerHTML = `${sliderImages.length}`;
counter.append(amountSlides);
const currentSlide = document.createElement("span");
currentSlide.className = "current-slide";
currentSlide.innerHTML = "1";
counter.prepend(currentSlide);



leftButton.addEventListener("click", leftClick);
rightButton.addEventListener("click", rightClick);

function rightClick() {
    sliderImages[num].style.left = "-1080px";
    if (num == sliderImages.length - 1) {
        num = -1;
    }

    num++;
    currentSlide.innerHTML = `${num + 1}`;
    counter.prepend(currentSlide);

    if (num + 1 < sliderImages.length) {
        index = num + 1;
    } else {
        index = 0;
    }
    sliderImages[index].style.left = "1080px";
    sliderImages[index].style.transition = "0s";

    sliderImages[num].style.left = "0px";
    sliderImages[num].style.transition = "1s";

    attribute = sliderImages[num].getAttribute("src");
    backgroundImage.setAttribute("src", attribute);

    rightButton.disabled = true;
    setTimeout(() => {
        rightButton.disabled = false;
    }, 500);
};




function leftClick() {
    sliderImages[num].style.left = "1080px";
    if (num == 0) {
        num = sliderImages.length;
    }
    currentSlide.innerHTML = `${num}`;
    counter.prepend(currentSlide);

    num--;

    if (num - 1 >= 0) {
        index = num - 1;
    } else {
        index = sliderImages.length + (num - 1);
    }
    sliderImages[index].style.left = "-1080px";
    sliderImages[index].style.transition = "0s";

    sliderImages[num].style.left = "0px";
    sliderImages[num].style.transition = "1s";

    attribute = sliderImages[num].getAttribute("src");
    backgroundImage.setAttribute("src", attribute);

    leftButton.disabled = true;
    setTimeout(() => {
        leftButton.disabled = false;
    }, 500);
}













