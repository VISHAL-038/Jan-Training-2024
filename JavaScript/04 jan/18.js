//for loop

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// console.log("table");
// let num=436;
// for(let j=1;j<=10;j++){
//     console.log(`${num} x ${j} = ${num*j}`);
// }

// 0 to 100 prime numbber 1 and itself

console.log("prime number");
let count=0;
let num=100;
let i,j;
for(j=0;j<=num;j++){
    for(i=1;i<=j;i++)
    {
        if(j%i==0)
            count++;
    }
    if(count==2)
       console.log(j);
    count=0;
}


