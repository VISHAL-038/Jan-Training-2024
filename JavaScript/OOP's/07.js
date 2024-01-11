//function ===> function * object

//every function has a thing known as prototype.
//only function provide prototype properties.

function hello(){
    console.log("Hello World!");
}
hello();
console.log(hello.name);

hello.lastName = "saho";
console.log(hello.lastName);
//function have free space in which my data is stored.

hello.ard = function() {
    console.log("hello");
}
console.log(hello.ard);

console.log(hello.prototype); //-> it will give constructor which is the empty space.

hello.prototype.age = 23;
hello.prototype.xyz = "xyz";
hello.prototype.run = function () {
    console.log("i am running");
}


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function Person () {
    this.name = 'John',
    this.age = 23
}

const person1 = new Person();

Person.prototype.gender = 'male'

// checking the prototype value
console.log(Person.prototype); // { ... }
console.log(person1.gender);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//object doesn't have prototype . function only have prototype
const obj1={};
function fun(){

}
if(obj1.prototype){
    console.log(`prototype is present`);
}
else{
    console.log(`prototype is not present`);
}