// static keyword
//static variables are called by using their class name.
// if there is no class then there is no use of static

class abc {
    static name = "vishal";
    static age = 15;
    //name is static but variable is not
    static fun(a,b){
        // console.log("this is static function");
        return a + b ;
    }
    static{
        console.log("static keyword");
    }
}
class xyz extends abc{
    static fun(a,b){
        return a+b;
        // return a-b;
        // return a*b; 
        // return a/b;
    }
}


let firstName = abc.name;
console.log(abc.name , "<name by abc>");
console.log(firstName,"<firstName>");;
// abc.fun(5,6);
console.log(abc.fun(5,6));
console.log(xyz.fun(20,30));