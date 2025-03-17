import React from 'react'
import '../style.css/Login.css'
import { IoHomeSharp } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";
import { FaRobot } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcBusinessman } from "react-icons/fc";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='registration'>
    <div className='login-navbar'>
        <div className='login-logo'>NeuralHack</div>
        <div className='login-menu'>
            
                <Link to="/Home"><div className='login-icon'><IoHomeSharp className='login-iconn' />HOME</div></Link>
                <Link to="/Login"><div className='login-icon'><BsFillPersonFill  className='login-iconn' />LOGIN/ REGISTER</div></Link>
                <Link to="/OneTimeUser"><div className='login-icon'><BsFillPersonFill className='login-iconn'/>ONE TIME USER?</div></Link>
                <div className='icon'><FaRobot className='login-iconn'/>AIML GEEKS?</div>
            
        </div>
    </div>
    <div className='register'>
    <div className='register-container'>
        <div className='tittle'>Login</div>
        <div className='picture'><FcBusinessman /></div>
        <div className='text'>
        <div className='icon2'><BsFillPersonFill /><form><input type="text" placeholder='Username' required pattern="[A-Za-z\s]+" title="Only letters and spaces allowed."></input></form></div>
        <div className='icon2'><RiLockPasswordFill /><form><input type="text" placeholder='Password' required pattern="[A-Za-z\s]+" title="Only letters and spaces allowed."></input></form></div>
        
        </div>
        <div className='button'>CLICKCLICK!!!</div>
    </div>
    </div>
</div>
  )
}

export default Login


















































// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import '../style.css/Login.css';
// import { FiX } from "react-icons/fi";


// const Login = ({ closeSignin, openRegister }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [rememberMe, setRememberMe] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     console.log("Username:", username);
//     console.log("Password:", password);
//     console.log("Remember me:", rememberMe);
//     setTimeout(() => {
//       navigate("/shop");
//     }, 500); // Redirects after 0.5 seconds
//   };

//   return (
//     <div className="login-overlay">
//       <div className="login-container">
//         <div className="login-card">
//           <button className="close-button" onClick={closeSignin}>
//           <FiX size={24}/>
//           </button>
//           <div className="login-header">
//             <img src={logo} alt="Botiga Logo" className="login-logo" />
//             <h2 className="login-title">Welcome back!</h2>
//           </div>
//           <form className="login-form" onSubmit={handleLogin}>
//             <input
//               type="text"
//               className="login-input"
//               placeholder="Username or Email"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//             <input
//               type="password"
//               className="login-input"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <button type="submit" className="login-button">
//               Login
//             </button>
         
//           </form>
    
//           <div className="login-optionss">
//             <span>Don't have an account?</span>
//             <a className="sign-up-link" onClick={openRegister}>
//               Sign Up
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;