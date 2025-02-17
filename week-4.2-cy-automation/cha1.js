// Challenge 1: Find the Second Largest Number
// Write a function to find the second largest number in the array.

function findSecondLargestNumber(arr) {
    let first = -Infinity, second = -Infinity; // declare variable with -infinity that ensure any number in array larger this
    for (let num of arr) { // doing loop
        if (num > first) { // check if num greter then num first
            second = first; // if true second become first
            first = num; // new num will be first
        } else if (num > second && num < first) { // if num gretet then second and num less then first
            second = num; // if previous line true second will be first
        }
    }
    return second;
}

// Usage examples:
console.log(findSecondLargestNumber([1, 2, 3, 4, 5])); // 4
console.log(findSecondLargestNumber([10, 20, 30, 40, 50])); // 40
console.log(findSecondLargestNumber([-1, -2, -3, -4, -5])); // -2
