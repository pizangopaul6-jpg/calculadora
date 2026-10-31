const display = document.getElementById('display');
let currentValue = '0';

function input(value) {
    if (value === 'DEL') {
        currentValue = currentValue.length > 1 ? currentValue.slice(0, -1) : '0';
    } else if (value === '%') {
        // Convierte el valor actual a porcentaje dividiendo entre 100
        try {
            currentValue = (eval(currentValue) / 100).toString();
        } catch (e) {
            currentValue = 'Error';
        }
    } else {
        currentValue = currentValue === '0' ? value : currentValue + value;
    }
    display.textContent = currentValue;
}

function clearAll() {
    currentValue = '0';
    display.textContent = currentValue;
}

function calculate() {
    try {
        currentValue = eval(currentValue).toString();
        display.textContent = currentValue;
    } catch (error) {
        currentValue = 'Error';
        display.textContent = currentValue;
    }
}