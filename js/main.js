const add = (firstNum, secondNum) => {
  return parseFloat(firstNum) + parseFloat(secondNum);
};

const substract = (firstNum, secondNum) => {
  return parseFloat(firstNum) - parseFloat(secondNum);
};

const multiply = (firstNum, secondNum) => {
  return parseFloat(firstNum) * parseFloat(secondNum);
};

const divide = (firstNum, secondNum) => {
  return parseFloat(firstNum) / parseFloat(secondNum);
};

const operators = ["+", "-", "*", "/"];

// Getting number buttons
const number1 = document.querySelector("#one-btn");
const number2 = document.querySelector("#two-btn");
const number3 = document.querySelector("#three-btn");
const number4 = document.querySelector("#four-btn");
const number5 = document.querySelector("#five-btn");
const number6 = document.querySelector("#six-btn");
const number7 = document.querySelector("#seven-btn");
const number8 = document.querySelector("#eight-btn");
const number9 = document.querySelector("#nine-btn");
const number0 = document.querySelector("#zero-btn");
const decimal = document.querySelector("#decimal-btn");

// Getting operator buttons
const addBtn = document.querySelector("#add-btn");
const substractBtn = document.querySelector("#substract-btn");
const multiplyBtn = document.querySelector("#multiply-btn");
const divideBtn = document.querySelector("#divide-btn");

// Getting function buttons
const enterBtn = document.querySelector("#enter-btn");
const clearBtn = document.querySelector("#clear-btn");
const backspaceBtn = document.querySelector("#backspace-btn");

// Creating functions to add numbers to the display
const display = document.querySelector(".calculator-display");
const appendToDisplay = (value) => {
  if (display.innerHTML === "0") {
    display.innerHTML = "";
  }
  if (value === "." && !display.innerHTML.includes(".")) {
    display.innerHTML += value;
  }
  if (value !== ".") {
    display.innerHTML += value;
  }
};

// Clear display
const clearDisplay = () => {
  display.innerHTML = "0";
};
clearBtn.addEventListener("click", clearDisplay);

// Backspace function
const backspace = () => {
  display.innerHTML = display.innerHTML.slice(0, -1);
  if (display.innerHTML === "") {
    display.innerHTML = "0";
  }
};
backspaceBtn.addEventListener("click", backspace);

// Adding number values to display
number0.addEventListener("click", appendToDisplay.bind(this, 0));
number1.addEventListener("click", appendToDisplay.bind(this, 1));
number2.addEventListener("click", appendToDisplay.bind(this, 2));
number3.addEventListener("click", appendToDisplay.bind(this, 3));
number4.addEventListener("click", appendToDisplay.bind(this, 4));
number5.addEventListener("click", appendToDisplay.bind(this, 5));
number6.addEventListener("click", appendToDisplay.bind(this, 6));
number7.addEventListener("click", appendToDisplay.bind(this, 7));
number8.addEventListener("click", appendToDisplay.bind(this, 8));
number9.addEventListener("click", appendToDisplay.bind(this, 9));
// Adding decimal value to display
decimal.addEventListener("click", appendToDisplay.bind(this, "."));
