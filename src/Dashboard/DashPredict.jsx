import React, {useState, useEffect} from 'react'
import '../style.css/DashPredict.css'
import { MdDashboard } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";
import { BsFillPersonFill } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoMdInformationCircle } from "react-icons/io";
import { TbHandFingerLeft } from "react-icons/tb";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';


const DashPredict = () => {
    // const [patientName, setpatientName] = useState()
    // const [patientID, setpatientID] = useState()
    // const [pregnancies, setpregnancies] = useState()
    // const [glucose, setglucose] = useState()
    // const [bloodpressure, setbloodpressure] = useState()
    // const [skinthickness, setskinthickness] = useState()
    // const [insulin, setinsulin] = useState()
    // const [BMI, setBMI] = useState()
    // const [DPF, setDPF] = useState()
    // const [age, setage] = useState()


    const [patientName, setpatientName] = useState("");
const [patientID, setpatientID] = useState("");
const [pregnancies, setpregnancies] = useState("");
const [glucose, setglucose] = useState("");
const [bloodpressure, setbloodpressure] = useState("");
const [skinthickness, setskinthickness] = useState("");
const [insulin, setinsulin] = useState("");
const [BMI, setBMI] = useState("");
const [DPF, setDPF] = useState("");
const [age, setage] = useState("");
const navigate = useNavigate();



    // const Submit = (e) => {
    //     e.preventDefault();
    //     axios.post("http://localhost:3000/DashPredict", {patientName:"Bla", patientID:"1", pregnancies:"2", glucose:"3", bloodpressure:"2", skinthickness:"3", insulin:"4", BMI:"5", DPF:"6", age:"3"})
    //     .then(result => {
    //         console.log(result);
    //         alert('Data Submitted Successfully');
    //     })
       
    //     .catch(err => console.log(err));
    //     alert('Error submitting data');
    // }


    const Submit = async (e) => {
        e.preventDefault();
    
        const data = {
            patientName, 
            patientID, 
            pregnancies, 
            glucose, 
            bloodpressure, 
            skinthickness, 
            insulin, 
            BMI, 
            DPF, 
            age
        };
    
        console.log(" Sending Data to Backend:", data);  //  Log what you're sending
    
        try {
            const response = await axios.post("http://localhost:3000/DashPredict", data);
            console.log(" Server Response:", response.data);  //  Log the server response
            alert('Data Submitted Successfully');
            navigate('/DashPage')
        } catch (err) {
            console.error(" Axios Error:", err);
    
            if (err.response) {
                console.log(" Backend Response Error:", err.response.data);
                alert(`Backend Error: ${JSON.stringify(err.response.data, null, 2)}`);
            } else {
                console.log(" Network Error:", err.message);
                alert(`Network Error: ${err.message}`);
            }
        }
    };
    
 
    useEffect(() => {
        console.log("DashPredict Component Mounted!");
      }, []);

    
    
    
    

  return (
    <div className='dashpredict'>
        <div className='predictnavbar'>
        <div className='predict-left'>WELCOME,</div>
        <div className='predict-right'>
        <li className='predict-item'><MdDashboard className='predicticon'/>DASHBOARD</li>
        <Link to="/Registration"><li className='predict-item'><CgMenuGridR className='predicticon'/>OTHERS <IoMdArrowDropdown /></li></Link>
        <Link to="/Login"><li className='predict-buton'><BsFillPersonFill />LOGOUT</li></Link>
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
                <form className='predict-middle' onSubmit={Submit}>
                 <div className='predict-leftright'>   
                <div className='predict-leftside'>
                <div className='predict-form-dashpredict'> <div>Patient Name </div><div><input type="text" id='Patient Name' name='Patient Name'required pattern="[A-Za-z\s]+" title="Only letters and spaces allowed." onChange={(e)=>setpatientName(e.target.value)}/></div></div>
                <div className='predict-form-dashpredict'> <div>Pregnancies </div><div><input type="number" id='Pregnancies' name='Pregnancies'required min="0" onChange={(e)=>setpregnancies(e.target.value)}/></div></div>
                <div className='predict-form-dashpredict'> <div><label className='predict-label'  htmlFor='Blood Pressure'>Blood Pressure</label> </div><div><input type="number" name='Blood Pressure' id='Blood Pressure'required min="0"onChange={(e)=>setbloodpressure(e.target.value)}/></div></div>
                <div className='predict-form-dashpredict'> <div>Insulin </div><div><input type="number" name="id" id='Insulin'required min="0"onChange={(e)=>setinsulin(e.target.value)}/></div></div>
                <div className='predict-form-dashpredict'> <div>DPF </div><div><input type="number" name="DP" id='DPF' required min="0" onChange={(e)=>setDPF(e.target.value)}/></div></div>
                </div>
                <div className='predict-rightside'>
                
                <div className='predict-form-dashpredict'> <div>Patient Id </div><div><input type="text" name='Patient Id' id='Patient Id'required min="0" onChange={(e)=>setpatientID(e.target.value)}/></div></div>
                <div className='predict-form-dashpredict'> <div>Glucose </div><div><input type="number" name='Glucose' id='Glucose'required min="0"onChange={(e)=>setglucose(e.target.value)}/></div></div>
                <div className='predict-form-dashpredict'> <div><label className='predict-label'  htmlFor='Skin Thickness'>Skin Thickness</label> </div><div><input type="number" name='Skin Thickness' id='Skin Thickness'required min="0" onChange={(e)=>setskinthickness(e.target.value)}/></div></div>
                <div className='predict-form-dashpredict'> <div> BMI </div><div><input type="number" name='BMI' id='BMI'required min="0" onChange={(e)=>setBMI(e.target.value)}/></div></div>
                <div className='predict-form-dashpredict'> <div> Age </div><div><input type="number" name='Age' id='Age'required min="0" onChange={(e)=>setage(e.target.value)}/></div></div>
                </div>
                </div>
               
                <div><button className='predict-buttonn' type='Submit'>CLICKCLICK!!!</button></div>
                </form>
            </div>
        </div>
    
        </div>    
    </div>
  )
}

export default DashPredict