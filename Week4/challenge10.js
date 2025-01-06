// Challenge 10: Palindrome Checker
// Write a function that checks whether a passed string is a palindrome or not.
// A palindrome is a word, phrase, number, or other sequences of characters that reads the same backward or forward.
function palindrome(str) {
    // Normalize the string by converting to lowercase
    const normalizedStr = str.toLowerCase();

    // Check if the string reads the same forward and backward
    return normalizedStr === normalizedStr.split('').reverse().join('');
}

// console.log(palindrome('racecar')); // true
// console.log(palindrome('hello')); // false
// console.log(palindrome('a')); // true
// console.log(palindrome('madam')); // true