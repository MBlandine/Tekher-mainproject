import React from 'react'
import '../style.css/DashPredict.css'
import { MdDashboard } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";
import { BsFillPersonFill } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoMdInformationCircle } from "react-icons/io";
import { TbHandFingerLeft } from "react-icons/tb";


const DashPredict = () => {
  return (
    <div className='dashpredict'>
        <div className='predictnavbar'>
        <div className='predict-left'>Welcome, Username</div>
        <div className='predict-right'>
        <li className='predict-item'><MdDashboard className='predicticon'/>DASHBOARD</li>
        <li className='predict-item'><CgMenuGridR className='predicticon'/>OTHERS <IoMdArrowDropdown /></li>
        <li className='predict-buton'><BsFillPersonFill />LOGOUT</li>
        </div>
        </div>

        <div className='predict-onetimeusers'>
         <div className='predict-Left'>
          <div className='predict-buttons'>
                <div className='predict-one'><HiOutlineMenuAlt2  className='predict-icon'/>NOTE</div>
                <div className='predict-two'><IoMdInformationCircle className='predict-icon' />DETAILS</div>
            </div>
            <div className='predict-words'>
                <p>Hey there, here are some points that should be noted before starting to work with this site. </p>
                <p>The most important point to be noted is that, Our prediction model is only compatible with female patients because the AIML model takes in the term pregnancy as one of the inputs. So Please make sure to enter correct data.</p>
                <p> <TbHandFingerLeft />Brief description of the parameters required are given in the details tab.</p>   
               
            </div>
        </div>
        <div className='predict-Right'>
            <div className='predict-top'>Medical Data</div>
            <div className='predict-bottom'>
                <div className='predict-title'>Please provide the required data of the patient</div>
                <div className='predict-middle'>
                <div className='predict-leftside'>
                <div className='predict-form'> <div>Patient Name </div><div><input type="text" required pattern="[A-Za-z\s]+" title="Only letters and spaces allowed."></input></div></div>
                <div className='predict-form'> <div>Pregnancies </div><div><input type="number" required pattern="[A-Za-z\s]+" title="Only letters and spaces allowed."></input></div></div>
                <div className='predict-form'> <div><label className='predict-label'>Blood Pressure</label> </div><div><input type="number" required pattern="[A-Za-z\s]+" title="Only letters and spaces allowed."></input></div></div>
                <div className='predict-form'> <div>Insulin </div><div><input type="number" required pattern="[A-Za-z\s]+" title="Only letters and spaces allowed."></input></div></div>
                <div className='predict-form'> <div>DPF </div><div><input type="number" required pattern="[A-Za-z\s]+" title="Only letters and spaces allowed."></input></div></div>
                </div>
                <div className='predict-rightside'>
                
                <div className='predict-form'> <div>Patient Id </div><div><input type="text"   required pattern="[A-Za-z\s]+" title="Only letters and spaces allowed."></input></div></div>
                <div className='predict-form'> <div>Glucose </div><div><input type="number" required pattern="[A-Za-z\s]+" title="Only letters and spaces allowed."></input></div></div>
                <div className='predict-form'> <div><label className='predict-label'>Skin Thickness</label> </div><div><input type="number" required pattern="[A-Za-z\s]+" title="Only letters and spaces allowed."></input></div></div>
                <div className='predict-form'> <div> BMI </div><div><input type="number" required pattern="[A-Za-z\s]+" title="Only letters and spaces allowed."></input></div></div>
                <div className='predict-form'> <div> Age </div><div><input type="number" required pattern="[A-Za-z\s]+" title="Only letters and spaces allowed."></input></div></div>
                </div>
                </div>
                <div className='predict-buttonn'>CLICKCLICK!!!</div>
            </div>
        </div>
    
        </div>    
    </div>
  )
}

export default DashPredict