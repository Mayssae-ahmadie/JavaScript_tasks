function addTwoNumbers(numberOne, numberTwo) {
    let sum = numberOne + numberTwo;
    console.log(sum)
}
addTwoNumbers(5, 10);

function subtractTwoNumbers(numberOne, numberTwo) {
    let total = numberTwo - numberOne;
    console.log(total)
}
subtractTwoNumbers(25, 50);

function multiplyTwoNumbers(numberOne, numberTwo) {
    let total = numberOne * numberTwo;
    console.log(total)
}
multiplyTwoNumbers(10, 5);

function divideTwoNumbers(numberOne, numberTwo) {
    let total = numberOne / numberTwo;
    console.log(total)
}
divideTwoNumbers(100, 5);

function myCalculator(operation, numberOne, numberTwo) {
    if (operation == addTwoNumbers) return addTwoNumbers(numberOne, numberTwo);
    else if (operation == subtractTwoNumbers); return subtractTwoNumbers(numberOne, numberTwo);
}
myCalculator(addTwoNumbers, 2, 5);
myCalculator(subtractTwoNumbers, 10, 5);
