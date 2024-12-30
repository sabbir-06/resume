// Challenge 2: Multi-level conditions
// Write a function called assignGrade that takes a number score and assigns a letter grade based on the score.
function assignGrade(number) {
    if (number >= 90) {
        return 'A';
    } else if (number >= 80 && number <= 89) {
        return 'B';
    } else if (number >= 70 && number <= 79) {
        return 'C'; 
    } else if (number >= 60 && number <= 69) {
        return 'D';
    } else {
        return 'F';
    }
}


// The function should return "A" for scores 90 and above, "B" for scores 80 - 89, "C" for scores 70 - 79, 
// "D" for scores 60 - 69 and "F" for scores below 60.
// Usage examples:
console.log(assignGrade(95)); // "A"
console.log(assignGrade(85)); // "B"
console.log(assignGrade(75)); // "C"
console.log(assignGrade(65)); // "D"
console.log(assignGrade(55)); // "F"

