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

// Popup

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

    // Translation

    const languageObj = {
        english: ["Ukranian", "English", "Theme", "Welcome to my portfolio!", 
        "My name is Olexandr Shelkoviy. I am a future developer. On this page I want to show some of my html, css and js skills.",
        "Let`s go!", "My websites practice", "This is my first html layout with youtube tutorial", "This is the first layout create by myself",
        "This is the second layout create by myself", "Several small tasks on javascript", "Ball", "Slider", "Numbers system",
        "At the moment I'm in the learning phase, so gradually new items will appear here to show my progress.", "Coming soon...",
        "Ball", "This small program shows the skills of working with DOM coordinates", "Watch demo", "Github link", "X",
        "Slider", "This is my small slider in clean javascript", "Watch demo", "Github link", "X",
        "Numbers System", "This is calculator for converting basic number systems", "Watch demo", "Github link", "X"],
        ukranian: ["Українська", "Англійська", "Тема", "Ласкаво прошу до мого портфоліо!", 
        "Мене звати Шелковий Олександр. Я майбутній розробник. На цій сторінці я хотів би продемонструвати деякі свої навички html, css та javascript",
        "Рушаймо!", "Практика верстки", "Моя перша html верстка за допомогою ютуб-туторіалів", "Моя перша самостійна верстка",
        "Моя друга самостійна верстка", "Завдання на javascript", "М'яч", "Слайдер", "Системи числення", 
        "Зараз я знаходжусь на навчальному етапі, тому поступово тут будуть з'являтися нові елементи, які покажуть мій прогрес",
        "Скоро буде...", "М'яч", "Ця невеличка програма показує мої навички роботи з DOM координатами", "Перейти до програми", "Посилання на гітхаб", "Х",
        "Слайдер", "Невеликий слайдер на чистому javascript", "Перейти до програми", "Посилання на гітхаб", "Х",
        "Калькулятор систем числення", "Калькулятор для конвертації базових систем числення", "Перейти до програми", "Посилання на гітхаб", "Х"],
    }

    const languageSwitcher = document.querySelector("#header__select");
    const optionsArr = document.querySelectorAll("#header__select option");
    const languageImg = document.querySelector(".header__image-container img");
    let arrLanguageCounter = 0;
    let language = [];

    function changeTranslate(elem, language) {
        for (let child of elem.children) {
            if (child.children.length == 0 && child.textContent) {
                child.innerHTML = language[arrLanguageCounter];
                arrLanguageCounter++;
            }           
            if (child.children) {
                changeTranslate(child, language);
            }            
        }
        
    }
    
    languageSwitcher.addEventListener("change", function(event) {
        let value = event.target.value;        
        arrLanguageCounter = 0;
        if (value === 'ukr'){
            language = languageObj.ukranian;
            languageImg.setAttribute("src", "img/header/Ukraine.svg");
        } else if (value === 'en'){
            language = languageObj.english;
            languageImg.setAttribute("src", "img/header/Great_Britain.svg");
        }
        changeTranslate(document.body, language);
        localStorage.setItem("value", languageSwitcher.value);
        location.reload();
    });

    if (localStorage.getItem("value")) {
        for (let arg of optionsArr) {
            if (localStorage.getItem("value") == arg.value) {
                if (arg.value === 'ukr') {
                    language = languageObj.ukranian;
                    languageImg.setAttribute("src", "img/header/Ukraine.svg");
                } else if (arg.value === 'en') {
                    language = languageObj.english;
                    languageImg.setAttribute("src", "img/header/Great_Britain.svg");
                }
                arg.setAttribute("selected", "selected");
                changeTranslate(document.body, language);
            }
        }
    }
}

















