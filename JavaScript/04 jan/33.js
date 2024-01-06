//arrow function


function s(a, b) {
    return a * b
}
const sum = (a, b) => {
    console.log(a * b);
    // console.log(this); ->window object
}
sum(2, 7);
console.log(s(2, 7));