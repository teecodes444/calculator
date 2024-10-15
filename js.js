let num1 = '';
let num2 = '';
let operator = ''; 
const display = document.querySelector('#display');
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const clearBtn = document.querySelector('#clear');
const equalBtn = document.querySelector('#equal');

digits.forEach(digit => {
    digit.addEventListener('click', () => {
        const number = digit.textContent;
        if (operator === '') {
            num1 += number;
            display.innerText = num1;
        } else {
            num2 += number;
            display.innerText = num2;
        }
        
    })
});

operators.forEach(op => {
    op.addEventListener('click', () => {
        if (operator, num1, num2) {
            const result = operate(operator, num1, num2);
            let roundResult = Number((result).toFixed(2));
            num1 = roundResult.toString();
            num2 = '';
            operator = op.textContent;
            display.innerText = operator;

        } else {
            operator = op.textContent;
            display.innerText = operator;
        };
    })
})

clearBtn.addEventListener('click', () => {
    num1 = '';
    num2 = '';
    operator = '';
    display.innerText = '0';
})

equalBtn.addEventListener('click', () => {
    if (num1 && num2 && operator) {
        const result = operate(operator, num1, num2);
        let roundResult = Number((result).toFixed(2));
        display.innerText = roundResult;
        num1 = roundResult;
        num2 = '';
        operator = '';
    }
})



function add(x,y) {
    return parseInt(x) + parseInt(y);
}

function subtract(x,y) {
    return parseInt(x) - parseInt(y);
}

function multiply(x,y) {
    return parseInt(x) * parseInt(y);
}

function divide(x,y) {
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