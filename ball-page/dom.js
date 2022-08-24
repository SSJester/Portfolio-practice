"use strict"

const ball = document.querySelector("#ball");
const field = document.querySelector("#field");

function func(event) {
    let left;
    let top;
    left = event.clientX - (field.getBoundingClientRect().left + field.clientLeft) - (ball.clientWidth / 2);
    top = event.clientY - (field.getBoundingClientRect().top + field.clientTop) - (ball.clientHeight / 2);
    if(left < 0 ) {
        ball.style.left = 0 +  "px";
    } else if (left + ball.clientWidth > field.clientWidth){
        ball.style.left = field.clientWidth - ball.clientWidth  + "px";
    } else {
        ball.style.left = left + "px";
    }
    if (top < 0) {
        ball.style.top = 0 + "px";
    } else if (top + ball.clientHeight > field.clientHeight) {
        ball.style.top = field.clientHeight - ball.clientHeight + "px";
    } else {
        ball.style.top = top + "px";
    }
}


field.addEventListener("click", func);



