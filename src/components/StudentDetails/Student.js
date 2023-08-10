import React from 'react'
import "./Student.css"
export const Student = ({data1,rollnumber=123}) => {
    let name="tempstudent";
  console.log(data1);
   if(data1!=null){
      name=data1['name'];
      rollnumber=data1['rollid'];}

    
  return (
    <div >
<h1>Details Of the Student: 123</h1>
    <div className='card'>
        
    <h4>Roll Number  : {rollnumber}</h4>
    <h4>Name :{name}</h4>
    <h4>College: KMIT</h4>
    <h4>Branch: CSM</h4>
    </div>
    </div>

  )
}
