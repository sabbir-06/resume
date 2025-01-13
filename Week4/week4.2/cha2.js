// Challenge 2: Find All Palindromes in an Array
// Write a function to find all the palindromes in an array of strings.

function findPalindromes(arr) {
    const palindromes = []; // Initialize an empty array to store palindromes

    for (let str of arr) {
        const normalizedStr = str.toLowerCase(); // Convert the string to lowercase
        if (normalizedStr === normalizedStr.split('').reverse().join('')) {
            palindromes.push(str); // Add the palindrome to the result array
        }
    }

    return palindromes; // Return the array of palindromes
}

// Usage examples:
console.log(findPalindromes(["racecar", "hello", "madam", "world"])); // ["racecar", "madam"]
console.log(findPalindromes(["noon", "deed", "civic"])); // ["noon", "deed", "civic"]
console.log(findPalindromes(["apple", "banana", "cherry"])); // []



//optimised way to do this

// function findPalindromes(arr) {
//     return arr.filter(str => {
//         const normalizedStr = str.toLowerCase();
//         return normalizedStr === normalizedStr.split('').reverse().join('');
//     });
// }
