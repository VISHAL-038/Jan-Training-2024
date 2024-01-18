import React,{useState} from "react";

const Initializing =()=>{
    const [count,setCount]=useState(0);

    return (
        <div>
            <h2>
                We intialize our state by calling useState in our 
            </h2>

            <ol>
                useState accepts an initial state and returns two values:
                <li>The current state</li>
                <li>A fucntion that updates the state</li>
                <h1>Counter:{count}</h1>
                <button onClick={()=>setCount(count+1)}>Increment</button>
            </ol>
        </div>
    )
}

export default Initializing;