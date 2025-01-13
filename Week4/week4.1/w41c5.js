// Challenge 5: Remove Duplicate Elements
// Write a function that takes an array and returns a new array with duplicate elements removed.

// function removeDuplicates(arr) {
//     return Array.from(new Set(arr)); //A Set in JavaScript is a collection of unique values.and .from() Converts the Set back into an array.
//   }

  //this another method
//   function removeDuplicates(arr) {
//     return [...new Set(arr)];
// }

function removeDuplicates(arr) {
    // Create an empty array to store unique elements
    let uniqueArray = [];

    // Loop through each element in the input array
    for (let i = 0; i < arr.length; i++) {
        // Check if the current element is not already in the unique array
        if (!uniqueArray.includes(arr[i])) {
            // Add the element to the unique array
            uniqueArray.push(arr[i]);
        }
    }

    // Return the array with duplicates removed
    return uniqueArray;
}
  
  // Usage examples:
  console.log(removeDuplicates([1, 2, 2, 3, 3, 4])); // [1, 2, 3, 4]
  console.log(removeDuplicates(["a", "a", "b", "b", "c"])); // ["a", "b", "c"]

