// Challenge 8: Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz"a
// instead of the number and for the multiples of five print "Buzz". For numbers which are multiples
// of both three and five print "FizzBuzz".
// No need for permutations as there are no arguments to this function. Check the printed output.


//==============================

   function fizzBuzz() {
  // Loop through numbers from 1 to 100
  for (let i = 1; i <= 100; i++) {
    let output = ""; // Initialize an empty string to hold the output

    // Check if the number is a multiple of 3
    if (i % 3 === 0) {
      output += "Fizz"; // Append "Fizz" to the output string
    }

    // Check if the number is a multiple of 5
    if (i % 5 === 0) {
      output += "Buzz"; // Append "Buzz" to the output string
    }

    // If output is not empty, print it; otherwise, print the number
    console.log(output || i);
  }
}

// Call the function to print the output
fizzBuzz();
               