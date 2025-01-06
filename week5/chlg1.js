// find longest string
function longestString(arr) {
    let longest = "";
    //for ..of connector to simplified array
    let str;
    for (str of arr){
        if (str.length > longest.length){
            longest = str;

        }
    }

    return longest;
    
}



console.log(longestString(['hello', 'my love', 'grantee', 'saddam hussain', 'george runing bush']))