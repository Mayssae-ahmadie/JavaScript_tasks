let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] % 3 == 0 && myArray[i] % 5 == 0) {
        console.log(myArray[i] + "Divi 3&5");
    }
    else if (myArray[i] % 3 == 0) { console.log(myArray[i] + "Divi 3"); }
    else if (myArray[i] % 5 == 0) { console.log(myArray[i] + "Divi 5"); }
    else { console.log(myArray[i]); }
}