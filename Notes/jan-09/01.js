// method
// function inside object

const person = {
    firstName: "mohit",
    age: 44,
    about: function () {
        console.log(this);
        console.log(`my name is ${this.firstName} and age is ${this.age}`);
    }
}
console.log(person);
person.about();

// dry : dont repeat urself



