// Challenge 9: Find the Intersection of Two Arrays
// Write a function that takes two arrays and returns an array that is the intersection of the two arrays.
//( elements that are present in both arrays

function findIntersection(arr1, arr2) {
    const set1 = new Set(arr1);  // Convert the first array to a Set for efficient lookup
    const intersection = [];
  
    for (let i = 0; i < arr2.length; i++) {
      if (set1.has(arr2[i])) {  // Check if the element exists in the first array
        intersection.push(arr2[i]);  // Add the element to the result array
        set1.delete(arr2[i]);  // Remove it from the Set to avoid duplicates
      }
    }
  
    return intersection;
  }
  

// Usage examples:
console.log(findIntersection([1, 2, 3], [3, 4, 5])); // [3]
console.log(findIntersection(["a", "b", "c"], ["b", "c", "d"])); // ["b", "c"]
console.log(findIntersection([10, 20, 30], [40, 50, 60])); // []



//alternative filter method

// function findIntersection(arr1, arr2) {
//     return arr2.filter(element => arr1.includes(element));  // Filter elements in arr2 that are also in arr1
//   }
  
