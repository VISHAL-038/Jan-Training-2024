// 10-Write a JavaScript program to sum 3 and 5 multiples under 1000.
// Function to calculate the sum of multiples of 3 and 5 under a given limit
function sumMultiples(limit) {
    let sum = 0;
  
    for (let i = 1; i < limit; i++) {
      // Check if the current number is a multiple of 3 or 5
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
  
    return sum;
  }
  
  // Call the function with the limit of 1000
  const result = sumMultiples(1000);
  
  // Print the result
  console.log("The sum of multiples of 3 and 5 under 1000 is:", result);
  