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
