const num1Input:any = document.getElementById('num1');
const num2Input:any = document.getElementById('num2');
const addButton:any = document.querySelector('button');

function add(a: number,b: number) {
    return a + b;
}

function printResult(result) {
    console.log(result);
}

// const result = add(5, 3)
// let isDone = false;
// printResult(result);

addButton.addEventListener('click', () => {
    const num1 = +num1Input.value;
    const num2 = +num2Input.value;
    const result = add(num1, num2)
    printResult(result);
})