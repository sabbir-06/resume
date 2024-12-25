//7 - Create the function. It should accept two string parameters and return the longer one

// Your code here

function longerString(str1, str2){
    if (str1.length > str2.length) {
        return str1
    } else {
        return str2;
    }
}
  
console.log(longerString('codemify', 'test')) // codemify
console.log(longerString('automation', 'coding')) // automation
console.log(longerString('automation', 'the codemify')) // the codemify