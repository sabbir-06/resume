// Challenge 8: Temperature Checker
// Write a function called checkTemp that takes a temperature in Fahrenheit as an argument.
// If the temperature is below 32, return "Freezing". If it's 32 - 50, return "Cold". 
// If it's 51 - 70, return "Mild". If it's 71 - 90, return "Warm". If it's above 90, return "Hot".

function checkTemp(Fahrenheit) {
    if (Fahrenheit < 32) {
        return "Freezing";
    } else if (Fahrenheit >= 32 && Fahrenheit <= 50) {
        return "Cold";
    } else if (Fahrenheit >= 51 && Fahrenheit <= 70) {
        return "Mild";
    } else if (Fahrenheit >= 71 && Fahrenheit <= 90) {
        return "Warm";
    } else if (Fahrenheit > 90) {
        return "Hot";
    } else {
        return "Invalid temperature"; // Handle unexpected input
    }
}


//Usage examples:
console.log(checkTemp(30)); // "Freezing"
console.log(checkTemp(45)); // "Cold"
console.log(checkTemp(65)); // "Mild"
console.log(checkTemp(75)); // "Warm"
console.log(checkTemp(95)); // "Hot"