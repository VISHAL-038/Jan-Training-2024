import React, { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
function Login ()
{
    var [un,setUname] = useState();
    var [p,setPass] = useState();
    var [msg,setMsg] = useState();
var Navigate=useNavigate()
var checkUser=async()=>{
    let result=await fetch("http://localhost:5000/checklogin",{
        method:'post',
         headers:{
            'Content-Type':'application/json'
        },
        'credentials': 'include'
    });
    result=await result.json()
    if(result.status === true)
    {
        Navigate('/vote')
    }
    else
    Navigate("/login")

}
useEffect(()=>{
    checkUser()

},[])

    const Login=async()=>
    {  
        let result=await fetch("http://localhost:5000/login",{
            method:'post',
            body:JSON.stringify({un,p}),
            headers:{
                'Content-Type':'application/json'
            },
            'credentials': 'include'
        });
        result=await result.json({un,p})
        console.log(result)
        if(result.success==true)
        {
            setMsg("Login Succefull")
        Navigate("/vote")
        }
        else
    alert("Invalid")
        setMsg(result.msg)
    }
    return(
        <div>
            <div class="row">
    <div class="col-md-3"></div>
    <div class="col-md-4 border  p-2 mt-4">
        <h3 class="p-2 text-center">Login</h3>
        Enter User Name
        <input type="text" name="un" class="form-control" onInput={(e)=>setUname(e.target.value)}/>
        Enter password
        <input type="text" name="p" class="form-control" onInput={(e=>setPass(e.target.value))}/>
        <br/>
        <button class="btn btn-success" onClick={()=>Login()}>Login</button>
        <h3>{msg}</h3>
    </div>
    <br/>
    <div class="col-md-3"></div>
</div>
        </div>
    )
}
export default Login;

