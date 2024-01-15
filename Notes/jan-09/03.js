// call() function

const user1 = {
    firstName: "ravinder",
    age: 21,
    about: function () {
        console.log(`${this.firstName}, ${this.age}`);
    }
}
const user2 = {
    firstName: "ajay",
    age: 22
}
console.log(user1);
user1.about.call(user2);



