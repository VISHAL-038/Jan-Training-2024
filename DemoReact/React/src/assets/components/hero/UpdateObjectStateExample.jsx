import React, { useState } from "react";

const UpdateObjectStateExample = () => {
  const [person, setPerson] = useState({
    name: "karan",
    age: 24,
    occupation: 'Developer'
  });

  const handleUpdateName = () => {
    setPerson({
      ...person,
      name: 'Ram Chandra'
    });
  };

  const handleUpdateAge = () => {
    setPerson({
      ...person,
      age: person.age + 1
    });
  };

  const handleUpdateOccupation = () => {
    setPerson({
      ...person,
      occupation: 'Designer'
    });
  };

  return (
    <div>
      <h2> Updating Object State in React</h2>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <p>Occupation: {person.occupation}</p>
      <button onClick={handleUpdateName}>
        Update Name
      </button>
      <button onClick={handleUpdateAge}>
        Increase Age
      </button>
      <button onClick={handleUpdateOccupation}>
        Change Occupation
      </button>
    </div>
  );
};

export default UpdateObjectStateExample;
