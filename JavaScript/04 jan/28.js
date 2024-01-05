//Object in js
//array is not sufficient 
//for real world data
//key value pair
//there is no indexing in this

let obj = {};
let arr = [];

console.log(typeof obj);
console.log(typeof arr);

console.log(Array.isArray(obj));
console.log(Array.isArray(arr));

//how to create a object

let person = {
    //key:value pair
    name:"arun",
    age:12,
    gen:"male",
    "x hobbies":["drawing","photography"]
};
person.lastName="sahu";
console.log(person);

console.log(person.age);
console.log(person["x hobbies"]); //bracket notation