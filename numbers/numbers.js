"use strict"
const btn = document.querySelector("button");
const divResult = document.querySelector(".calculator__result"); 
let arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

function decadeToAll(num, sysNum) {
    let result = "";
    num = BigInt(num);
    while(num > 0) {
        result += arr[num % BigInt(sysNum)];
        num /= BigInt(sysNum);
    }
    return result.split("").reverse().join("");
}

function binaryToAll(num, sysNum) {
    let result = "";
    let divider = 0;
    if(sysNum == 8) {
        divider = -3;
    } else if(sysNum == 16) {
        divider = -4;
    }
    while(num > 0) {
        let helpResult = 0n;
        let powIndex = 1n;
        let helpNum = num.slice(divider);
        num = num.slice(0, divider);
        do {
            helpResult += BigInt(helpNum.slice(helpNum.length - 1)) * powIndex;
            powIndex *= 2n;
            helpNum = helpNum.slice(0, helpNum.length - 1);
        } while(helpNum > 0)
        if(sysNum == 10) {
            result += helpResult;
        } else {
            result += arr[helpResult];
        }
        
    }
    if(sysNum == 10) {
        return String(result);
    } else {
        return result.split("").reverse().join("");
    }    
}

function otherToAll(num, fromSysNum, inSysNum) {
    num = num.toUpperCase();
    fromSysNum = BigInt(fromSysNum);
    let result = 0n;
    let powIndex = 0n;
    while(num) {
        result += BigInt(arr.indexOf(num.slice(num.length - 1))) * powBigint(fromSysNum, powIndex);
        powIndex += 1n;
        num = num.slice(0, num.length - 1);
    }

    return decadeToAll(result, inSysNum);
}

function checkCorrect(num, sysNum) {
    let check = true;
    num = num.toUpperCase();
    if(num.length == 0 || (num.length == 1 && num[0] == 0)) {
        return check = false;
    }
    for(let i = 0; i < num.length; i++) {
        if(arr.indexOf(num[i]) >= sysNum || !arr.includes(num[i])) {
            check = false;
            break;
        }
    }
    return check;
}

function powBigint(main, bigNum) {
    let resultNum = 1n;
    for(let i = 0; i < bigNum; i++) {
        resultNum *= main;
    }
    return resultNum;
}

btn.addEventListener("click", calculate);
document.addEventListener("keyup", function(event) {
    if(event.key == "Enter") {
        calculate();
    }
});

function calculate () {
    let inputSysNum = document.querySelector("#calculator__input-data").value;
    let outputSysNum = document.querySelector("#calculator__output-data").value;
    let inputData = document.querySelector("input").value;
    let result = "";

    if (checkCorrect(inputData, inputSysNum) && inputSysNum != outputSysNum) {
        switch (inputSysNum) {
            case "2": {
                result = binaryToAll(inputData, outputSysNum);
                break;
            }
            case "10": {
                result = decadeToAll(inputData, outputSysNum);
                break;
            }
            default: {
                result = otherToAll(inputData, inputSysNum, outputSysNum);
                break;
            }
        }
        divResult.classList.remove("error");
        divResult.innerHTML = result;
    } else {
        divResult.classList.add("error");
        divResult.innerHTML = "Невірно введені дані";
    }
}







