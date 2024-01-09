//method
//function inside object
//fpr local variables we can use this

const person={
    firstName:"vishal",
    age:20,
    //the name of the function is key
    //about (){} => shortcut
    about: function (){
        console.log(this);    //object
        console.log(`my name is ${this.firstName} and age is ${this.age}`);
        console.log(`my name is ${person.firstName} and age is ${person.age}`);
    }
}
// console.log(person.about,"without paranthesis");
// console.log(person.about(),"with paranthesis");
person.about(); 
console.log(person);
console.log(this);  //window object


// dry : don't repeat yourself