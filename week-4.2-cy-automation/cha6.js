// Challenge 6: Find the Longest Substring Without Repeating Characters
// Write a function that takes a string and returns the length of the longest substring without repeating characters.

function findLongestSubstringWithoutRepeats(str) {
    let start = 0;  // Starting index of the window
    let maxLength = 0;  // To store the maximum length of substring found
    let seenChars = new Map();  // To track characters and their most recent index
  
    for (let end = 0; end < str.length; end++) {
      // If the character at `str[end]` is already in the window
      if (seenChars.has(str[end])) {
        // Move the start of the window right after the last occurrence of the repeated character
        start = Math.max(start, seenChars.get(str[end]) + 1);
      }
      // Update the character's most recent index
      seenChars.set(str[end], end);
      
      // Calculate the length of the current window
      maxLength = Math.max(maxLength, end - start + 1);
    }
  
    return maxLength;
  }

// Usage examples:
console.log(findLongestSubstringWithoutRepeats("abcabcbb")); // 3 ("abc")
console.log(findLongestSubstringWithoutRepeats("bbbbb")); // 1 ("b")
console.log(findLongestSubstringWithoutRepeats("pwwkew")); // 3 ("wke")