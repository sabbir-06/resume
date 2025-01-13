// Challenge 2: Concatenate Array Elements
// Write a function that takes an array of strings and concatenates all the elements into one string.
function concatenateElements(arr) {
    return arr.join(''); // .join build-in method to join all elements in the array. and ('') will tell method to avoid any seperator between elements
    
}

// Usage examples:
console.log(concatenateElements(["Hello", "world"])); // "Helloworld"
console.log(concatenateElements(["I", "love", "JavaScript"])); // "IloveJavaScript"