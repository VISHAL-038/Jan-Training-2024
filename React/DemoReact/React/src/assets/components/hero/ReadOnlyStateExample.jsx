import React,{useState} from "react";

const ReadOnlyStateExample=()=>{
    const [userInfo,setUserInfo]=useState({
        name:"john doe",
        age:30,
        email:"test@gmail.com",
        city:"chd"
    })
    return(
        <div>
            <p>Name :{userInfo.name}</p>
            <p>age :{userInfo.age}</p>
            <p>email :{userInfo.email}</p>
            <p>city :{userInfo.city}</p>
            <button onClick={()=>setUserInfo("this is user info")}>Try Update</button>

        </div>
    )
}
export default ReadOnlyStateExample;
