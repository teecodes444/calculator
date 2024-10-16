let num1 = '';
let num2 = '';
let operator = ''; 
const display = document.querySelector('#display');
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const decimal = document.querySelector('#decimal');
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

        if (num1 && num2 && operator) {
            equalBtn.disabled = false;
        }
        
    })
});

operators.forEach(op => {
    op.addEventListener('click', () => {

        if (num1 && !num2) {
            operator = op.textContent;
            display.innerText = operator;

        } else {
            if (num1 && num2) {
                const result = operate(operator, num1, num2);
                let roundResult = Number((result).toFixed(2));
                num1 = roundResult.toString();
                num2 = '';
                operator = op.textContent;
                display.innerText = operator;
            }
        }
    })
})

decimal.addEventListener('click', () => {
    if (operator === '') {
        if (!num1.includes('.')) {
            num1 += '.';
            display.innerText = num1;
        }
    } else {
        if (!num2.includes('.')) {
            num2 += '.';
            display.innerText = num2;
        }
    }
})

clearBtn.addEventListener('click', () => {
    num1 = '';
    num2 = '';
    operator = '';
    display.innerText = '0';
    equalBtn.disabled = true;
})

equalBtn.addEventListener('click', () => {
    if (num1 && num2 && operator) {
        const result = operate(operator, num1, num2);
        let roundResult = Number((result).toFixed(2));
        display.innerText = roundResult;
        num1 = roundResult.toString();
        num2 = '';
        operator = '';
        equalBtn.disabled = true;
    }
})



function add(x,y) {
    return parseFloat(x) + parseFloat(y);
}

function subtract(x,y) {
    return parseFloat(x) - parseFloat(y);
}

function multiply(x,y) {
    return parseFloat(x) * parseFloat(y);
}

function divide(x,y) {
    let error = "You can't divide by 0. Press 'Clear' and try again."
    if (parseFloat(y) === 0) {
        alert(error);
    } else {
        return parseFloat(x) / parseFloat(y);
    };
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