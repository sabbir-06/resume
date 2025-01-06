// Challenge 6: Factorial a Number
// Write a function that takes a number as an argument and returns the factorial of that number.


function factorial(num) {
    if (num === 0 || num === 1) {
        return 1; // Base case: factorial of 0 or 1 is 1
    }

    return num * factorial(num - 1); // Recursive call
}

// Usage examples:
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(10)); // 3628800