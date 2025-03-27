import React, { useState } from 'react';
import '../style.css/Registration.css';
import { IoHomeSharp } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";
import { FaRobot } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcBusinesswoman } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const Registration = () => {
  
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
        alert("All fields are required!");
        return;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(formData.email)) {
        alert("Invalid email format");
        return;
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
        alert("Password must be at least 8 characters long and contain both letters and numbers");
        return;
    }

    try {
        const res = await axios.post("http://localhost:3000/api/auth/register", formData, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        alert(res.data.message);

           // Navigate to /Login after successful registration
    navigate('/Login');
    
    } catch (error) {
        console.error("Error during registration:", error);
        alert(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className='registration'>
      <div className='registernavbar'>
        <Link to="/Home"><div className='register-logo'>NeuralHack</div></Link>
        <div className='register-menu'>
          <Link to="/Home"><div className='register-icon'><IoHomeSharp className='iconn' />HOME</div></Link>
          <Link to="/Registration"><div className='register-icon'><BsFillPersonFill className='iconn' />LOGIN / REGISTER</div></Link>
          <Link to="/DiabetesPrediction"><div className='register-icon'><BsFillPersonFill className='iconn'/>ONE TIME USER?</div></Link>
          <div className='icon'><FaRobot className='iconn'/>AIML GEEKS?</div>
        </div>
      </div>

      <div className='signup-both'>
      <Link to="/Login"><div className='signup-black'>LOGIN</div></Link>
      <div className='register'>
        <div className='register-container'>
          <div className='register-tittle'>Register</div>
          <div className='register-picture'><FcBusinesswoman /></div>

          <form className='register-text' onSubmit={handleSubmit}>
            <div className='register-icon2'>
              <BsFillPersonFill />
              <input 
                type="text" 
                name="name" 
                placeholder='Username' 
                value={formData.name} 
                onChange={handleChange}
              />
            </div>
            
            <div className='register-icon2'>
              <MdEmail />
              <input 
                type="email" 
                name="email" 
                placeholder='Email' 
                value={formData.email} 
                onChange={handleChange}
              />
            </div>

            <div className='register-icon2'>
              <RiLockPasswordFill />
              <input 
                type="password" 
                name="password" 
                placeholder='Password' 
                value={formData.password} 
                onChange={handleChange}
              />
            </div>

            <button type="submit" className='register-button'>Register</button>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Registration;

// // Backend: Express.js route for user registration
// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcryptjs');
// const User = require('../models/User');

// // Registration endpoint
// router.post('/register', async (req, res) => {
//     const { name, email, password } = req.body;

//     // Validation
//     if (!name || !email || !password) {
//         return res.status(400).json({ message: "All fields are required" });
//     }

//     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     if (!emailRegex.test(email)) {
//         return res.status(400).json({ message: "Invalid email format" });
//     }

//     const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
//     if (!passwordRegex.test(password)) {
//         return res.status(400).json({ message: "Password must be at least 8 characters long and contain both letters and numbers" });
//     }

//     try {
//         let user = await User.findOne({ email });
//         if (user) {
//             return res.status(400).json({ message: "User already exists" });
//         }

//         const hashedPassword = await bcrypt.hash(password, 10);
//         user = new User({ name, email, password: hashedPassword });
//         await user.save();

//         res.status(201).json({ message: "User registered successfully" });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: "Server error" });
//     }
// });

// module.exports = router;







// import React, { useState } from 'react';
// import '../style.css/Registration.css';
// import { IoHomeSharp } from "react-icons/io5";
// import { BsFillPersonFill } from "react-icons/bs";
// import { FaRobot } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { RiLockPasswordFill } from "react-icons/ri";
// import { FcBusinesswoman } from "react-icons/fc";
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const Registration = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", password: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.name || !formData.email || !formData.password) {
//         alert("All fields are required!");
//         return;
//     }

//     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     if (!emailRegex.test(formData.email)) {
//         alert("Invalid email format");
//         return;
//     }

//     const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
//     if (!passwordRegex.test(formData.password)) {
//         alert("Password must be at least 8 characters long and contain both letters and numbers");
//         return;
//     }

//     try {
//         const res = await axios.post("http://localhost:3000/api/auth/register", formData, {
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         });
//         alert(res.data.message);
//     } catch (error) {
//         console.error("Error during registration:", error);
//         alert(error.response?.data?.message || "Registration failed");
//     }
//   };

//   return (
//     <div className='registration'>
//       <div className='registernavbar'>
//         <div className='register-logo'>NeuralHack</div>
//         <div className='register-menu'>
//           <Link to="/Home"><div className='register-icon'><IoHomeSharp className='iconn' />HOME</div></Link>
//           <Link to="/Registration"><div className='register-icon'><BsFillPersonFill className='iconn' />LOGIN/ REGISTER</div></Link>
//           <Link to="/DiabetesPrediction"><div className='register-icon'><BsFillPersonFill className='iconn'/>ONE TIME USER?</div></Link>
//           <div className='icon'><FaRobot className='iconn'/>AIML GEEKS?</div>
//         </div>
//       </div>

//       <div className='register'>
//         <div className='register-container'>
//           <div className='register-tittle'>Register</div>
//           <div className='register-picture'><FcBusinesswoman /></div>

//           <form className='register-text' onSubmit={handleSubmit}>
//             <div className='register-icon2'>
//               <BsFillPersonFill />
//               <input 
//                 type="text" 
//                 name="name" 
//                 placeholder='Username' 
//                 value={formData.name} 
//                 onChange={handleChange}
//               />
//             </div>
            
//             <div className='register-icon2'>
//               <MdEmail />
//               <input 
//                 type="email" 
//                 name="email" 
//                 placeholder='Email' 
//                 value={formData.email} 
//                 onChange={handleChange}
//               />
//             </div>

//             <div className='register-icon2'>
//               <RiLockPasswordFill />
//               <input 
//                 type="password" 
//                 name="password" 
//                 placeholder='Password' 
//                 value={formData.password} 
//                 onChange={handleChange}
//               />
//             </div>

//             <button type="submit" className='register-button'>Register</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Registration;







// import React, { useState } from 'react';
// import '../style.css/Registration.css';
// import { IoHomeSharp } from "react-icons/io5";
// import { BsFillPersonFill } from "react-icons/bs";
// import { FaRobot } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { RiLockPasswordFill } from "react-icons/ri";
// import { FcBusinesswoman } from "react-icons/fc";
// import { Link } from 'react-router-dom';
// // import { useNavigate} from 'react-router-dom';
// import axios from 'axios';

// const Registration = () => {
  
//   // const navigate = useNavigate();
//   const [formData, setFormData] = useState({ name: "", email: "", password: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate the form fields
//     if (!formData.name || !formData.email || !formData.password) {
//         alert("All fields are required!");
//         return;
//     }

//     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     if (!emailRegex.test(formData.email)) {
//         alert("Invalid email format");
//         return;
//     }

//     const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
//     if (!passwordRegex.test(formData.password)) {
//         alert("Password must be at least 8 characters long and contain both letters and numbers");
//         return;
//     }

//     // try {
//     //     const res = await axios.post("http://localhost:3000/register", formData);
//     //     alert(res.data.message);
//     //     navigate('/login'); // Redirect to login page
//     // } catch (error) {
//     //     console.error("Error during registration:", error); // Log the error to the console
//     //     alert(error.response?.data?.message || "Registration failed");
//     // }
//     const handleRegister = async () => {
//       try {
//           const response = await axios.post("http://localhost:3000/api/auth/register", 
//               {
//                   name: "Test User",
//                   email: "test@example.com",
//                   password: "testpassword"
//               },
//               {
//                   headers: {
//                       "Content-Type": "application/json",
//                   },
//               }
//           );
//           console.log("Registration Successful", response.data);
//       } catch (error) {
//           console.error("Registration Failed", error.response?.data || error);
//       }
//   };
  
// };



//   return (
//     <div className='registration'>
//       <div className='registernavbar'>
//         <div className='register-logo'>NeuralHack</div>
//         <div className='register-menu'>
//           <Link to="/Home"><div className='register-icon'><IoHomeSharp className='iconn' />HOME</div></Link>
//           <Link to="/Registration"><div className='register-icon'><BsFillPersonFill className='iconn' />LOGIN/ REGISTER</div></Link>
//           <Link to="/DiabetesPrediction"><div className='register-icon'><BsFillPersonFill className='iconn'/>ONE TIME USER?</div></Link>
//           <div className='icon'><FaRobot className='iconn'/>AIML GEEKS?</div>
//         </div>
//       </div>

//       <div className='register'>
//         <div className='register-container'>
//           <div className='register-tittle'>Register</div>
//           <div className='register-picture'><FcBusinesswoman /></div>

//           <form className='register-text' onSubmit={handleSubmit}>
//             {/* Name Field */}
//             <div className='register-icon2'>
//               <BsFillPersonFill />
//               <input 
//                 type="text" 
//                 name="name" 
//                 placeholder='Username' 
//                 value={formData.name} 
//                 onChange={handleChange}
//               />
//             </div>
//             {/* {errors.name && <p className="error">{errors.name}</p>} */}

//             {/* Email Field */}
//             <div className='register-icon2'>
//               <MdEmail />
//               <input 
//                 type="email" 
//                 name="email" 
//                 placeholder='Email' 
//                 value={formData.email} 
//                 onChange={handleChange}
//               />
//             </div>
//             {/* {errors.email && <p className="error">{errors.email}</p>} */}

//             {/* Password Field */}
//             <div className='register-icon2'>
//               <RiLockPasswordFill />
//               <input 
//                 type="password" 
//                 name="password" 
//                 placeholder='Password' 
//                 value={formData.password} 
//                 onChange={handleChange}
//               />
//             </div>
//             {/* {errors.password && <p className="error">{errors.password}</p>} */}

//             {/* <button type="submit" className='register-button'>CLICKCLICK!!!</button> */}
//             <button type="submit" className='register-button'>Register</button>

//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Registration;
