// Challenge 4: Find Common Elements Between Two Arrays
// Write a function that takes two arrays and returns an array of elements that are common to both.

function findCommonElements(arr1, arr2) {
    const commonElements = [];
    
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
          commonElements.push(arr1[i]);
          break; // Prevents duplicate entries if the same element is found multiple times
        }
      }
    }
    
    return commonElements;
  }

// Usage examples:
console.log(findCommonElements([1, 2, 3], [3, 4, 5])); // [3]
console.log(findCommonElements(["a", "b", "c"], ["b", "c", "d"])); // ["b", "c"]
console.log(findCommonElements([10, 20, 30], [40, 50, 60])); // []



// // /////===========================

// function findCommonElements(arr1, arr2) {
//     return arr1.filter(element => arr2.includes(element));
//   }

// ////=========================


