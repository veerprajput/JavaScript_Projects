const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];
let additionLogEntries = [];

function add() {
    const calcDescription = `${currentResult} + ${userInput.value}`
    let initialResult = currentResult
    logEntries.push(calcDescription);
    console.log(logEntries)
    currentResult += parseFloat(userInput.value);
    const logEntry = {
        operation: 'add',
        prevResult: initialResult,
        number: userInput.value,
        result: currentResult,
    };
    additionLogEntries.push(logEntry);
    console.log(additionLogEntries)
    outputResult(currentResult, calcDescription);
}

function subtract() {
    let initialResult = currentResult
    const calcDescription = `${currentResult} - ${userInput.value}`
    logEntries.push(calcDescription);
    console.log(logEntries)
    currentResult -= parseFloat(userInput.value);
    const logEntry = {
        operation: 'subtract',
        prevResult: initialResult,
        number: userInput.value,
        result: currentResult,
    };
    additionLogEntries.push(logEntry);
    console.log(additionLogEntries)
    outputResult(currentResult, calcDescription);
}

function multiply() {
    let initialResult = currentResult
    const calcDescription = `${currentResult} * ${userInput.value}`
    logEntries.push(calcDescription);
    console.log(logEntries)
    currentResult *= parseFloat(userInput.value);
    const logEntry = {
        operation: 'multiply',
        prevResult: initialResult,
        number: userInput.value,
        result: currentResult,
    };
    additionLogEntries.push(logEntry);
    console.log(additionLogEntries)
    outputResult(currentResult, calcDescription);
}

function divide() {
    let initialResult = currentResult
    const calcDescription = `${currentResult} / ${userInput.value}`
    logEntries.push(calcDescription);
    console.log(logEntries)
    currentResult /= parseFloat(userInput.value);
    const logEntry = {
        operation: 'divide',
        prevResult: initialResult,
        number: userInput.value,
        result: currentResult,
    };
    additionLogEntries.push(logEntry);
    console.log(additionLogEntries)
    outputResult(currentResult, calcDescription);
}

function clear() {
    currentResult = 0
    logEntries = [];
    userInput.value = ''
    const logEntry = {
        operation: 'AC',
        prevResult: NaN,
        number: NaN,
        result: NaN,
    };
    additionLogEntries.push(logEntry);
    console.log(additionLogEntries)
    outputResult(currentResult, '0');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
clearBtn.addEventListener('click', clear);

