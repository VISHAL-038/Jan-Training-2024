//to create a array using constant keyword

// const pi=3.14;
// pi=17;
// console.log(pi);

//in array we can change indirectly using function
const fruits=["mango","apple"];
// console.log(fruits);
// fruits.push("orange");
// console.log(fruits);
// fruits.pop();
// console.log(fruits);

//for of loop   //value
for(let fruit of fruits){
    console.log(fruit);
}

//for in loop  //index
for(let i in fruits){
    console.log(fruits[i],i);
}