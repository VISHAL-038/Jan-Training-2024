//call() function

const user1 = {
    firstName:"vishal",
    age:20,
    about: function () {
        console.log(`${this.firstName} , ${this.age}`);
    }
}

const user2 = {
    firstName:"vhbv",
    age:26
}

console.log(user1);
console.log(user2);
user1.about.call(user2);   //user 1 ka fucntion call krr de user 2 me
