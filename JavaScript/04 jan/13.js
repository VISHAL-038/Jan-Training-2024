// if else

// let num = 10;
// if(num<18){
//     console.log("teenager");
// }
// else{
//     console.log(adult);
// }

//second largest number
let num1=10;
let num2=20;
let num3=30;
if(num1>num2 && num1>num3){
    console.log(`the ${num1} is greater`);
}
else if(num2>num1 && num2>num3){
    console.log(`the ${num2} is greater`);
}
else{
    console.log(`the ${num3} is greater`);
}

console.log("even or odd number");
let num4=prompt("enter a number");
if(num4%2==0){
    console.log("even");
}
else{
    console.log("odd");
}