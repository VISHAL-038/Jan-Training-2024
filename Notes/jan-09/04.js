//

const obj1 = {
    firstName: "aman",
    age: 22,
    about: function () {
        console.log(`${this.firstName}, ${this.age}`);
    }
}
//
const myFunc = obj1.about;
myFunc();

const myFun = obj1.about.bind(obj1);
myFun();


// const obj2 = {
//     firstName: "nisha",
//     age: 17
// }
// console.log(obj1);
// // using call function
// about.call(obj1, "yoga", "honey singh");
// console.log(obj1);

// apply()
// about.apply(obj2, ["music", "sakira"]);

//bind() function

// const mydata = about.bind(obj1, "", "");
// mydata();
// console.log(obj1);


