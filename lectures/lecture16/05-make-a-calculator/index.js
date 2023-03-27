function addNumbers() {
    // Your job: 
    // 1. Access the first number that the user typed in and store it
    //    as a variable.
    let firstNumber = document.querySelector('#num1').value;
    firstNumber = Number(firstNumber);
    let secondNumber = document.querySelector('#num2').value;
    secondNumber = Number(secondNumber);
    let sum = firstNumber + secondNumber;


    document.querySelector('#answer').innerHTML = sum;
    // 2. Access the second number that the user typed in and store it
    //    as a variable.
    // 3. Convert the values stored inside of the two variables to a 
    //    number (so that you can do math)!
    // 4. Add the two numbers together.
    // 5. Write the result to the #answer section
}

function subtractNumbers() {
    document.querySelector('#answer').innerHTML = difference;
    let firstNumber = document.querySelector('#num1').value;
    firstNumber = Number(firstNumber);
    let secondNumber = document.querySelector('#num2').value;
    secondNumber = Number(secondNumber);
    let difference = firstNumber - secondNumber;
    // Same as above but subtract!
}

function multiplyNumbers() {
    // Same as above but multiply!
}

function divideNumbers() {
    // Same as above but divide!
}

