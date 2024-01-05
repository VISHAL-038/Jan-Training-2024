let n1 = 0, n2 = 1;

let n =prompt("enter value of n:")
console.log("Fibonacci series is:");
console.log(n1);
console.log(n2);

for (let i = 0; i < n - 1; i++) {
    const n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
    console.log(n3);
}
