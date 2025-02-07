// Challenge 5: Sum of Numbers
// Write a function to find the sum of all numbers in the array.

function sumNumbers(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}
//.reduce() is used to process an array and return a single accumulated result (e.g., sum, product, concatenated string, etc.).



//===================


//Usage examples:
console.log(sumNumbers([1, 2, 3, 4, 5])); // 15
console.log(sumNumbers([10, 20, 30, 40, 50])); // 150
console.log(sumNumbers([-1, -2, -3, -4, -5])); // -15

