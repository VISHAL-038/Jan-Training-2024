import React,{ useState } from "react"

function Counter(){
    const [count,setCount]=useState(0);
    
    const handleIncrement=()=>{
        setCount(count+1)
    }

    const handleReset=()=>{
        setCount(0);
    }

    const handleDecrement=()=>{
        setCount(count-1)
    }
    return(
        <div>
            <h1>Counter:{count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}

export default Counter;