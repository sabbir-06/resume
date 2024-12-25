// 9 - Older Than Me: Create a function that outputs a string specifying if the person in the example below is older or younger than you."


// Your code here
var myage = 35
function compareAge(name, age){
    if (age > myage){
        console.log(`${name} is oler than me`)
    } else {
        console.log(`${name} is younger than me `)
    }
}




compareAge("Joel", 36) // ➞ "Joel is older than me."
compareAge("Samuel", 24) // ➞ "Samuel is younger than me."
compareAge("Lily", 28) // ➞ "Lily is oder than me."
