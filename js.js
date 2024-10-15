let num1 = '';
let num2 = '';
let operator = ''; 
const result = document.querySelector('#display');
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const clearBtn = document.querySelector('#clear');

digits.forEach(digit => {
    digit.addEventListener('click', () => {
        const number = digit.textContent;
        result.innerText = number;
    })
});

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        const opp = operator.textContent;
        result.innerText = opp;
    })
})

clearBtn.addEventListener('click', () => {
    result.innerText = '0';
})

function add() {
    return x + y;
}

function subtract() {
    return x - y;
}

function multiply() {
    return x * y;
}

function divide() {
    return x / y;
}

const operate = (operator, x, y) => {
    if (operator === '+') {
        return add(x, y);
    } else if (operator === '-') {
        return subtract(x,y);
    } else if (operator === '*') {
        return multiply(x,y);
    } else if (operator === '/') {
        return divide(x,y);
    }
};