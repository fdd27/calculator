const btnNumbers = document.querySelectorAll('[data-number]');
const btnOperators = document.querySelectorAll('[data-operator]');
const btnEquals = document.querySelector('[data-equals]');
const btnUndo = document.querySelector('[data-undo]');
const btnClear = document.querySelector('[data-clear]');

let screen = document.querySelector('[data-screen]');
//let reset = false;
let num1 = null;
let num2 = null;
let operator = null;
//let screenValue;


btnNumbers.forEach((btnNumber) => {
    btnNumber.addEventListener('click', () => append(btnNumber.textContent));
});

btnOperators.forEach((btnOperator) => {
    btnOperator.addEventListener('click', () => {
        operator = btnOperator.textContent;
    });
});

btnEquals.addEventListener('click', () => {
    if (num2 == null) screen.textContent = num1;
    else operate(operator, num1, num2);
    num1 = null;
    num2 = null;
    operator = null;
});

btnClear.addEventListener('click', reset);

function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return Number(a) - Number(b);
}

function multiply(a, b) {
    return Number(a) * Number(b);
}

function divide(a, b) {
    return Number(a) / Number(b);
}

function operate(op, num1, num2) {
    resetScreen();
    if (op == "+") screen.textContent = add(num1, num2);
    if (op == "-") screen.textContent = subtract(num1, num2);
    if (op == "*") screen.textContent = multiply(num1, num2);
    if (op == "/") screen.textContent = divide(num1, num2);
}

function append(num) {
    //if (screen.textContent == "0" || reset) screen.textContent = "";
    resetScreen();
    if (num1 == null){
        num1 = num;
        screen.textContent += num;
    } else {
        num2 = num;
        screen.textContent += num;
    }
    //screenValue = Number(screen.textContent);
}

function resetScreen() {
    screen.textContent = "";
    //reset = false;
}

function reset() {
    resetScreen();
    num1 = null;
    num2 = null;
    operator = null;
}