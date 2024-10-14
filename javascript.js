const operators = document.querySelectorAll('.operator'); 
const calculate = document.querySelector('#calc');

calculate.addEventListener('click', () => {
    const num1 = document.querySelector('#num1').value;
    const num2 = document.querySelector('#num2').value;
    alert(`Number one is ${num1}. Number two is ${num2}`)
})
operators.forEach(operator => {
    /* forEach needed to loop through each operator
    element and add event listener to each one individually */
    operator.addEventListener('click', () => {
        operate(num1, num2)
    })
});

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

const operate = (opp, x, y) => {
    if (operators === "+") {
        add();
    } else if (operators === '-') {
        subtract();
    } else if (operators === '*') {
        multiply();
    } else if (operators === '/') {
        divide();
    }
};
