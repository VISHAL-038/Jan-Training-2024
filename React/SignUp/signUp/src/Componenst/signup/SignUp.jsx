import React, { useRef, useState } from "react";
import "./Signup.css";
const Signup=()=>{
  const name = useRef();
  const email = useRef();
  const password = useRef();

  const callRef = () => {
    if (name.current.value && email.current.value && password.current.value) {
      localStorage.setItem("name", name.current.value);
      localStorage.setItem("email", email.current.value);
      localStorage.setItem("password", password.current.value); 
      alert(`Welcome ${name.current.value}! Your account has been created successfully.`);
    } else {
      console.log("Invalid user");
    }
  }
  const[initial ,setInitial]=useState("Signup");
  return(
    <div className='container'>
            <div className="header">
                <div className="text">{initial}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
              { initial==="Login"?<div></div> :<div className="input">
              <img src="" alt="" />
                    <input type="text" placeholder='Name' />
                </div>
              }
                <div className="input">
                    <img src="" alt="" />
                    <input type="email" placeholder='Email' />
                </div>
                <div className="input">
                    <img src="" alt="" />
                    <input type="password" placeholder='Password' />
                </div>
            </div>
            { initial ==="Signup"?<div></div>:<div className="forget-password">
            Lost Password? <span>Click here</span>
            </div>
            }
            <div className="submit-container">
                <div className={initial==="Login"?"submit change-color":"submit"}onClick={()=>{setInitial("Signup")}}><button>Signup</button></div>
                <div className={initial==="Signup"?"submit change-color":"submit"}onClick={()=>{setInitial("Login")}}><button>Login</button></div>
                
            </div>


        </div>
  )
}
export default Signup