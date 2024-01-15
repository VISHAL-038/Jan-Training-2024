// . Write a JS code to find the power of a number using for loop
// Function numPower() to returns power of number for provided exponential value using for loop.

function numPower(num,pow) {
  var res=1; //return 1 for pow=0
  for(var i=0;i<pow;i++){
     res=res*num;
  }
  return res;
}
console.log(numPower(4,3)); //64
console.log(numPower(16,2)); //256