// Challenge 1: Find the Largest Palindrome
// Write a function to find the largest palindrome made from the product of any two numbers between 0 and 1000
function getlargestpalindrome(maxnumber){
let largestpalindrome = 0;

for (let i = 0; i <= maxnumber; i++){
    for (let j = i; j <= maxnumber; j++) {
     const result = i * j;
     //check if it is palindrom and largest
     if (result.toString()=== result.toString().split('').reverse().join('') && result > largestpalindrome){
        largestpalindrome = result;
     }
        
    }
}
return largestpalindrome;
}


// Usage examples:
console.log(getlargestpalindrome(1000));// 906609















// Notes: 
// To resolve those tasks you should know what is nested loops in JS.

// Nesting Loops in JavaScript

// Imagine you have a box of chocolates. Each chocolate box has several layers, and each layer has multiple chocolates.

// To eat all the chocolates, you would start with the top layer and eat each chocolate one by one. Once the first layer is done, you move to the next layer, and so on, until all the layers are finished.

// This process of going through chocolates on every layer is like using nested loops in JavaScript.

// Basic Example:

// Imagine you have a 2D grid, like a tic-tac-toe board. To visit each spot on the board, you'd use two loops: one for the rows and one for the columns.

// for (let row = 0; row < 3; row++) {
//     for (let col = 0; col < 3; col++) {
//         console.log(Position is: (${row}, ${col}));
//     }
// }

// Here's what happens:

// We start with the outer loop (representing rows).

// For each row, the inner loop (representing columns) runs completely.

// This means for row 0, we visit columns 0, 1, and 2. Then, for row 1, we again visit columns 0, 1, and 2, and so on.

// The console output will look like:
// Position is: (0, 0)
// Position is: (0, 1)
// Position is: (0, 2)
// Position is: (1, 0)
// ... and so on

// Why do we need nest loops?

// Sometimes, data is multi-dimensional. Think of a game board, a matrix, or even a list of student names in multiple classes. Nested loops help us access and work with such data more effectively.

// -> If something is not clear, don’t forget to ask questions in the #questions channel