import React, { useState } from 'react'

const MyForm = () => {
    const [FormValue, setFormValue] = useState('');
    const [email, setEmail]= useState('');
    // handle input change
    const handleInputChange = (event) =>{
        setFormValue(event.target.value);
    };
   const handleEmailChange = (event)=>{
    setEmail(event.target.value);
   };
   const  handleSubmit = (event)=>{
    event.preventDefault();
    console.log('form submitted:',{FormValue, email});
   };
  
  return (
    <div>
        <form action="">
            <label htmlFor="">Name:</label>
      <input type="text" name="" id="" value={FormValue}  onChange={handleInputChange}/>
      <label htmlFor="">Email:</label>
      <input type="text" name="" id="" value={email}  onChange={handleEmailChange}/>
      <button onClick={handleSubmit}>Send</button>

      
      </form>
    </div>
  )
}

export default MyForm;