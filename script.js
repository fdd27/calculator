const btnNumbers = document.querySelectorAll('[data-number]');
const btnOperators = document.querySelectorAll('[data-operator]');
const btnEquals = document.querySelector('[data-equals]');
const btnUndo = document.querySelector('[data-undo]');
const btnClear = document.querySelector('[data-clear]');

let screen = document.querySelector('[data-screen]');
let reset = false;

btnNumbers.forEach((btnNumber) => {
    btnNumber.addEventListener('click', () => "");
})

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(op, num1, num2) {
    if (op == "+") add(num1, num2);
    if (op == "-") subtract(num1, num2);
    if (op == "*") multiply(num1, num2);
    if (op == "/") divide(num1, num2);
}

function append(num) {
    if (screen.textContent == "0" || reset) screen.textContent = "";
    screen.textContent += num;
}

function resetScreen() {
    screen.textContent = "";
    reset = false;
}