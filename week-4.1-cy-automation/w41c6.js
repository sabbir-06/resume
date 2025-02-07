// Challenge 6: Calculate Average
// Write a function that takes an array of numbers and returns the average.

function calculateAverage(arr) {
    // Check if the array is empty to avoid division by zero
    if (arr.length === 0) {
        return 0; // Return 0 if the array is empty
    }

    // Initialize a variable to store the sum of numbers
    let sum = 0;

    // Loop through the array to calculate the sum of its elements
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // Add each element to the sum
    }

    // Divide the total sum by the number of elements to get the average
    return sum / arr.length;
}

// Usage examples:
console.log(calculateAverage([1, 2, 3, 4, 5])); // 3
console.log(calculateAverage([10, 20, 30, 40, 50])); // 30
console.log(calculateAverage([])); // 0
















//
// function calculateAverage(arr) {
//     if (arr.length === 0) {
//         return 0; // Return 0 if the array is empty
//     }

//     const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//     return sum / arr.length;
// }

// // Usage examples:
// console.log(calculateAverage([1, 2, 3, 4, 5])); // 3
// console.log(calculateAverage([10, 20, 30, 40, 50])); // 30
// console.log(calculateAverage([])); // 0
