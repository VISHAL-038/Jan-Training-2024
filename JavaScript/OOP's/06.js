//create object
// const user1={
//     firstName : "aman",
//     lastName : "gupta",
//     email :"test123@gmail.com",
//     age:20,
//     address : "sarkhgat",
//     about: function(){
//         return `${this.firstName} , ${this.lastName} , ${this.email} , ${this.age} , ${this.address}` ;
//     },
//     is18:function(){
//         return this.age>=18;
//     }
// }
// const aboutMe = user1.about();
// console.log(aboutMe);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function for multiple objects
//function - create object
//2) add key value pair
//3) function will return the object

const userMethod = {
    about: function(){
        return `${this.firstName} , ${this.lastName} , ${this.email} , ${this.age} , ${this.address}` ;
    },
    is18:function(){
        return this.age>=18;
    }
}
function createUser (firstName,lastName,email, age, address) {
    //this seprate both this.firstName=firstName
    const user={};
    user.firstName=firstName;
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.address=address;
    //reference
    user.about = userMethod.about;
    user.is18 = userMethod.is18;
    return user;
}
//now let send data to function and get our objects
const obj1=createUser("aman","saho","aman123@gmail.com",23,"kharar");
console.log(obj1);
const myData = obj1.about();
console.log(myData);
const i18 = obj1.is18();
console.log(i18);
const obj2=createUser("chaman","saho","chaman123@gmail.com",29,"kharar");
console.log(obj2);
const obj3=createUser("pawan","saho","pawan123@gmail.com",23,"kharar");
console.log(obj3);