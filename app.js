let display = '0';
let equation = '';

function updateDisplay() {
    document.getElementById('display').textContent = display;
}

function handleClick(value) {
    if (display === '0' && value !== '.') {
        display = value;
    } else {
        display += value;
    }
    equation += value;
    updateDisplay();
}

function handleClear() {
    display = '0';
    equation = '';
    updateDisplay();
}

function handleCalculate() {
    try {
        const result = eval(equation);
        display = result.toString();
        equation = result.toString();
        updateDisplay();
    } catch (error) {
        display = 'Error';
        equation = '';
        updateDisplay();
    }
}