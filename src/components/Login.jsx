// 


import React, { useState } from 'react';
import '../style.css/Login.css';
import { IoHomeSharp } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";
import { FaRobot } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcBusinessman } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"; // Email validation
    if (!formData.password) newErrors.password = "Password is required";
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return; // If there are validation errors, do not proceed.

    try {
      // Sending login request to the backend
      const res = await axios.post("http://localhost:3000/api/auth/login", formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // Storing the token in localStorage after successful login
      localStorage.setItem("token", res.data.token);

      alert("Login Successful");

      // Redirect to dashboard after successful login
      navigate('/dashboard');
    } catch (error) {
      // Handling errors from the backend
      console.error("Login Error: ", error);
      if (error.response) {
        alert(error.response?.data?.message || "Login failed");
      } else if (error.request) {
        // This will catch network errors
        alert("Network error. Please try again later.");
      } else {
        alert("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className='loginpage'>
      <div className='login-navbar'>
        <Link to="/Home"><div className='login-logo'>NeuralHack</div></Link>
        <div className='login-menu'>
          <Link to="/Home"><div className='login-icon'><IoHomeSharp className='login-iconn' />HOME</div></Link>
          <Link to="/Registration"><div className='login-icon'><BsFillPersonFill className='login-iconn' />LOGIN / REGISTER</div></Link>
          <Link to="/DiabetesPrediction"><div className='login-icon'><BsFillPersonFill className='login-iconn'/>ONE TIME USER?</div></Link>
          <div className='icon'><FaRobot className='login-iconn'/>AIML GEEKS?</div>
        </div>
      </div>

      <div className='login'>
        <div className='login-container'>
          <div className='login-tittle'>Login</div>
          <div className='login-picture'><FcBusinessman /></div>
          <form onSubmit={handleSubmit} className='login-session'>
            <div className='login-text'>
              <div className='login-icon2'>
                <BsFillPersonFill />
                <input 
                  type="email" 
                  name="email"
                  placeholder='Email' 
                  value={formData.email}
                  onChange={handleChange}
                  style={errors.email ? { borderColor: 'red' } : {}}
                />
              </div>
              {errors.email && <p className="error">{errors.email}</p>}

              <div className='login-icon2'>
                <RiLockPasswordFill />
                <input 
                  type="password" 
                  name="password"
                  placeholder='Password' 
                  value={formData.password}
                  onChange={handleChange}
                  style={errors.password ? { borderColor: 'red' } : {}}
                />
              </div>
              {errors.password && <p className="error">{errors.password}</p>}
            </div>

            <button type="submit" className='login-button'>LOGIN</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
