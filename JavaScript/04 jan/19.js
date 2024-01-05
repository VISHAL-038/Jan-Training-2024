//Reverse a Number
 
let num=15389;
//num =98351
let r_n=0;
while(num>0){
    let digit= num%10;
    r_n = r_n * 10 + digit;
    // num=num/10;
    num=Math.floor(num/10);
}
console.log(r_n);