//class
class Animal {
    constructor(name , age) {
        this.name =  name;
        this.age = age;  
    }
    about(){
        return `Name is ${this.name}`;
    }
    isFast(){
        return this.age >= 2;
    }
    isCute(){
        return true;
    }
}
const obj1 = new Animal("dog",1);
// console.log(Animal);
console.log(obj1.about());
console.log(obj1.isFast());
console.log(obj1.isCute());
console.log(obj1.name);
console.log(obj1.age);

class Dog extends Animal{
    constructor(name , age , speed){
        // Super keyword is used to access data member of parent class.
        super(name,age);
        this.speed = speed;
    }
    dogSpeed(){
        return `${this.name} can run with speed of ${this.speed}`;
    }
}
const d1= new Animal("jerry",1);
console.log(d1);
const d2 = new Dog("Tommy",5,123);
console.log(d2.dogSpeed());