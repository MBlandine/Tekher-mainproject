import React from 'react'
import '../style.css/Registration.css';
import { IoHomeSharp } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";
import { FaRobot } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcBusinesswoman } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { useState } from "react";

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  
  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      console.log("Form Data:", formData);
    }
  };


  return (
    <div className='registration'>
        <div className='registernavbar'>
            <div className='register-logo'>NeuralHack</div>
            <div className='register-menu'>
                
                    <Link to="/Home"><div className='register-icon'><IoHomeSharp className='iconn' />HOME</div></Link>
                    <Link to="/Login"><div className='register-icon'><BsFillPersonFill  className='iconn' />LOGIN/ REGISTER</div></Link>
                    <Link to="/OneTimeUser"><div className='register-icon'><BsFillPersonFill className='iconn'/>ONE TIME USER?</div></Link>
                    <div className='icon'><FaRobot className='iconn'/>AIML GEEKS?</div>
                
            </div>
        </div>
        <div className='register'>
        <div className='register-container'>
            <div className='register-tittle'>Register</div>
            <div className='register-picture'><FcBusinesswoman /></div>
            <div className='register-text' onSubmit={handleSubmit}>
            <div className='register-icon2'><BsFillPersonFill /><form><input type="text" placeholder='Username' required pattern="[A-Za-z\s]+" title="Only letters and spaces allowed."></input></form></div>
            <div className='register-icon2'><MdEmail /><form><input type="text" placeholder='Email' required pattern="[A-Za-z\s]+" title="Only letters and spaces allowed."></input></form></div>
            <div className='register-icon2'><RiLockPasswordFill /><form><input type="text" placeholder='Password' required pattern="[A-Za-z\s]+" title="Only letters and spaces allowed."></input></form></div>
            
            </div>
            <div className='register-button'>CLICKCLICK!!!</div>
        </div>
        </div>
    </div>
  )
}

export default Registration