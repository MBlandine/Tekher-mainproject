import React, { useState}from 'react';
import '../style.css/DashNavbar.css';
// import "../assets/dashbackground.jpg";
import { MdDashboard } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";
import { BsFillPersonFill } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";



function DashNavbar () {
  return(
    
      <div className='dashnavbar'>
      <div className='left'>Welcome, Username</div>
      <div className='right'>
        <li className='item'><MdDashboard className='icon'/>DASHBOARD</li>
        <li className='item'><CgMenuGridR className='icon'/>OTHERS <IoMdArrowDropdown /></li>
        <li className='button'><BsFillPersonFill />LOGOUT</li>
      </div>
      </div> 
    
  
  )

};

export default DashNavbar

