import React, { useEffect, useState } from "react";
function Home()
{
    const [p , setPname] = useState();
    const [e , setEmail] = useState();
    const [n , setName] = useState();
    const [msg, setMsg] =useState();
    var [data, setMyData]=useState();
    const[pn,setParty]=useState();
    const[vt,setVote]=useState();
    
    const Addparty=async()=>
    {  
        let result=await fetch("http://localhost:5000/party ",{
            method:'post',
            body:JSON.stringify({p}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result=await result.json()
        console.log(result)
        setMsg(result.msg)
    }

    const Removeparty=async()=>
    {  
        let result=await fetch("http://localhost:5000/removeParty ",{
            method:'post',
            body:JSON.stringify({p}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result=await result.json()
        console.log(result)
        setMsg(result.msg)
    }


    const Addvoter=async()=>
    {  
        let result=await fetch("http://localhost:5000/addVoter",{
            method:'post',
            body:JSON.stringify({e,n}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result=await result.json()
        console.log(result)
        setMsg(result.msg)
    }
    const removeVoter=async()=>
    {  
        let result=await fetch("http://localhost:5000/removeVoter",{
            method:'post',
            body:JSON.stringify({e}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result=await result.json()
        console.log(result)
        setMsg(result.msg)
    }
    const countvote = async () => {
        try {
          let result = await fetch("http://localhost:5000/count", {
            method: "get",
            headers: {
              'Content-Type': 'application/json'
            }
          });
          result = await result.json();
          console.log(result.data);
          setMyData(result.data);
      
          let pn = "";
          let vt = 0;
      
          result.data.forEach(row => {
            if (row.totalvote > vt) {
              vt = row.totalvote;
              pn = row.party;
            }
          });
      
          setParty(pn);
          setVote(vt);
        } catch (error) {
          console.error("Error in countvote:", error);
        }
      };
      
      useEffect(() => {
        countvote();
      }, [msg]); // Add any other dependencies as needed
      
      

    return(
        
        <div>
            <center><h1 className="border border-dark border-4 ms-6"style={{ background: 'lightgreen', color: 'black' }}>Welcome to Voting  Component</h1></center>
            <br/>
            <br/>
            <center>
            <h3>{msg}</h3>
            </center>
           
            <div className="row">
            <div class="col" ></div>
            <div class="col-md-3" >
            <br/>
                <div class="border border-5" style={{background:' black',color: 'white'}}><h2>Leading Party</h2><hr/>
                {/* <marquee>Leading party is {pn} with vote {vt}</marquee> */}
                </div>
            </div>
            <div className="col"></div>
                <div className="col-md-3 border border-dark p-2 ms-6" style={{ background: 'black', color: 'white' }}><h2>Add/Remove Party</h2> <br/>
                    Enter Party Name
                    <input type="text" name="p" className="form-control" onInput={(e)=>setPname(e.target.value)}/>
                    <br/>
                    <button className="btn btn-success" onClick={()=>Addparty()}>Add</button>&emsp;&emsp;&emsp;
                    <button className="btn btn-danger" onClick={()=>Removeparty()}>Remove</button>

                </div>
                <div className="col-md-4 border border-dark p-2 ms-2"style={{ background: 'black', color: 'white' }}>
                <h2 class="text-center mb-2">Add/Remove Voter</h2>
        Email
        <input type="text" class="form-control" name="e" onInput={(e)=>setEmail(e.target.value)}/>
        Name
        <input type="text" class="form-control" name="n" onInput={(e)=>setName(e.target.value)}/>
        <div class="row mt-3">
            <div class="col-md-6">
                <button class="btn btn-success"   onClick={()=>Addvoter()}>Add</button>
            </div>
            <div class="col-md-6">
                <button class="btn btn-danger" onClick={()=>removeVoter()}>Remove</button>
            </div>

        </div>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    {/*<table className="table table-bordered table-striped table-hover table-dark">
                        <tbody>
                            <tr>
                            <td>Party</td>
                            <td>Vote</td>
                            </tr>
                            {
                                 data &&   data.map(row=>  
                                <tr>
                                    <td>{row.party}</td>
                                    
                                        <td>{row.totalvote}</td>
                                </tr>    
                                )
                            }
                        </tbody>

                        </table>*/}

                </div>

            </div>
            
        </div>
        
    )
}
export default Home;