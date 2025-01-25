// Challenge 7: Find Odd Numbers
// Write a function that takes an array of numbers and returns a new array with only the odd numbers.

function findOddNumbers(arr) {
    // Initialize an empty array to store odd numbers
    let oddNumbers = [];

    // Loop through the input array
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i]; // Access each number in the array

        // Check if the number is odd
        if (num % 2 !== 0) {
            oddNumbers.push(num); // Add the odd number to the oddNumbers array
        }
    }

    // Return the array with odd numbers
    return oddNumbers;
}

// Usage examples:
console.log(findOddNumbers([1, 2, 3, 4, 5])); // [1, 3, 5]
console.log(findOddNumbers([2, 4, 6, 8, 10])); // []



// //another way to do this using push
// function findOddNumbers(arr) {
//     return arr.filter(num => num % 2 !== 0); //arr.filter() is a built-in JavaScript method that creates a new array containing only the elements that pass a certain condition.
//   }
  
