import React from 'react'
import '../style.css/DashPage.css'
import { MdDashboard } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";
import { BsFillPersonFill } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaWheelchair } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";

const DashPage = () => {
  return (
    <div className='dashpage'>
       <div className='dashnavbar'>
        <div className='dashpage-left'>Welcome, Username</div>
        <div className='dashpage-right'>
        <li className='item'><MdDashboard className='dashpage-icon'/>DASHBOARD</li>
        <li className='item'><CgMenuGridR className='dashpage-icon'/>OTHERS <IoMdArrowDropdown /></li>
        <li className='dashpage-buton'><BsFillPersonFill />LOGOUT</li>
        </div>
        </div>
    <div className='cardcontainer'>
        <div className='card'><div className='cardcontent'><div className='patients'>1 Patients</div> <div>Total Number of Patients Analysed</div></div> 
          <div className='smallcard1'><FaWheelchair  className='icon'/>Patients Analysed</div>
        </div>

        <div className='card'><div className='cardcontent'><div className='patients'>1 Patients</div> <div>Total Number of Patients Analysed</div></div> 
          <div className='smallcard2'><FaWheelchair  className='icon'/>Patients Analysed</div>
        </div>


        <div className='card'><div className='cardcontent'><div className='patients'>1 Patients</div> <div>Total Number of Patients Analysed</div></div> 
          <div className='smallcard3'><FaWheelchair  className='icon'/>Patients Analysed</div>
        </div>
    </div>
    
    <div className='charts'>
    <div className='card'><div className='cardcontent'><div className='patients'>1 Patients</div> <div>Total Number of Patients Analysed</div></div> 
          <div className='smallcard1'><FaWheelchair  className='icon'/>Patients Analysed</div>
        </div>

        <div className='card'><div className='cardcontent'><div className='patients'>1 Patients</div> <div>Total Number of Patients Analysed</div></div> 
          <div className='smallcard1'><FaWheelchair  className='icon'/>Patients Analysed</div>
        </div>
    </div>


    <div className='table'>

      <div className='orderspage'>
        <div className='tablehead'><div>PATIENTS DATA HISTORY</div><div className='dashsearch'> <IoMdSearch className='icon' /> <input type='search' placeholder='Search'/>
        </div></div>
      
      <div className='table'> 
     <table>
      
      <tr>
       
        <th className='tabletitle'>PatientName</th>
        <th className='tabletitle'>PatientID</th>
        <th className='tabletitle'>Pregnancies</th>
        <th className='tabletitle'>Glucose</th>
        <th className='tabletitle'>BloodPressure</th>
        <th className='tabletitle'>SkinThickness</th>
        <th className='tabletitle'>Insulin</th>
        <th className='tabletitle'>BMI</th>
        <th className='tabletitle'>DPF</th>
        <th className='tabletitle'>Age</th>
      </tr>
      
   
      <tr>
          <td>Patient 1</td>
          <td>0</td>
          <td>10</td>
          <td>45</td>
          <td>120</td>
          <td>100</td>
          <td>10</td>
          <td>30</td>
          <td>0.222</td>
          <td>20</td>
        </tr>

        <tr>
          <td>Patient 2</td>
          <td>0</td>
          <td>10</td>
          <td>45</td>
          <td>120</td>
          <td>100</td>
          <td>10</td>
          <td>30</td>
          <td>0.222</td>
          <td>20</td>
        </tr>

        <tr>
          <td>Patient 3</td>
          <td>0</td>
          <td>10</td>
          <td>45</td>
          <td>120</td>
          <td>100</td>
          <td>10</td>
          <td>30</td>
          <td>0.222</td>
          <td>20</td>
        </tr>

        <tr>
          <td>Patient 4</td>
          <td>0</td>
          <td>10</td>
          <td>45</td>
          <td>120</td>
          <td>100</td>
          <td>10</td>
          <td>30</td>
          <td>0.222</td>
          <td>20</td>
        </tr>

        <tr>
          <td>Patient 5</td>
          <td>0</td>
          <td>10</td>
          <td>45</td>
          <td>120</td>
          <td>100</td>
          <td>10</td>
          <td>30</td>
          <td>0.222</td>
          <td>20</td>
        </tr>
      
   
        </table>
      </div>
      </div>
    </div>











  </div>





    
  )
}

export default DashPage