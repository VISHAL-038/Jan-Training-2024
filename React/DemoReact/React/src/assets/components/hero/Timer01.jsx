import React,{useEffect} from "react";
const Timer01=()=>{
    const[seconds,setSeconds]=React.useState(0);
    useEffect(()=>{
    const timerId=setInterval(()=>{
        setSeconds((prevSec)=> prevSec+1);
    } ,1000);
    return()=>{
      clearInterval(timerId);
    };
   },[]);
   return(
   <div>
     <h1> Timer:{seconds}seconds</h1>
   </div>
   );

};
export default Timer01