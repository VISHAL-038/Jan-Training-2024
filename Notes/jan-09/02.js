
function printInfo() {
    console.log(`my name is ${this.firstName} and age is ${this.age}`);
}
const user1 = {
    firstName: "ravinder",
    age: 12,
    about: printInfo,
}
const user2 = {
    firstName: "ajay",
    age: 33,
    about: printInfo
}
const user3 = {
    firstName: "vaibhav",
    age: 23,
    about: printInfo
}
// console.log(user1.about());

// console.log(this);
// console.log(window);
// console.log(this === window);
//window object
// inbuilt functions provided by JS

// function myFunc() {
//     console.log("Hello world");
//     console.log(this);
// }
// myFunc();
