// Challenge 4: Check If Array Contains Element
// Write a function that takes an array and an element, and checks if the array contains that element.


function containsElement(arr, element) {
    // Loop through each item in the array
    for (let i = 0; i < arr.length; i++) {
        // Check if the current item matches the element
        if (arr[i] === element) {
            return true; // Return true if a match is found
        }
    }
    // If no match is found, return false
    return false;
}

// function containsElement(arr, element) {
//     return arr.includes(element); 
//   }
  
//   // Usage examples:
//   console.log(containsElement([1, 2, 3, 4, 5], 3)); // true
//   console.log(containsElement(["a", "b", "c", "d"], "e")); // false


// Usage examples:
console.log(containsElement([1, 2, 3, 4, 5], 3)); // true
console.log(containsElement(["a", "b", "c", "d"], "e")); // false
