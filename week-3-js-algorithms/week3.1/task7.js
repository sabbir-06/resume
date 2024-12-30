// Challenge 7: FizzBuzz Simplified
// Write a function fizzBuzzSimplified that takes a number as an argument. If the number is divisible by 3, 
// return "Fizz". If the number is divisible by 5, return "Buzz". If the number is divisible by both 3 and 5, 
// return "FizzBuzz". If the number is not divisible by 3 or 5, return the number.

function fizzBuzzSimplified(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return "FizzBuzz"; // Divisible by both 3 and 5
    } else if (number % 3 === 0) {
        return "Fizz"; // Divisible by 3
    } else if (number % 5 === 0) {
        return "Buzz"; // Divisible by 5
    } else {
        return number; // Not divisible by 3 or 5
    }
}

//Usage examples:
console.log(fizzBuzzSimplified(3)); // "Fizz"
console.log(fizzBuzzSimplified(5)); // "Buzz"
console.log(fizzBuzzSimplified(15)); // "FizzBuzz"
console.log(fizzBuzzSimplified(2)); // 2


//JavaScript evaluates if...else if...else conditions in order, stopping as soon as it finds a true condition.
//  This is known as short-circuiting.
///The "FizzBuzz" condition (number % 3 === 0 && number % 5 === 0) must come first because it's more specific.
//If "Fizz" or "Buzz" are checked first, they will match prematurely for numbers divisible by both 3 and 5.
