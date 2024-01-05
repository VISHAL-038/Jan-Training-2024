//for loop in JS

let fruits=["mango","grapes","apple"];
let newFruits = [];
for(let i =0;i<fruits.length;i++)
{
    newFruits.push(fruits[i]);
}
console.log(newFruits);

// for(let k=0;k<fruits.length;k++)   --> show error
for(var k=0;k<10;k++){  //--> var willl givr refernence of varibale outside the codea
    console.log("hi");
}
console.log(k);

let fruit=["mango","grapes","apple","banaa"];
let j=0;
let fr=[];
while(j<fruit.length){
    fr.push(fruit[j])
    j++;
}
console.log(fr);