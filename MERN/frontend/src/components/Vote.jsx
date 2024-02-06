import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";

function Vote ()
{
    var [p , setPname] = useState();
    var [mydata, setMyData]=useState();
    var [msg, setMsg] = useState();
    var [un,setUname]=useState()
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
        console.log(result)
        if(result.status === true)
        {
            setUname(result.un)
            Navigate('/vote')
        }
        else
        Navigate("/login")
    
    }
    useEffect(()=>{
        checkUser()

    },[])

    const getParty=async()=>
    {  
        let result=await fetch("http://localhost:5000/getParty",{
            method:'get',
            headers:{
                'Content-Type':'application/json'
            },
            'credentials': 'include'
        });
        result=await result.json()

        setMyData(result.party)
       
    }
    useEffect(()=>{
        getParty()
    },[])
    var lout = async () => {
          await fetch("http://localhost:5000/logout", {
            method: "get",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          });
    
          Navigate("/login");
        
      }
    const Votenow=async()=>
    {  
        let result=await fetch("http://localhost:5000/vote",{
            method:'post',
            body:JSON.stringify({p,un}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result=await result.json()
        console.log(result)
        setMsg(result.msg)
    }
    return(
        <div>
            <div className="row">
                <div className="col-md-12"></div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <h3>Welcome &emsp; &emsp; {un} &emsp; <Link to="/logout" className="btn btn-danger" onClick={lout}>Logout</Link></h3>
                </div>
                <div className="col-md-4 border border-dark p-2 mt-5">
                    {
                     mydata &&   mydata.map(row=>                           
                            
                            <div key={row.pname}>
                            <input type="radio" name="p" value={row.pname}onChange={(e)=>setPname(e.target.value)}/> &emsp;
                            {row.pname}
                            <br/>
                        </div>
                            )
                    }
                        
                        <br/>
                        <button className="btn btn-success" onClick={()=>Votenow()}>Votenow</button>
                        <br/>
                        <h3>{msg}</h3>
                    
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    )
}
export default Vote; 

