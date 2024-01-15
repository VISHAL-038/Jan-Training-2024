// Write a JavaScript program to construct the following pattern, using a nested for loop.

// *  
// * *  
// * * *  
// * * * *  
// * * * * * 
// Function to construct the pattern
function constructPattern(rows) {
    for (let i = 1; i <= rows; i++) {
      // Inner loop to print '*' based on the current row number
      for (let j = 1; j <= i; j++) {
        process.stdout.write('* ');
      }
      // Move to the next line after each row
      console.log();
    }
  }
  
  // Call the function with the number of rows
  constructPattern(5);
  