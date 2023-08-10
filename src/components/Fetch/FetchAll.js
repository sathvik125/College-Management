import React, { useState } from 'react'
import "./Fetch.css"
import { useNavigate } from 'react-router-dom';
export const FetchAll = ({clgname="KMIT"}) => {
  const [clg,setclg]=useState("none");
  const [branch,setbranch]=useState("none");
const [tabledata,settabeldata]=useState({});
const [flag,setflag]=useState(false);
const nav=useNavigate();
const handlesubmit=async(event)=>{
  event.preventDefault();
  if(event.target.collegename.value=="none" || event.target.branchname.value=="none")alert("please select all fields");
   await setclg(event.target.collegename.value);
   await setbranch(event.target.branchname.value);
  
  if(clg=="none" || branch=="none")alert("please select all fields");
  else{
    const response = await fetch('http://localhost:8080/fetchall',{
      method:'POST', 
      body:JSON.stringify({ college: clg,branchname:branch }), 
      headers:{
        'Content-Type':'application/json'
      }
      
    })
    const result=await response.json();
    settabeldata(result);
    for (const x of result){
      console.log(x);
    }
    result.map((data, index)=>{
      console.log(data);
    })

      // console.log(result);
    setflag(true);

  }

}
    const employee = [
       { id: 1,
        name: 'Bobby Hadz',
        salary: 12312345},
        {
        id: 2,
        name: 'asdfg Hadz',
        salary: 87654
        }
    ];
  return (
   
<>
<form className='card1' onSubmit={handlesubmit}>

      <span >Select College Name: </span>
      <select name="" id="collegename" >
      <option value="none" defaultValue >Select an Option</option>
        <option value="kmit">kmit</option>
        <option value="ngit">ngit</option>
      
      </select >
      
      <span style={{paddingLeft:20}}> Select Branch Name </span>
      <select name="select" id="branchname" >
      <option value="none" defaultValue>Select an Option</option>
        <option value="csm">csm</option>
        <option value="csd">csd</option>
        <option value="cse">cse</option>
      </select>
      <br />
   <button style={{marginTop:20}} >Submit</button>
   {/* <input type="submit" /> */}
    </form>
    <br />
    <br />
{flag && <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">RollNumber</th>
      <th scope="col">Name</th>
      <th scope="col">Branch</th>
    </tr>
  </thead>
  <tbody>
    {
      // for(const x of tabledata){
      //   return (
      //     <tr>

      //       <th scope="row">{index+1}</th>
      //   <td>{item.rollid}</td>
      //   <td>{item.}</td>
      //   <td>@mdo</td>
      //     </tr>

      //   )
      // }
      tabledata.map((data, index)=>{
           return (
          <tr style={{cursor:'pointer'}} onClick={()=>{console.log(data);nav("/studentdetail",{state:{data1:{data}}});}}>
            <th scope="row">{index+1}</th>
        <td>{data["rollid"]}</td>
        <td>{data["name"]}</td>
        <td>{branch}</td>
          </tr>

        )
      })
    }
  </tbody>
</table>}

</>
    
  
    
  )
}
