let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(number) {
    currentInput += number; // Add the clicked number to the current input
    display.value = currentInput; // Update the display with the current input
}

function setOperator(op) {
    if (currentInput === '' && previousInput === '') return; // Prevent setting operator if no numbers entered

    // If there's already a previous input and operator, calculate the result
    if (currentInput !== '' && previousInput !== '') {
        calculateResult();
    }

    operator = op; // Set the current operator
    if (currentInput !== '') {
        previousInput = currentInput; // Save the current input as the previous input
        currentInput = ''; // Clear the current input
    }
    display.value = previousInput + ' ' + operator; // Show the operator in the display
}

function clearDisplay() {
    currentInput = ''; // Clear the current input
    previousInput = ''; // Clear the previous input
    operator = ''; // Reset the operator
    display.value = ''; // Clear the display
}

function calculateResult() {
    if (currentInput === '' || previousInput === '') return; // Prevent calculation if inputs are missing

    let result;
    const prev = parseFloat(previousInput); // Convert previous input to a number
    const current = parseFloat(currentInput); // Convert current input to a number

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = current === 0 ? 'Error' : prev / current; // Handle division by zero
            break;
        default:
            return;
    }

    display.value = result; // Display the result
    currentInput = result.toString(); // Update the current input to the result
    previousInput = ''; // Clear the previous input
    operator = ''; // Reset the operator
}
