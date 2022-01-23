function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(o, numA, numB) {
    if (o == "*") {
        return multiply(numA, numB);
    } else if (o == "+") {
        return add(numA, numB);
    } else if (o == "-") {
        return subtract(numA, numB);
    } else if (o == "÷") {
        return divide(numA, numB);
    }
}

function setUpButtons() {
    let display = document.getElementById("display");

    const zeroBtn = document.querySelector("#zeroBtn");
    zeroBtn.addEventListener("click", () => {
        display.innerHTML += "0";
    });

    const oneBtn = document.querySelector("#oneBtn");
    oneBtn.addEventListener("click", () => {
        display.innerHTML += "1";
    });

    const twoBtn = document.querySelector("#twoBtn");
    twoBtn.addEventListener("click", () => {
        display.innerHTML += "2";
    });

    const threeBtn = document.querySelector("#threeBtn");
    threeBtn.addEventListener("click", () => {
        display.innerHTML += "3";
    });

    const fourBtn = document.querySelector("#fourBtn");
    fourBtn.addEventListener("click", () => {
        display.innerHTML += "4";
    });

    const fiveBtn = document.querySelector("#fiveBtn");
    fiveBtn.addEventListener("click", () => {
        display.innerHTML += "5";
    });

    const sixBtn = document.querySelector("#sixBtn");
    sixBtn.addEventListener("click", () => {
        display.innerHTML += "6";
    });

    const sevenBtn = document.querySelector("#sevenBtn");
    sevenBtn.addEventListener("click", () => {
        display.innerHTML += "7";
    });

    const eightBtn = document.querySelector("#eightBtn");
    eightBtn.addEventListener("click", () => {
        display.innerHTML += "8";
    });

    const nineBtn = document.querySelector("#nineBtn");
    nineBtn.addEventListener("click", () => {
        display.innerHTML += "9";
    });

    const clearBtn = document.querySelector("#clearBtn");
    clearBtn.addEventListener("click", () => {
        display.innerHTML = "";
    });

    const divideBtn = document.querySelector("#divideBtn");
    divideBtn.addEventListener("click", () => {
        display.innerHTML += "÷";
    });

    const multiplyBtn = document.querySelector("#multiplyBtn");
    multiplyBtn.addEventListener("click", () => {
        display.innerHTML += "*";
    });

    const subtractBtn = document.querySelector("#subtractBtn");
    subtractBtn.addEventListener("click", () => {
        display.innerHTML += "-";
    });

    const addBtn = document.querySelector("#addBtn");
    addBtn.addEventListener("click", () => {
        display.innerHTML += "+";
    });

    const equalBtn = document.querySelector("#equalBtn");
    equalBtn.addEventListener("click", () => {

        display.textContent = process();
    });
}

function process() {
    const display = document.querySelector('#display');
    let input = display.textContent;
    let array = input.match(/\d+/g);
    let numA = Number(array[0]);
    let numB = Number(array[1]);
    let o = input.match(/[*+÷-]/);
    return operate(o, numA, numB);
}

setUpButtons();