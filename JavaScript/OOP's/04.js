//
function about(hobby , favSinger){
    console.log(`my name is ${this.firstName} ,age is ${this.age} ,hobby is ${hobby} and favSinger is ${favSinger}`);
}

const obj1 = {
    firstName: "vishl",
    age:20
}
const obj2 = {
    firstName: "niti",
    age:20
}


//using call function
about.call(obj1 ,"gym","random" );
//return function

//apply()
about.apply(obj2,["music","karan aujala"])
//return function

//bind
let a = about.bind(obj1);
a();