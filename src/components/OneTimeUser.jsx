import React from 'react'
import '../style.css/OneTimeUser.css'
import { IoHomeSharp } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";
import { FaRobot } from "react-icons/fa";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoMdInformationCircle } from "react-icons/io";
import { TbHandFingerLeft } from "react-icons/tb";

const OneTimeUser = () => {
  return (
    <div className='onetimeuser'>
         <div className='navbar'>
            <div className='logo'>NeuralHack</div>
            <div className='menu'>
                
                    <div className='icon'><IoHomeSharp className='iconn' />HOME</div>
                    <div className='icon'><BsFillPersonFill  className='iconn' />LOGIN/ REGISTER</div>
                    <div className='icon'><BsFillPersonFill className='iconn'/>ONE TIME USER?</div>
                    <div className='icon'><FaRobot className='iconn'/>AIML GEEKS?</div>
                
            </div>
        </div>
        <div className='onetimeusers'>
         <div className='Left'>
          <div className='buttons'>
                <div className='one'><HiOutlineMenuAlt2  className='icon'/>NOTE</div>
                <div className='two'><IoMdInformationCircle className='icon' />DETAILS</div>
            </div>
            <div className='words'>
                <p>Hey there, here are some points that should be noted before starting to work with this site. </p>
                <p>The most important point to be noted is that, Our prediction model is only compatible with female patients because the AIML model takes in the term pregnancy as one of the inputs. So Please make sure to enter correct data.</p>
                <p> <TbHandFingerLeft />Brief description of the parameters required are given in the details tab.</p>   
               
            </div>
        </div>
        <div className='Right'>
            <div className='top'>Medical Data</div>
            <div className='bottom'>
                <div className='title'>Please provide the required data of the patient</div>
                <div className='middle'>
                <div className='leftside'>
                <form> <label for="name">Pregnancies</label><input  className='input'type="text" required pattern="[A-Za-z\s]+" title="Only letters and spaces allowed."></input></form>
                <form> <label  className='label'for="name">Blood Pressure</label><input type="text" required pattern="[A-Za-z\s]+" title="Only letters and spaces allowed."></input></form>
                <form> <label for="name">Insulin</label><input type="text" required pattern="[A-Za-z\s]+" title="Only letters and spaces allowed."></input></form>
                <form> <label for="name">DPF</label><input type="text" required pattern="[A-Za-z\s]+" title="Only letters and spaces allowed."></input></form>
                </div>
                <div className='rightside'>
                <form> <label for="name">Glucose</label><input type="text" required pattern="[A-Za-z\s]+" title="Only letters and spaces allowed."></input></form>
                <form> <label for="name">Skin Thickness</label><input type="text" required pattern="[A-Za-z\s]+" title="Only letters and spaces allowed."></input></form>
                <form> <label for="name">BMI</label><input type="text" required pattern="[A-Za-z\s]+" title="Only letters and spaces allowed."></input></form>
                <form> <label for="name">Age</label><input type="text" required pattern="[A-Za-z\s]+" title="Only letters and spaces allowed."></input></form>
                </div>
                </div>
                <div className='buttonn'>CLICKCLICK!!!</div>
            </div>
        </div>
    
        </div>    
    </div>

  )
}

export default OneTimeUser