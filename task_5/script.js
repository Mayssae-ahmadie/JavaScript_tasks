let myNumbers = [3, 6, 9, 12, 15, 18, 21, 24];

for (let i = 0; i < myNumbers.length; i++) {
    if (myNumbers[i] % 2 == 0) {
        console.log(myNumbers[i] + " The number is even. ");
    }
    else { console.log(myNumbers[i] + " The number is odd. "); }
}