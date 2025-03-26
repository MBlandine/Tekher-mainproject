// import React, {useState, useEffect}from 'react'
// import '../style.css/Sidebar.css'
// import { IoPersonCircleSharp } from "react-icons/io5";
// import { PiDotsSixVerticalBold } from "react-icons/pi";
// import { TbDashboardFilled } from "react-icons/tb";
// import { AiFillProduct } from "react-icons/ai";
// import { BsCartFill } from "react-icons/bs";
// import { BsFillPersonFill } from "react-icons/bs";
// import { MdOutlineForwardToInbox } from "react-icons/md";
// import { GrTransaction } from "react-icons/gr";
// import { MdSell } from "react-icons/md";
// import { IoChatbubbleSharp } from "react-icons/io5";
// import { Link } from 'react-router-dom';
// import { IoMdSunny} from 'react-icons/io'
// import { LiaToggleOnSolid, LiaToggleOffSolid } from "react-icons/lia";
// import { LuMoonStar } from "react-icons/lu";
// const Sidebar = () => {
//   const [isVisible, setIsVisible] = useState(true);
//     const [isDarkTheme, setIsDarkTheme] = useState(false);
//     useEffect(() => {
//         const savedTheme = localStorage.getItem('theme');
//         if (savedTheme === 'dark') {
//             setIsDarkTheme(true);
//             document.body.classList.add('dark-theme');
//         } else {
//             document.body.classList.add('light-theme');
//         }
//     }, []);
//     const toggleTheme = () => {
//         setIsDarkTheme((prev) => {
//             const newTheme = !prev;
//             document.body.classList.toggle('dark-theme', newTheme);
//             document.body.classList.toggle('light-theme', !newTheme);
//             localStorage.setItem('theme', newTheme ? 'dark' : 'light');
//             return newTheme;
//         });
//     };
//   return (
//     <div className={`sidebar ${isDarkTheme ? 'dark' : 'light'}`}>
//         <div className='logo'>
//              <IoPersonCircleSharp className='icon' />
//              <h3>BlandineM</h3>
//         </div>
        
//         <div className='list'>
//             <h3>ALL BOARDS (3)</h3>
           
//             <Link to='/Card'><li  className='items'href='#'><TbDashboardFilled className='iconic' />Dashboard</li></Link>
           
//             <Link to='/Products'><li className='item' href='#'><AiFillProduct className='iconic' />Profile</li></Link>
    

//           <Link to='/Orders'><li className='item' href='#'><BsCartFill className='iconic'/> Predict Diabetes</li></Link> 
//             <Link to='/DashPage'><li className='item' href='#'><BsFillPersonFill className='iconic' /> Health Report</li></Link>
//             <Link to='/Transactions'><li className='item' href='#'><GrTransaction className='iconic'/> About Us</li></Link>
//             <Link to='/Vendors'><li className='item' href='#'><MdSell className='iconic'/> Help and Support</li></Link>
//             <Link to='/Inbox'><li className='item' href='#'><MdOutlineForwardToInbox className='iconic'/> Inbox</li></Link>
            
  
//             <div className="lightanddark" onClick={toggleTheme}>
//                     <IoMdSunny className={`icons ${!isDarkTheme ? "active" : ""}`} />
//                     {isDarkTheme ? <LiaToggleOffSolid className="icons" /> : <LiaToggleOnSolid className="icons" />}
//                     <LuMoonStar className={`icons ${isDarkTheme ? "active" : ""}`} />
//                 </div>
            
//         </div>
        

//     </div>
//   )
// }

// export default Sidebar