//3 - Create a function called divideByTwo. It should accept 1 parameter, divide it  by 2 and return the result of
//the division


function divideByTwo(numberToDivide) {
    // Add your code here

return numberToDivide/2;
  }
  
console.log(divideByTwo(6)) // 3 
console.log(divideByTwo(105)) // Results in 52.5
  
// // FYI. Same thing can be achieved by assigning result to const first
// const result = divideByTwo(6)
// console.log(result) // 3

//return a element of array

function divideByTwo(arr) {
  let num = [];
  for (let i = 0; i < arr.length; i++) {
    num.push(arr[i] / 2);
  }

  return num;
}

console.log(divideByTwo([12, 4, 44]));
//////////////////////// without function

let divideByTwo = [12, 22, 35, 66];

let num = [];

for (let i = 0; i < divideByTwo.length; i++) {
  num.push(divideByTwo[i] / 2);
}

console.log(num);


////another ways

let divideByTwo = [12, 24, 42, 66];

let num = divideByTwo.map(num => num / 2);

console.log(num); // Output: [6, 12, 21, 33]
