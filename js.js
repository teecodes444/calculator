let num1 = '';
let num2 = '';
let operator = ''; 
const result = document.querySelector('#display');
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const clearBtn = document.querySelector('#clear');
const equalBtn = document.querySelector('#equal');

digits.forEach(digit => {
    digit.addEventListener('click', () => {
        const number = digit.textContent;
        if (operator === '') {
            num1 += number;
            result.innerText = num1;
        } else {
            num2 += number;
            result.innerText = num2;
        }
        
    })
});

operators.forEach(op => {
    op.addEventListener('click', () => {
        operator = op.textContent;
        result.innerText = operator;
    })
})

clearBtn.addEventListener('click', () => {
    result.innerText = '0';
})



function add() {
    return parseInt(x) + parseInt(y);
}

function subtract() {
    return parseInt(x) - parseInt(y);
}

function multiply() {
    return parseInt(x) * parseInt(y);
}

function divide() {
    return parseInt(x) / parseInt(y);
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