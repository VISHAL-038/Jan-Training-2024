//create object
const userMethod = {
    about: function () {
        return `my name is ${this.firstName} and age is ${this.age}`;
    },
    is18: function () {
        return this.age >= 18;
    }
}
function createUser(firstName, lastName, email, age, address) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethod.about;
    user.is18 = userMethod.is18;
    return user;
}
//now lets send data to function and get our object
const obj1 = createUser("aman", "sahu", "amanjain123@gmail.com", 2, "uttar pradesh")
console.log(obj1);
const myData = obj1.about();
console.log(myData);
console.log(obj1.is18());



// for multiple objects, we need a function
// function - create object
// 2.)  add key-value pairs
// 3.)  function will return the object

