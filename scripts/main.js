const calcDisplay = document.getElementById("calcDisplay")

// Add button input to the display input.
function displayInput(input) {
    calcDisplay.value += input;
}

function clearAll() {
    calcDisplay.value = "";
}

// This almost works, but it deletes all and changes the input to 1.
function deleteFrom() {
    calcDisplay.value = calcDisplay.value.slice(0,-1);
}

function evalWith () {
    try {
        calcDisplay.value = eval(calcDisplay.value);
    }
    catch(error) {
        calcDisplay.value = "Error";
    }
}