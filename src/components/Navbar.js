import React from 'react'
import "./Navbar.css"
import {  useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'
import kmit from "../assets/kmit-bar.png"
import ngit from "../assets/ngit.png"
export const Navbar = () => {
   const navigate=useNavigate();
  return (
   <>
   <div className='navbar navbar-dark bg-primary' style={{display:'flex',justifyContent:'space-between',gap:'15px'}}>
   {/* <h1 style={{marginLeft:'20px'}}>hello</h1> */}
   <div style={{marginLeft:'40px'}}>

   <img src={kmit} alt="kmit" style={{width:'70px'}}/>
   <img src={ngit} alt="ngit" style={{marginLeft:'40px',width:'60px'}}/>
   </div>
{/* <Link id='navel' to={'/'} >Home</Link> */}
<div>

    <button id='navel' onClick={()=>{navigate('/')}}>Home</button>
    <button id='navel' onClick={()=>{navigate('/fetchall')}}>Fetchall</button>
    <button id='navel'>Insert</button>
</div>
   </div>
   </>
  )
}
