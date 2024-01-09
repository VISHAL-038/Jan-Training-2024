//arrow function
const obj1={
    firstName:"amn",
    age:23,
    about: () => {
        console.log(this);
        console.log(`${this.firstName}`);
    }
}
obj1.about();