// array referenced type

let num1 = 6;
let num2= num1;
console.log(num1===num2);
num1++;
console.log(num1===num2);

let arr1 = ['item1','item2'];  //heap memmory .store in stack 
// let arr2 = ['item1','item2'];  -->false
let arr2=arr1;  // address and that both are send by this
arr1.push("item3");
console.log(arr2);
console.log(arr1===arr2);