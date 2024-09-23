const calcDisplay = document.getElementById("calcDisplay")

// Add button input to the display input.
function displayInput(input) {
    calcDisplay.value += input;
}

// Clears display input.
function clearAll() {
    calcDisplay.value = "";
}

// Deletes the previous value entry by removing it from the string.
function deleteFrom() {
    calcDisplay.value = calcDisplay.value.slice(0,-1);
}


// Evaluates string, added a try catch to prevent errors and reduce breakage.
function evalWith () {
    try {
        calcDisplay.value = eval(calcDisplay.value);
    }
    catch(error) {
        calcDisplay.value = "Error";
    }
}