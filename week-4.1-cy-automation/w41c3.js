// Challenge 3: Reverse Array
// Write a function that takes an array and returns a new array with the elements in reverse order.

function reverseArray(arr) {
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
         reversedArr.push(arr[i]);
        //reversedArr = (arr[i]);
    }
    return reversedArr;
}

// function reverseArray(arr) {
//     return arr.slice().reverse(); //.slice copy the input array which ensure original array is unchanged and .reversed reversed the copy array. 
//   }
  

// Usage examples:
console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(reverseArray(["a", "b", "c", "d"])); // ["d", "c", "b", "a"]

