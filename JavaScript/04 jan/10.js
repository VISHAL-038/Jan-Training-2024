// underfined and BigInt

let name;
console.log(typeof name);
name = "vis";
console.log(typeof name);


//BigInt
let x=2554354352354335264668;
console.log(x);
console.log(typeof x);
console.log("number limit "+Number.MAX_SAFE_INTEGER);

let x1=2554354352354335264668n;
console.log(x1);
console.log(typeof x1);

console.log();

let x2=BigInt(2554354352354335264668);
let y=12n;
// console.log(x+y);
console.log(x2);
console.log(typeof x2);
// let a= BigInt(+"a");
// console.log(a);