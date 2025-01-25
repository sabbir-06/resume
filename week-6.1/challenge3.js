// Challenge 3: Count positive and negative numbers in an array
// Write a function to count positive and negative numbers in an array


function countPositiveAndNegative(arr) {
    let positiveCount = 0;
    let negativeCount = 0;
  
    // Iterate through the array to count positive and negative numbers
    for (let num of arr) {
      if (num > 0) {
        positiveCount++;
      } else if (num < 0) {
        negativeCount++;
      }
    }
  
    return { positiveCount, negativeCount };
  }
  
  // Usage example:
  let arr = [10, 20, -1, 22, 99, 20, -9];
  const { positiveCount, negativeCount } = countPositiveAndNegative(arr);
  console.log(`The negative numbers in an array is ${negativeCount}`); // Outputs: "The negative numbers in an array is 2"
  console.log(`The positive numbers in an array is ${positiveCount}`); // Outputs: "The positive numbers in an array is 5"
  

