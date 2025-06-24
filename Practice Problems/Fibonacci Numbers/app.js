/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable require-jsdoc */
function fibonacciNumbers(numShouldGenerate) {
    startingNum = 1;
    previousNum = 0;
    for (let i = 0; i < numShouldGenerate; i++) {
        startingNum += previousNum;
        if (i === 0) {
            console.log(startingNum);
        } else {
        previousNum = startingNum - previousNum;
        console.log(startingNum);
    }
    }
}

fibonacciNumbers(20);
