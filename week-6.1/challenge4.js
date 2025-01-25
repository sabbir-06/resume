// Challenge 4: Find duplicates in two arrays 
// Write a function that takes two arrays as arguments and returns an array of values that are repeated 
// more than once across the two input arrays
function findDuplicates(array1, array2) {
  // Combine the two arrays
  const combinedArray = [...array1, ...array2]; //this is spread operator(...), it is used to combine and copying and function argument
  // Find duplicates
  const duplicates = combinedArray.filter((item, index) => combinedArray.indexOf(item) !== index);

  // Remove duplicates from the list of duplicates
  return [...new Set(duplicates)];
}

// Usage example:
const array1 = [1, 2, 3, 4, 5, 5];
const array2 = [4, 5, 6, 7, 7, 8];

console.log(findDuplicates(array1, array2)); // Outputs: [4, 5, 7]

  