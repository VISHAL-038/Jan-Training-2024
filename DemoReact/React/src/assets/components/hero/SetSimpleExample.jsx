import React, { useState } from "react";

const SetSimpleExample = () => {
  const [name, setName] = React.useState("vishal");
  const [age, setAge] = React.useState(24);
  const [rollNo, setRollNo] = React.useState(234);
  const [maths, setMaths] = React.useState(23);
  const [science, setScience] = React.useState(23);

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>RollNo: {rollNo}</p>
      <p>Science Marks: {science}</p>
      <p>Maths Marks: {maths}</p>
      <div>
        <p>Enter your name</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        ></input>

        <p>Enter your age</p>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter your age"
        ></input>

        <p>Enter your roll no</p>
        <input
          type="text"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
          placeholder="Enter your rollno"
        ></input>

        <p>Enter your science marks</p>
        <input
          type="text"
          value={science}
          onChange={(e) => setScience(e.target.value)}
          placeholder="Enter your marks"
        ></input>

        <p>Enter your maths marks</p>
        <input
          type="text"
          value={maths}
          onChange={(e) => setMaths(e.target.value)}
          placeholder="Enter your marks"
        ></input>
      </div>
    </div>
  );
};

export default SetSimpleExample;
