// Write a JS code to print a 2D array using while loop?

// Sample 2D array
const twoDArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  // Function to print 2D array using a while loop
  function print2DArray(arr) {
    let i = 0;
    while (i < arr.length) {
      let j = 0;
      while (j < arr[i].length) {
        console.log(arr[i][j]);
        j++;
      }
      i++;
    }
  }
  
  // Call the function with the sample array
  print2DArray(twoDArray);
  