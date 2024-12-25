//8 - Equality Check. Create a function that returns true or false that matches the examples below

//code here
function checkEquality(val1, val2) {
    return val1 === val2; // Returns true if both type and value are equal, false otherwise
}

// Test cases
console.log(checkEquality(1, true));  // Output: false. A number and a boolean: the value and type are different
console.log(checkEquality(0, "0"));   // Output: false. A number and a string: the type is different
console.log(checkEquality(1, 1));     // Output: true. A number and a number: the type and value are equal
