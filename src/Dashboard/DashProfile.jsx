import React from 'react'
import '../style.css/DashProfile.css';
import { MdDashboard } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";
import { BsFillPersonFill } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";

const DashProfile = () => {
  return (
    <div className='dashprofile'>
        <div className='profilenavbar'>
        <div className='profile-left'>Welcome, Username</div>
        <div className='profile-right'>
        <li className='profile-item'><MdDashboard className='profileicon'/>DASHBOARD</li>
        <li className='profile-item'><CgMenuGridR className='profileicon'/>OTHERS <IoMdArrowDropdown /></li>
        <li className='profile-buton'><BsFillPersonFill />LOGOUT</li>
        </div>
        </div>

        <div className='profile-container'>
          <div className='profile-containerleft'>
              <div className='profile-one'>jhgfdfghjhgf<input type='text' placeholder='Representative Name'/></div>
              <div className='profile-two'><input type='text' placeholder='Job Role'/> <input type='text' placeholder='Hospital Name'/></div>
              <div className='profile-three'><input type='text' placeholder='Hospital Address'/></div>
              <div className='profile-four'><input type='text' placeholder='City'/> <input type='text' placeholder='Country'/> <input type='text' placeholder='Zip Code'/></div>
              <div className='profile-five'><input type='text' placeholder='Contact Number'/> <input type='text' placeholder='Date Of Birth'/></div>
              <div className='profile-six'><input type='text' placeholder='Hospital Description'/></div>
            
          </div>
          <div className='profile-containerright'>
          <div className='profile-one'>jhgfdfghjhgf<input type='text' placeholder='Representative Name'/></div>
              <div className='profile-two'><input type='text' placeholder='Job Role'/> <input type='text' placeholder='Hospital Name'/></div>
              <div className='profile-three'><input type='text' placeholder='Hospital Address'/></div>
              <div className='profile-four'><input type='text' placeholder='City'/> <input type='text' placeholder='Country'/> <input type='text' placeholder='Zip Code'/></div>
              <div className='profile-five'><input type='text' placeholder='Contact Number'/> <input type='text' placeholder='Date Of Birth'/></div>
              <div className='profile-six'><input type='text' placeholder='Hospital Description'/></div>
          </div>
        </div>
    </div>
  )
}

export default DashProfile