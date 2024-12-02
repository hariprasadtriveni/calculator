/*const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');

let currentInput = ''; // Tracks the current input
let memory = 0; // Memory storage
let lastResult = null; // Last result

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        // Numbers and Decimal
        if (!isNaN(value) || value === '.') {
            currentInput += value;
        }
        // Clear (C)
        else if (value === 'C') {
            currentInput = '';
            lastResult = null;
        }
        // Clear Entry (CE)
        else if (value === 'CE') {
            currentInput = currentInput.slice(0, -1);
        }
        // Memory Operations
        else if (value === 'MC') {
            memory = 0;
        } else if (value === 'MR') {
            currentInput = memory.toString();
        } else if (value === 'M+') {
            memory += parseFloat(currentInput || '0');
        } else if (value === 'M-') {
            memory -= parseFloat(currentInput || '0');
        }
        // Operators
        else if (['+', '-', '×', '/'].includes(value)) {
            currentInput += ` ${value} `;
        }
        // Square Root (√)
        else if (value === '√') {
            currentInput = Math.sqrt(parseFloat(currentInput)).toString();
        }
        // Square (x²)
        else if (value === 'x²') {
            currentInput = Math.pow(parseFloat(currentInput), 2).toString();
        }
        // Reciprocal (1/x)
        else if (value === '1/x') {
            currentInput = (1 / parseFloat(currentInput)).toString();
        }
        // Change Sign (±)
        else if (value === '±') {
            currentInput = (-1 * parseFloat(currentInput)).toString();
        }
        // Equals (=)
        else if (value === '=') {
            try {
                let sanitizedInput = currentInput.replace(/×/g, '*').replace(/÷/g, '/');
                lastResult = eval(sanitizedInput);
                currentInput = lastResult.toString();
            } catch {
                currentInput = 'Error';
            }
        }
        // Update display
        display.textContent = currentInput || '0';
    });
});
*/

// JavaScript for calculator functionality

const display = document.getElementById("display");
let history = [];

// Function to append input to the display
function appendToDisplay(value) {
    if (display.innerText === "0") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

// Function to clear the display
function clearDisplay() {
    display.innerText = "0";
}

// Function to calculate the result
function calculate() {
    try {
        const result = eval(display.innerText); // Calculate result
        history.push(`${display.innerText} = ${result}`); // Save calculation to history
        display.innerText = result; // Update display
    } catch (error) {
        display.innerText = "Error";
    }
}


// Function to handle backspace
function backspace() {
    display.innerText = display.innerText.slice(0, -1) || "0";
}
function showHistory() {
    const historyModal = document.getElementById("historyModal");
    const historyList = document.getElementById("historyList");

    // Clear existing history list
    historyList.innerHTML = "";

    // Add each calculation to the list
    history.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        historyList.appendChild(listItem);
    });

    // Show the modal
    historyModal.style.display = "block";
}

// Function to close history
function closeHistory() {
    document.getElementById("historyModal").style.display = "none";
}
