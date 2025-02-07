// Challenge 8: Find Even Numbers
// Write a function that takes an array of numbers and returns a new array with only the even numbers.

function findEvenNumbers(arr){
    return arr.filter(num => num % 2 == 0); //arr.filter() is a built-in JavaScript method that creates a new array containing only the elements that pass a certain condition.
  }


// Usage examples:
console.log(findEvenNumbers([1, 2, 3, 4, 5])); // [2, 4]  
console.log(findEvenNumbers([2, 4, 6, 8, 10])); // [2, 4, 6, 8, 10]



