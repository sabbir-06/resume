// Challenge 2: Find the Largest Number
// Write a function to find the largest number in the array.
function findLargestNumber(arr) {
    // Initialize a variable to hold the largest number, starting with the first element in the array
    let largest = arr[0];
  
    // Classical for loop to iterate over the array
    for (let i = 1; i < arr.length; i++) {
      // Check if the current number is greater than the current largest number
      if (arr[i] > largest) {
        largest = arr[i]; // Update the largest number
      }
    }
  
    // Return the largest number after iterating through the array
    return largest;
  }
  
//========================

// Usage examples:
console.log(findLargestNumber([1, 2, 3, 4, 5])); // 5
console.log(findLargestNumber([10, 20, 30, 40, 50])); // 50
console.log(findLargestNumber([-1, -2, -3, -4, -5])); // -1


