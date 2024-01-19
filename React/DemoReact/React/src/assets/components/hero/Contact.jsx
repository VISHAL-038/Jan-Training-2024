import React,{useState} from "react";

const Contact = () => {
    const [msg,setMsg]=useState('write message');
    const [name,setName]=useState("enter your name");
    const [email,setEmail]=useState("write email")
  return (
    <div>
        <form>
        <p>Name:{name}</p>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <p>Email:{email}</p>
      <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <p>Message:{msg}</p>
      <input type="textarea" value={msg} onChange={(e)=>setMsg(e.target.value)}/>
      </form>
    </div>
  )
}
export default Contact