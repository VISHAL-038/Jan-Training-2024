function createUser (firstName,lastName,email, age, address) {
    //this seprate both this.firstName=firstName
    //reference and creating object
    const user=Object.create(createUser.prototype);
    user.firstName=firstName;
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.address=address;
    return user;

    // by using this

    // this.firstName=firstName;
    // this.lastName=lastName;
    // this.email=email;
    // this.age=age;
    // this.address=address;
}

createUser.prototype.about = function(){
    return `${this.firstName} , ${this.lastName} , ${this.email} , ${this.age} , ${this.address}` ;
}
createUser.prototype.is18 = function(){
    return this.age>=18;
}

//now let send data to function and get our objects
const obj1=createUser("aman","saho","aman123@gmail.com",23,"kharar");
console.log(obj1);
console.log(createUser.prototype);
console.log(obj1.about());
console.log(obj1.is18());

//by using this

// const p1 = new createUser("aman","saho","aman123@gmail.com",23,"kharar");
// console.log(p1);
