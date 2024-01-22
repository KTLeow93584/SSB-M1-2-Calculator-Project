// ====================================
// Functions for prompts and prompted input validation purposes.
function promptValue(description, category) {
  let number = prompt(description);
  if (number === null)
    return null;
  else if (number.trim().length === 0) {
    alert(`The ${category} input cannot be empty. Please try again once it is filled.`);
    return null;
  }

  number = parseFloat(number)
  if (isNaN(number)) {
    alert(`The ${category} input is either not a valid number. Please try again.`);
    return null;
  }

  return number;
}

function promptValuePair() {
  const firstNumber = promptValue("Enter the first number: ", "first number");
  if (firstNumber === null)
    return { "firstNumber": null, "secondNumber": null };
  
  const secondNumber = promptValue("Enter the second number: ", "second number");
  if (secondNumber === null)
    return { "firstNumber": firstNumber, "secondNumber": null };

  return { "firstNumber": firstNumber, "secondNumber": secondNumber };
}
// ====================================
function add() {
  const { firstNumber, secondNumber } = promptValuePair();
  if (firstNumber === null || secondNumber === null)
    return;
  const result = firstNumber + secondNumber;

  alert(`The sum of (${firstNumber} + ${secondNumber}) is ${result}.`);
}

function subtract() {
  const { firstNumber, secondNumber } = promptValuePair();
  if (firstNumber === null || secondNumber === null)
    return;
  const result = firstNumber - secondNumber;

  alert(`The sum of (${firstNumber} - ${secondNumber}) is ${result}.`);
}

function multiply() {
  const { firstNumber, secondNumber } = promptValuePair();
  if (firstNumber === null || secondNumber === null)
    return;
  const result = firstNumber * secondNumber;

  alert(`The sum of (${firstNumber} x ${secondNumber}) is ${result}.`);
}

function divide() {
  const { firstNumber, secondNumber } = promptValuePair();
  if (firstNumber === null || secondNumber === null)
    return;
  if (secondNumber === 0)
  {
    alert(`The value ${firstNumber} cannot be divided by 0. Please try again.`);
    return;
  }
  const result = firstNumber/secondNumber;

  alert(`The sum of (${firstNumber} / ${secondNumber}) is ${result}.`);
}

function modulus() {
  const { firstNumber, secondNumber } = promptValuePair();
  if (firstNumber === null || secondNumber === null)
    return;
  if (secondNumber === 0)
  {
    alert(`The value ${firstNumber} cannot be modulused by 0. Please try again.`);
    return;
  }
  const result = firstNumber % secondNumber;

  alert(`The sum of (${firstNumber} % ${secondNumber}) is ${result}.`);
}

function simpleInterest() {
  const principal = promptValue("Enter the initial balance/principal amount ($): ", "Initial Balance/Principal"); 
  if (principal === null)
    return;

  const interestRate = promptValue("Enter the interest rate (%): ", "Interest Rate");
  if (interestRate === null)
    return;

  const years = promptValue("Enter the investment duration (years): ", "Number of Years");
  if (years === null)
    return;

  const interest = principal * (interestRate * 0.01) * years;

  alert(`The interest (${interestRate}%) earned over ${years} years with a principal of $${principal.toFixed(2)} is $${interest}.`);
}

function celsiusToFahrenheit() {
  const input = promptValue("Enter the Celsius input number: ", "Celsius");
  if (input === null)
    return;
  const result = (input * (9/5)) + 32;
  
  alert(`${input}°C converted to Fahrenheit is ${result.toFixed(2)}°F.`);
}

function fahrenheitToCelsius() {
  const input = promptValue("Enter the Fahrenheit input number: ", "Fahrenheit");
  if (input === null)
    return;
  const result = (input - 32) * (5/9);

  alert(`${input}°F converted to Celsius is ${result.toFixed(2)}°C.`);
}
// ====================================