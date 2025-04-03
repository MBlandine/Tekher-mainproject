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


  // const handleLogin = async () => {
  //   try {
  //     const response = await axios.post("http://localhost:3000/api/auth/login", {
  //       email,
  //       password
  //     });
  
  //     if (response.data.success) {
  //       localStorage.setItem("loggedInUser", response.data.user.name); // Store name
  //       window.location.href = "/DashPage"; // Redirect to dashboard
  //     } else {
  //       alert("Login failed!");
  //     }
  //   } catch (error) {
  //     console.error("Login error:", error);
  //   }
  // };

  

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const newErrors = {};
//     if (!formData.email) newErrors.email = "Email is required";
//     else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
//     if (!formData.password) newErrors.password = "Password is required";
//     setErrors(newErrors);

//     if (Object.keys(newErrors).length > 0) return;

//     try {
//         console.log("Logging in with:", formData);

//         const response = await axios.post("http://localhost:3000/api/auth/login", formData, {
//             headers: { 'Content-Type': 'application/json' }
//         });

//         console.log("Login Response:", response.data);

//         if (response.data.success) {
//             localStorage.setItem("token", response.data.token);
//             localStorage.setItem("loggedInUser", response.data.user.name);
//             localStorage.setItem("userRole", response.data.user.role); // Store user role

//             alert("Login Successful");

//             // Redirect based on role
//             if (response.data.user.role === "doctor") {
//                 navigate('/DashPage');
//             } else {
//                 navigate('/DashPredict');
//             }
//         } else {
//             alert(response.data.message || "Invalid credentials or login failed.");
//         }
//     } catch (error) {
//         console.error("Login Error: ", error);
//         alert(error.response?.data?.message || "An error occurred. Please try again.");
//     }
// };


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Basic validation
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.password) newErrors.password = "Password is required";
    setErrors(newErrors);
  
    if (Object.keys(newErrors).length > 0) return; // Stop if validation fails
  
    try {
      console.log("Logging in with:", formData);
  
      // Send login request to backend
      const response = await axios.post("http://localhost:3000/api/auth/login", {
        email: formData.email, 
        password: formData.password
      }, {
        headers: { 'Content-Type': 'application/json' }
      });
  
      console.log("Login Response:", response.data);
  
      if (response.data && response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("loggedInUser", response.data.user?.name || "Guest");
        alert("Login Successful");
        navigate('/DashPredict');
      } else {
        alert(response.data.message || "Invalid credentials or login failed.");
      }
    } catch (error) {
      console.error("Login Error: ", error);
      alert(error.response?.data?.message || "An error occurred. Please try again.");
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
          <Link to="https://gamma.app/docs/Diabetes-Prediction-System-Web-Implementation-s0y02son70l656x?mode=doc" target="_blank" rel="noopener noreferrer"><div className='login-icon'><FaRobot className='login-iconn'/>AIML GEEKS?</div></Link>
        </div>
      </div>

      <div className='login-both'>
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
      <Link to="/Registration"><div className='login-black'>Register</div></Link>
      </div>
    </div>
  );
};

export default Login;
