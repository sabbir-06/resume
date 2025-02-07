// Challenge 1: Find the Longest String
// Write a function to find the longest string in the array.

// Function to find the longest string in an array
function findLongestString(arr) {
    // Variable to store the length of the longest string found so far, initially set to 0
    var lgth = 0;
    // Variable to store the longest string found so far, initially undefined
    var longest;
  
    // Loop through each element in the array
    for (var i = 0; i < arr.length; i++) {
      // Check if the current string's length is greater than the length of the longest string found so far
      if (arr[i].length > lgth) {
        // Update the length of the longest string found so far
        lgth = arr[i].length;
        // Update the longest string found so far
        longest = arr[i];
      }
    }
  
    // Return the longest string found in the array
    return longest;
  }

  //================================
 // Usage examples:
console.log(findLongestString(["I", "am", "learning", "JavaScript"])); // "JavaScript"
console.log(findLongestString(["one", "two", "three"])); // "three"
console.log(findLongestString(["1", "22", "333"])); // "333"


const names = ['victoria', 'sergo', 'elizabeth' , 'danial']

let largestname = names[0];
for (let i = 0; i < names.length; i++) {
 const currentName = names[i];
 if (currentName.length> largestname.length){
    largestname = currentName
 }   
    
}

console.log(largestname)