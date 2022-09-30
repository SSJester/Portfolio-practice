"use strict"

const scrollButton = document.querySelector(".greeting__mouse");
const greetingHiddenText = document.querySelector(".greeting__hidden-text");
const greetingScrollHide = document.querySelector(".greeting__scroll");

function showHiddenBlock() {
    greetingScrollHide.classList.toggle("active");
};

function scrollHiddenBlock() {
    if(window.pageYOffset > 0) {
        greetingScrollHide.classList.add("active");
    } else {
        greetingScrollHide.classList.remove("active");
    }
}


scrollButton.addEventListener("click", showHiddenBlock);
window.addEventListener("scroll", scrollHiddenBlock);

//Popup

window.onload = function() {
    const popupLinks = document.querySelectorAll(".popup-link");
    const body = document.querySelector("body");
    const closePopup = document.querySelectorAll(".popup__close");

    if(popupLinks.length > 0) {
        for(let i = 0; i < popupLinks.length; i++) {
            const popupLink = popupLinks[i];
            popupLink.addEventListener("click", function (event) {
                const popupName = popupLink.getAttribute("href").replace("#", "");
                const currentPopup = document.getElementById(popupName);
                popupOpen(currentPopup);
                event.preventDefault();
            });
        }
    }

    if (closePopup.length > 0) {
        for (let i = 0; i < closePopup.length; i++) {
            const elem = closePopup[i];
            elem.addEventListener("click", function () {
                popupClose(elem.closest(".popup"));
            });
        }
    }

    function popupOpen(currentPopup) {
        currentPopup.classList.add("open");
        bodyBlock();
        currentPopup.addEventListener("click", function (event) {
            if (!event.target.closest(".popup__content")) {
                popupClose(event.target.closest(".popup"));
            }
        });
    }

    function popupClose(currentElem) {
        currentElem.classList.remove("open");
        bodyUnblock();
    }

    const paddingR = window.innerWidth - document.querySelector(".wrapper").clientWidth + "px";

    function bodyBlock() {
        body.classList.add("locked");
        body.style.paddingRight = paddingR;
        document.querySelector('header').style.paddingRight = paddingR;
    }

    function bodyUnblock() {
        body.classList.remove("locked");
        body.style.paddingRight = 0 + "px";
        document.querySelector('header').style.paddingRight = 0 + 'px';
    }

}




