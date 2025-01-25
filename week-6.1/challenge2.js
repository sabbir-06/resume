// Challenge 2: Find the most frequent element in a given array
// Write a function to find the most frequent element in the array. If there are multiple elements that appear a maximum number of times, print the first of them
function mostFrequent(arr, n) {
  let frequencyMap = new Map(); //this our map object to keep track of the frequency
  let maxFrequency = 0; //variable to store the highest frequency found so far
  let mostFrequentElement = null; // variable to store the element that has the highest frequency

  // Count the frequency of each element
  for (let i = 0; i < n; i++) {
    const element = arr[i];
    frequencyMap.set(element, (frequencyMap.get(element) || 0) + 1);

    // Check if this element has the highest frequency so far
    if (frequencyMap.get(element) > maxFrequency) {
      maxFrequency = frequencyMap.get(element);
      mostFrequentElement = element;
    }
  }

  return mostFrequentElement;
}

// Usage example:
let arr = [40, 50, 30, 40, 50, 20, 30, 100, 11, 11];
let n = arr.length;
console.log(mostFrequent(arr, n)); // Outputs: 40
