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
        <div className='navbar'>
            <div className='logo'>NeuralHack</div>
            <div className='menu'>
                
                    <Link to="/Home"><div className='icon'><IoHomeSharp className='iconn' />HOME</div></Link>
                    <Link to="/Login"><div className='icon'><BsFillPersonFill  className='iconn' />LOGIN/ REGISTER</div></Link>
                    <Link to="/OneTimeUser"><div className='icon'><BsFillPersonFill className='iconn'/>ONE TIME USER?</div></Link>
                    <div className='icon'><FaRobot className='iconn'/>AIML GEEKS?</div>
                
            </div>
        </div>
        <div className='register'>
        <div className='register-container'>
            <div className='tittle'>Register</div>
            <div className='picture'><FcBusinesswoman /></div>
            <div className='text' onSubmit={handleSubmit}>
            <div className='icon2'><BsFillPersonFill /><form><input type="text" placeholder='Username' required pattern="[A-Za-z\s]+" title="Only letters and spaces allowed."></input></form></div>
            <div className='icon2'><MdEmail /><form><input type="text" placeholder='Email' required pattern="[A-Za-z\s]+" title="Only letters and spaces allowed."></input></form></div>
            <div className='icon2'><RiLockPasswordFill /><form><input type="text" placeholder='Password' required pattern="[A-Za-z\s]+" title="Only letters and spaces allowed."></input></form></div>
            
            </div>
            <div className='button'>CLICKCLICK!!!</div>
        </div>
        </div>
    </div>
  )
}

export default Registration