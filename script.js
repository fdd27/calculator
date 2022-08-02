//const { equal } = require("assert");

// Assigning variables for the buttons
const btnNumbers = document.querySelectorAll('[data-number]');
const btnOperators = document.querySelectorAll('[data-operator]');
const btnEquals = document.querySelector('[data-equals]');
const btnUndo = document.querySelector('[data-undo]');
const btnClear = document.querySelector('[data-clear]');
const screen = document.querySelector('[data-screen]');

// Variables to know if equals was called and if a screen clear is needed
let equalsCalled = false;
let toClear = false;

resetAll(); //initialize

// Number buttons event listeners
btnNumbers.forEach((btnNumber) => {
    btnNumber.addEventListener('click', () => append(btnNumber.textContent));
});

// Operator buttons event listeners
btnOperators.forEach((btnOperator) => {
    btnOperator.addEventListener('click', () => operatorClick(screen.textContent, btnOperator.textContent));
});

// Equals and clear button event listener
btnEquals.addEventListener('click', () => equalsClick());
btnClear.addEventListener('click', () => resetAll());

//Math functions
//add
function add(a, b) {
    return Number(a) + Number(b);
}
//subtract
function subtract(a, b) {
    return Number(a) - Number(b);
}
//multiply
function multiply(a, b) {
    return Number(a) * Number(b);
}
//divide
function divide(a, b) {
    return Number(a) / Number(b);
}

//Function to use for the operations
function operate(op, num1, num2) {
    resetScreen();
    if (op == "+") screen.textContent = String(add(num1, num2));
    if (op == "-") screen.textContent = String(subtract(num1, num2));
    if (op == "x") screen.textContent = String(multiply(num1, num2));
    if (op == "/") screen.textContent = String(divide(num1, num2));
}

//Add number to screen
function append(num) {
    if (toClear) {
        resetScreen();
    }
    screen.textContent += num;
}

//Operator click function
function operatorClick(screenValue, op) {
    if (num1 == null) {
        num1 = screenValue;
        operator = op;
        toClear = false;
        resetScreen();
    } else {
        num2 = screenValue;
        operate(operator, num1, num2);
        operator = op;
        num1 = Number(screen.textContent);
        num2 = null;
        toClear = true;
    }
}

// Equals click function
function equalsClick() {
    if (!num1) {
        console.log("no num1");
        return;
    }
    if (equalsCalled) {
        console.log("equals called is true");
        return;
    }
    if (!num2 && !operator) {
        console.log("no num2 and no operator");
        screen.textContent = num1;
    } else if(!num2 && operator) {
        console.log("get number 2 and operate");
        num2 = Number(screen.textContent);
        operate(operator, num1, num2);
    } else operate(operator, num1, num2);
    equalsCalled = true;
}

// Reset everything
function resetAll() {
    resetScreen();
    num1 = null;
    num2 = null;
    operator = null;
    equalsCalled = false;
    toClear = false;
}

// Reset screen
function resetScreen() {
    screen.textContent = "";
}