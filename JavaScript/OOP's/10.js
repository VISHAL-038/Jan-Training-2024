//method overriding
//overriding -> function parameter same -> two class have same name of a function
//overloading -> function parameter not same

//super class
class parent{
    fun(){
        console.log("Parent function called");
    }
}

//sub class
class child extends parent{
    fun(){
        console.log("ok");
    }
}
const obj = new child();
obj.fun();