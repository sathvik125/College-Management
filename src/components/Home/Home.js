import React from 'react'
import { useState } from "react";
// import { Student } from '../StudentDetails/Student';
import { useNavigate } from 'react-router-dom';
export const Home = () => {
  const [val,setval]=useState();
  const nav=useNavigate();
const handleChange=(e)=>{
  setval((e.target.value));
  console.log(val);
}
  const handleClick=async(e)=>{
    // e.preventDefault();

    console.log("sdfghj");
    console.log(val);
    const response = await fetch('http://localhost:8080/demo1',{
      method:'POST', 
      body:JSON.stringify({ rollid: val,req:"universal" }), 
      headers:{
        'Content-Type':'application/json'
      }
      // data:JSON.stringify(val), 
    })
    const data = await response.json();
    console.log(data);
  
   nav("studentdetail",{state:{data1:{data}}});
    // alert(`Your Response is ${data}`);
  }
  return (
    <>
    <h1>Welcome to Home Page</h1>
    <h3>rollno:(clgname:(kmit)+branch(csm)+studentno(1-9)--->ex:kmitcsm1,ngitcsd9)</h3>
    <div className="card" style={{width:'400px',display:'flex',justifyContent:'center',alignItems:'center'}}>
<h1>Studentdetails</h1>
    <input placeholder='Enter the Roll Number  ' onChange={handleChange} style={{width:'200px'}} type="text"  />
      <br />
    <button onClick={handleClick}>Submit</button>
    </div>
    </>
  )
}
