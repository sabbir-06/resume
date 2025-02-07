// Challenge 3: Truncate String 
// Write a function called truncateString that truncates a string if it is longer than the given maximum string length.
function truncateString (str, maxlen){
    if (str.length > maxlen){
        return (str.slice(0, maxlen - 3) + '...')
    } else{
        return str;
    }
}

// The function should return the truncated string with a "..." ending.
// Note that the three dots at the end add to the string length.
// Usage examples:
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11)); // "A-tisket..."
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 14)); // "Peter Piper..."