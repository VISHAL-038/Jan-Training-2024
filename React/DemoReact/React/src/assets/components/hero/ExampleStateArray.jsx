// Import necessary modules from the 'react' library
import React, { useState } from 'react';

// Define the ExampleStateArray functional component
const ExampleStateArray = () => {
  // Initialize a state variable 'fruits' using the useState hook
  // The initial array contains three fruit names: 'Apple', 'Banana', and 'Orange'
  const [fruits, setFruits] = useState(['Apple', 'Banana', 'Orange']);

  // Event handler to add a new fruit to the array
  const handleAddFruit = () => {
    // Use the spread operator to create a new array with the existing items and add a new one ('Grapes')
    setFruits([...fruits, 'Grapes']);
  };

  // Event handler to remove a fruit at a specified index from the array
  const handleRemoveFruit = (index) => {
    // Use array filter to create a new array without the item at the specified index
    const updatedFruits = fruits.filter((_, i) => i !== index);
    setFruits(updatedFruits);
  };

  // Render the component's UI
  return (
    <div>
      <h2>Array State in React</h2>
      
      {/* Render an unordered list (ul) with each fruit and its corresponding Remove button */}
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>
            {fruit}
            <button onClick={() => handleRemoveFruit(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>

      {/* Button to trigger the handleAddFruit function, adding 'Grapes' to the array */}
      <button onClick={handleAddFruit}>
        Add Fruit
      </button>
    </div>
  );
};

// Export the ExampleStateArray component to be used in other parts of the application
export default ExampleStateArray;