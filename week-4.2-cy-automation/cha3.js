// Challenge 3: Flatten a Two-Dimensional Array
// Write a function that takes a two-dimensional array and returns a flattened array.


function flattenArray(arr) {
    return arr.flat();
  }
  
  // Usage examples:
  console.log(flattenArray([[1, 2], [3, 4], [5]])); // [1, 2, 3, 4, 5]
  console.log(flattenArray([["a", "b"], ["c", "d"]])); // ["a", "b", "c", "d"]
  console.log(flattenArray([[1], [2], [3]])); // [1, 2, 3]
  


  ///========================================

//   function flattenArray(arr) {
//     return arr.reduce((acc, curr) => acc.concat(curr), []);
//   }
  

// reduce() takes a callback function with two parameters:

// acc (the accumulator): This holds the flattened result as we go through the array.
// curr (the current value): This is each sub-array (e.g., [1, 2], [3, 4], etc.) from the two-dimensional array.
// The function acc.concat(curr) is used inside the callback to merge the current sub-array (curr) with the accumulator (acc), effectively flattening the array.

// reduce() then processes each sub-array in arr, one by one, adding each to the flattened result (acc).


  

