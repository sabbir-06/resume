// Challenge 7: Check If All Elements Are Unique
// Write a function that checks if all elements in an array are unique.

function areAllElementsUnique(arr) {
    const seen = {};  // Or use a Map if need to store values const seen = new Map(); 
    for (let i = 0; i < arr.length; i++) {
      if (seen[arr[i]]) {
        return false;  // If we've already seen this element, return false
      }
      seen[arr[i]] = true;  // Mark this element as seen
    }
    return true;  // All elements are unique
  }

// Usage examples:
console.log(areAllElementsUnique([1, 2, 3, 4, 5])); // true
console.log(areAllElementsUnique(["a", "b", "c", "a"])); // false
console.log(areAllElementsUnique([10, 20, 30, 40, 50])); // true




// function areAllElementsUnique(arr) {
//     return new Set(arr).size === arr.length;
//   }
// Set: A Set is a collection of unique values. When you convert an array into a Set, any duplicate elements are automatically removed.
// size: The size property of the Set represents the number of unique elements in it.
// If the size of the Set is equal to the length of the array, then all elements in the array are unique; otherwise, there are duplicates.