// Write a function to find the longest string in the array

function findLongestString(arr){
    var lfsf = 0;
    var longest = '';
    for (let i = 0; i < arr.length; i++) {
       if ( arr.length > lfsf){
        lfsf = arr[i].length
        longest = arr[i];
       }
        
    }
   return longest;
}



console.log(findLongestString(["I", "am", "learning", "JavaScript"])); // "JavaScript"
console.log(findLongestString(["one", "two", "three"])); // "three"
console.log(findLongestString(["1", "22", "333"])); // "333"