//4 - Finish the function. It accepts 2 params, adds them up and returns the sum of two


// function sum(a, b) { 
//     // Add code here to return the sum of a and b 
//     return (a+b);
//   }
  
//   console.log(sum(1, 2)) // 3
//   console.log(sum(2, 2)) // 4
//   console.log(sum(55, 2)) // 57


const numbers = [1,2,3,4,5]

let double = []

numbers.forEach((num)=>double.push(num * 2));

console.log(double);


///easy way

function addnum(num1, num2){

    return (num1 + num2) * 2;
 }
 
 console.log(addnum(34, 6));


//another way
 function fun(arr){
    let double = [];
    
    for (let i = 0; i < arr.length; i++) {
       double.push(arr[i] * 2 )
       
    }
    return double;
    
    }
    
    console.log(fun([1, 2,  4, 6, 10 ]));


    //another way

    let num = [1, 3, 5, 8, 10, 4, 7];
var double = [];

for (let i = 0; i < num.length; i++) {
  double.push(num[i] * 2);
}

console.log(double);