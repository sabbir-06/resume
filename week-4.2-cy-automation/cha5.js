// Challenge 5: Remove Specific Elements
// Write a function that takes an array and a value, and returns a new array with all occurrences of that value removed.


function removeSpecificElement(arr, value) {
    const result = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== value) {
        result.push(arr[i]);
      }
    }
    
    return result;
  }


// Usage examples:
console.log(removeSpecificElement([1, 2, 3, 2, 4, 2], 2)); // [1, 3, 4]
console.log(removeSpecificElement(["a", "b", "c", "b"], "b")); // ["a", "c"]
console.log(removeSpecificElement([5, 6, 7], 8)); // [5, 6, 7]

////using slice method

// function removeSpecificElement(arr, value) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === value) {
//         arr.splice(i, 1);  // Remove the element at index `i`
//         i--; // Adjust index after removing an element to avoid skipping elements
//       }
//     }
//     return arr;
//   }


//using reduce method
// function removeSpecificElement(arr, value) {
//     return arr.reduce((acc, curr) => {
//       if (curr !== value) {
//         acc.push(curr);
//       }
//       return acc;
//     }, []);
//   }

//using filter

// function removeSpecificElement(arr, value) {
//     return arr.filter(element => element !== value);
//   }

