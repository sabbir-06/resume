// Challenge 9: Find the Longest Word in a String
// Write a function that returns the length of the longest word in the provided sentence.

function findLongestWord(sentence) {
    // Split the sentence into words
    let words = sentence.split(' ');
    // Initialize the length of the longest word to 0
    let longest = 0;
  
    // Loop through each word in the array
    for (let word of words) {
      // Check the length of the current word
      if (word.length > longest) {
        // Update the length of the longest word
        longest = word.length;
      }
    }
  
    // Return the length of the longest word
    return longest;
  }


// Usage examples:
console.log(findLongestWord('The quick brown fox')); // 5
console.log(findLongestWord('Hello world')); // 5
console.log(findLongestWord('')); // 0
console.log(findLongestWord('OneWord')); // 7

