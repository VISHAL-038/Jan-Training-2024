//if 
//1st les then 0 = freezed
//2nd less then 5 = too cold
//3rd less than 15 = cold air
//4th less than 25 = normal
//5th less than 40 = moderate
//6th number is abover 40 then too hot

let temp = +prompt("enter the number");
console.log(typeof temp);

if(temp<=0){
    console.log(typeof temp);
    console.log("freezed");
    document.write("freezed");
}
else if(temp<=5){
    console.log("too cold");
    document.write("too cold");
}
else if(temp<=15){
    console.log("cold air");
    document.write("cold air");
}
else if(temp<=25){
    console.log("moderate");
    document.write("moderate");
}
else{
    console.log("hot");
    document.write("hot");
}
