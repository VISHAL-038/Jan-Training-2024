import React,{useState} from "react";

const ReadStateExample=()=>{
    const [message , setMessage]=useState("hello, React!")
    return(
        <div>
            <h2>Reading state in react</h2>
            <p>Current message: {message}</p>
            <button onClick={()=>setMessage("why are you sending me message i am not interested in talking, get lost!")}>
                Change message
            </button>
        </div>
    )
}

export default ReadStateExample;