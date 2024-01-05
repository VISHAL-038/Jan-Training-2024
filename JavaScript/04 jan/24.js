//clone a array

let arr1 = ['mohan','ramna','chaman'];
let arr2 = arr1;

console.log(arr1 === arr2);

//method 1 
let brr1 = [1,2,3,4];
let brr2 = [];
// brr2=brr1.slice(0);  -> only add old elements
brr2=brr1.slice(0).concat("aman");
console.log(brr2);
console.log(brr1===brr2);

//method 2
let crr1=[1,3,4,3,2];
let crr2=[];
// crr2=[].concat(crr1);  ->only add old element
crr2=[].concat(crr1,["item new","item new 2"]);
console.log(crr2);
console.log(crr1===crr2);

//method 3
let drr1=[1.43,5,43,21,24,3];
let drr2=[];
// drr2=[...drr1];  add old element
drr2=[...drr1,'apple','mango'];  // spread operator used for cloning
console.log(drr2);
console.log(drr1===drr2);