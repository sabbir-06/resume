// Challenge 8: Find the Most Frequent Element
// Write a function that finds the most frequent element in an array.

function findMostFrequentElement(arr) {
    const frequencyMap = {}; // object  // to store frequency of each element
    let maxCount = 0;  // will store the highest frequency
    let mostFrequentElement = null;  // To store the element with the highest frequency
  
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      
      // Increment the frequency of the current element
      frequencyMap[element] = (frequencyMap[element] || 0) + 1;
  
      // Update the most frequent element if the current frequency is higher
      if (frequencyMap[element] > maxCount) {
        maxCount = frequencyMap[element];
        mostFrequentElement = element;
      }
    }
  
    return mostFrequentElement;
  }
  
  // Usage examples:
  console.log(findMostFrequentElement([1, 2, 3, 2, 4, 2])); // 2
  console.log(findMostFrequentElement(["a", "b", "c", "b", "b"])); // "b"
  console.log(findMostFrequentElement([5, 5, 5, 6, 6, 7])); // 5
  


  ///using map

//   function findMostFrequentElement(arr) {
//     const frequencyMap = new Map();  // Use a Map instead of an object
//     let maxCount = 0;
//     let mostFrequentElement = null;
  
//     for (let i = 0; i < arr.length; i++) {
//       const element = arr[i];
  
//       // Increment the frequency of the current element
//       frequencyMap.set(element, (frequencyMap.get(element) || 0) + 1);
  
//       // Update the most frequent element if necessary
//       if (frequencyMap.get(element) > maxCount) {
//         maxCount = frequencyMap.get(element);
//         mostFrequentElement = element;
//       }
//     }
  
//     return mostFrequentElement;
//   }
  
 