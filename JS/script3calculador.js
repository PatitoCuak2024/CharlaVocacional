const display = document.getElementById("display");
let internalExpression = ""; // Almacena la expresión en código evaluable

function appendToDisplay(value, displayValue = value) {
    internalExpression += value; // Agrega el código evaluable
    display.value += displayValue; // Agrega el símbolo visible
}

function clearDisplay() {
    display.value = "";
    internalExpression = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
    internalExpression = internalExpression.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(internalExpression);
        internalExpression = display.value; // Actualiza la expresión interna con el resultado
    } catch (error) {
        display.value = "Error";
        internalExpression = "";
    }
}

// Funciones para agregar expresiones científicas con símbolos visibles
function appendSqrt() {
    appendToDisplay("Math.sqrt(", "√(");
}

function appendSin() {
    appendToDisplay("Math.sin(", "sin(");
}

function appendCos() {
    appendToDisplay("Math.cos(", "cos(");
}

function appendTan() {
    appendToDisplay("Math.tan(", "tan(");
}

function appendPow() {
    appendToDisplay("Math.pow(", "^");
}

function appendLog() {
    appendToDisplay("Math.log(", "log(");
}

function appendPi() {
    appendToDisplay("Math.PI", "π");
}

function appendE() {
    appendToDisplay("Math.E", "e");
}

// Manejo de teclas del teclado
document.addEventListener("keydown", (event) => {
    const key = event.key;

    if (!isNaN(key)) {
        // Si la tecla es un número (0-9)
        appendToDisplay(key);
    } else if (key === "+") {
        appendToDisplay("+");
    } else if (key === "-") {
        appendToDisplay("-");
    } else if (key === "*") {
        appendToDisplay("*", "×");
    } else if (key === "/") {
        appendToDisplay("/", "÷");
    } else if (key === ".") {
        appendToDisplay(".");
    } else if (key === "(") {
        appendToDisplay("(");
    } else if (key === ")") {
        appendToDisplay(")");
    } else if (key === "Enter") {
        // Calcula el resultado
        calculateResult();
    } else if (key === "Backspace") {
        // Borra el último carácter
        deleteLast();
    } else if (key.toLowerCase() === "s") {
        appendSin();
    } else if (key.toLowerCase() === "c") {
        appendCos();
    } else if (key.toLowerCase() === "t") {
        appendTan();
    } else if (key.toLowerCase() === "l") {
        appendLog();
    } else if (key === "^") {
        appendPow();
    } else if (key === "p" || key === "π") {
        appendPi();
    } else if (key === "e") {
        appendE();
    }
});
