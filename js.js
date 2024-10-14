const num1 = document.querySelector('#num1').value;
const num2 = document.querySelector('#num2').value;
const operator = document.querySelectorAll('.operator'); 

const add = () => {
    return x + y;
}

const subtract = () => {
    return x - y;
}

const multiply = () => {
    return x * y;
}

const divide = () => {
    return x / y;
}

const operate = (x, y) => {
    if (operator === "+") {
        add();
    } else if (operator === '-') {
        subtract();
    } else if (operator === '*') {
        multiply();
    } else if (operator === '/') {
        divide();
    }
};