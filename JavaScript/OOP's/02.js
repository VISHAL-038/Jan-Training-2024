function personInfo() {
    console.log(`my name is ${this.firstName} and age is ${this.age}`);
}

const user1 = {
    firstName: "vishal",
    age:20,
    about:  personInfo()
}

const user2 ={
    firstName:"vbhv",
    age:26,
    about:  personInfo()
}

const user3 = {
    firstName:"niti",
    age:20,
    about: personInfo()
}

console.log(personInfo.about());


const abc ={
    firstName : "xys",
    age: 23
}
console.log( abc);