//function
function sum(a,b,){
    return a+b;
}
console.log(sum(2,3));
console.log(sum(2));

//______________________________________________________

function sum1(a,b,c=10){
    return a+b+c;
}
console.log(sum1(1,43,8));
console.log(sum1(1,4));

//___________________________________________________

function sum2(a,b,...numbers){
    console.log(a,b,numbers,"message");
}
sum2(1,5,2,4,2,4);

//______________________________________________________

// console.log(computation()(2,4));  //this concept is know as hosting when a function is called before defining it. it is executed
// area function is closure of computation function
function computation(){
    let x = 5;
    let y = 5;
    function area(){
        return x+y;
    }
    return area;
}
console.log(computation()());
