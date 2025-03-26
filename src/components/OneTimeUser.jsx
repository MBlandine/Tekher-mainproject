// import React from 'react'
// import '../style.css/OneTimeUser.css'
// import { IoHomeSharp } from "react-icons/io5";
// import { BsFillPersonFill } from "react-icons/bs";
// import { FaRobot } from "react-icons/fa";
// import { HiOutlineMenuAlt2 } from "react-icons/hi";
// import { IoMdInformationCircle } from "react-icons/io";
// import { TbHandFingerLeft } from "react-icons/tb";
// import { Link } from 'react-router-dom';

// const OneTimeUser = () => {
//   return (
//     <div className='onetimeuser'>
//          <div className='navbar'>
//             <div className='logo'>NeuralHack</div>
//             <div className='menu'>
                
//                     <Link to="/Home"><div className='icon'><IoHomeSharp className='iconn' />HOME</div></Link>
//                     <Link to="/Registration"><div className='icon'><BsFillPersonFill  className='iconn' />LOGIN/ REGISTER</div></Link>
//                     <Link to="/OneTimeUser"><div className='icon'><BsFillPersonFill className='iconn'/>ONE TIME USER?</div></Link>
//                     <div className='icon'><FaRobot className='iconn'/>AIML GEEKS?</div>
                
//             </div>
//         </div>
//         <div className='onetimeusers'>
//          <div className='Left'>
//           <div className='buttons'>
//                 <div className='one'><HiOutlineMenuAlt2  className='icon'/>NOTE</div>
//                 <div className='two'><IoMdInformationCircle className='icon' />DETAILS</div>
//             </div>
//             <div className='words'>
//                 <p>Hey there, here are some points that should be noted before starting to work with this site. </p>
//                 <p>The most important point to be noted is that, Our prediction model is only compatible with female patients because the AIML model takes in the term pregnancy as one of the inputs. So Please make sure to enter correct data.</p>
//                 <p> <TbHandFingerLeft />Brief description of the parameters required are given in the details tab.</p>   
               
//             </div>
//         </div>
//         <div className='Right'>
//             <div className='top'>Medical Data</div>
//             <div className='bottom'>
//                 <div className='title'>Please provide the required data of the patient</div>
//                 <div className='middle'>
//                 <div className='leftside'>
//                 <div className='predict-form'> <div>Pregnancies </div><div><input type="number" required pattern="[A-Za-z\s]+" title="Only letters and spaces allowed."></input></div></div>
//                 <div className='predict-form'> <div><label className='predict-label'>Blood Pressure</label> </div><div><input type="number" required pattern="[A-Za-z\s]+" title="Only letters and spaces allowed."></input></div></div>
//                 <div className='predict-form'> <div>Insulin </div><div><input type="number" required pattern="[A-Za-z\s]+" title="Only letters and spaces allowed."></input></div></div>
//                 <div className='predict-form'> <div>DPF </div><div><input type="number" required pattern="[A-Za-z\s]+" title="Only letters and spaces allowed."></input></div></div>
//                 </div>
//                 <div className='rightside'>
//                 <div className='predict-form'> <div>Glucose </div><div><input type="number" required pattern="[A-Za-z\s]+" title="Only letters and spaces allowed."></input></div></div>
//                 <div className='predict-form'> <div><label className='predict-label'>Skin Thickness</label> </div><div><input type="number" required pattern="[A-Za-z\s]+" title="Only letters and spaces allowed."></input></div></div>
//                 <div className='predict-form'> <div> BMI </div><div><input type="number" required pattern="[A-Za-z\s]+" title="Only letters and spaces allowed."></input></div></div>
//                 <div className='predict-form'> <div> Age </div><div><input type="number" required pattern="[A-Za-z\s]+" title="Only letters and spaces allowed."></input></div></div>
//                 </div>
//                 </div>
//                 <div className='buttonn'>CLICKCLICK!!!</div>
//             </div>
//         </div>
    
//         </div>    
//     </div>

//   )
// }

// export default OneTimeUser