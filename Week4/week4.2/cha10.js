// Challenge 10: Merge Two Arrays
// Write a function that takes two arrays and merges them into one.

function findSecondLargestNumber(arr) {
    let first = -Infinity;
    let second = -Infinity;
  
    for (let num of arr) {
      if (num > first) {
        second = first;
        first = num;
      } else if (num > second && num < first) {
        second = num;
      }
    }
  
    return second === -Infinity ? null : second;  // Return null if no second largest exists
  }
  
  // Usage examples:
  console.log(findSecondLargestNumber([1, 2, 3])); // 2
  console.log(findSecondLargestNumber([3, 1])); // 1
  console.log(findSecondLargestNumber([10])); // null (no second largest)
  
//alter 

// function mergeArrays(arr1, arr2) {
//     return arr1.concat(arr2);  // Use the concat method to merge both arrays
//   }
  