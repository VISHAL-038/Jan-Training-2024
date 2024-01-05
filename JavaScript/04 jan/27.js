//destructing array
// concept of ES6

const value = ["item1","item2","item3"];
let value1 = value[0];
let value2=value[1];
console.log(`value 1 is ${value1}`);
console.log(`value 2 is ${value2}`);

let [value3,value4,value5,value6]= value;
console.log(value3);
console.log(value4);
console.log(value5);
console.log(value6);


const fruit =["mango","apple","grapes",1,2,3];

let[str1, ,str2,...num]=fruit;

console.log(str1);
console.log(str2);
console.log(num);