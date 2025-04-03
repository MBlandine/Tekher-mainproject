import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../style.css/Update.css';
import { MdDashboard } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";
import { BsFillPersonFill } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoMdInformationCircle } from "react-icons/io";
import { TbHandFingerLeft } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [patientName, setPatientName] = useState('');
  const [pregnancies, setPregnancies] = useState('');
  const [glucose, setGlucose] = useState('');
  const [bloodpressure, setBloodPressure] = useState('');
  const [skinthickness, setSkinThickness] = useState('');
  const [insulin, setInsulin] = useState('');
  const [BMI, setBMI] = useState('');
  const [DPF, setDPF] = useState('');
  const [age, setAge] = useState('');
  const [patientID, setPatientID] = useState('');
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  // Fetch patient data on load
  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/DashPage/${id}`);
        const patientData = response.data;

        if (patientData) {
          setPatientName(patientData.patientName);
          setPregnancies(patientData.pregnancies);
          setGlucose(patientData.glucose);
          setBloodPressure(patientData.bloodpressure);
          setSkinThickness(patientData.skinthickness);
          setInsulin(patientData.insulin);
          setBMI(patientData.BMI);
          setDPF(patientData.DPF);
          setAge(patientData.age);
          setPatientID(patientData.patientID);
        }
      } catch (error) {
        setError("Error fetching patient data.");
      } finally {
        setLoading(false);
      }
    };

    fetchPatientData();
  }, [id]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedPatient = {
      patientName,
      pregnancies,
      glucose,
      bloodpressure,
      skinthickness,
      insulin,
      BMI,
      DPF,
      age,
      patientID
    };

    try {
      const response = await axios.put(`http://localhost:3000/DashPage/${id}`, updatedPatient);
      if (response.data.success) {
        navigate('/DashPage');
      }
    } catch (error) {
      setError("Error updating patient data.");
    }
  };

  // Loading and error handling UI
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className='update'>
      <div className='update-navbar'>
        <div className='update-left'>Welcome, Username</div>
        <div className='update-right'>
          <li className='update-item'><MdDashboard className='update-icon'/>DASHBOARD</li>
          <Link to="/DashPredict"><li className='update-item'><CgMenuGridR className='update-icon'/>OTHERS <IoMdArrowDropdown /></li></Link>
          <li className='update-buton'><BsFillPersonFill />LOGOUT</li>
        </div>
      </div>

      <div className='update-onetimeusers'>
        <div className='update-Left'>
          <div className='update-buttons'>
            <div className='update-one'><HiOutlineMenuAlt2 className='update-icon'/>NOTE</div>
            <div className='update-two'><IoMdInformationCircle className='update-icon' />DETAILS</div>
          </div>
          <div className='update-words'>
            <p>Hey there, here are some points that should be noted before starting to work with this site. </p>
            <p>The most important point to be noted is that, Our prediction model is only compatible with female patients because the AIML model takes in the term pregnancy as one of the inputs. So Please make sure to enter correct data.</p>
            <p><TbHandFingerLeft />Brief description of the parameters required are given in the details tab.</p>   
          </div>
        </div>

        <div className='update-Right'>
          <div className='update-top'>Medical Data</div>
          <div className='update-bottom'>
            <div className='update-title'>Please provide the required data of the patient</div>
            <form  onSubmit={handleSubmit}>
              <div className='update-middle'>
              <div className='update-leftside'>
                <div className='update-form'>
                  <div>Patient Name</div>
                  <div><input type="text" value={patientName} onChange={(e) => setPatientName(e.target.value)} required pattern="[A-Za-z\s]+" title="Only letters and spaces allowed." /></div>
                </div>
                <div className='update-form'>
                  <div>Pregnancies</div>
                  <div><input type="number" value={pregnancies} onChange={(e) => setPregnancies(e.target.value)} required min="0" /></div>
                </div>
                <div className='update-form'>
                  <div>Blood Pressure</div>
                  <div><input type="number" value={bloodpressure} onChange={(e) => setBloodPressure(e.target.value)} required min="0" /></div>
                </div>
                <div className='update-form'>
                  <div>Insulin</div>
                  <div><input type="number" value={insulin} onChange={(e) => setInsulin(e.target.value)} required min="0" /></div>
                </div>
                <div className='update-form'>
                  <div>DPF</div>
                  <div><input type="number" value={DPF} onChange={(e) => setDPF(e.target.value)} required min="0" /></div>
                </div>
              </div>

              <div className='update-rightside'>
                <div className='update-form'>
                  <div>Patient ID</div>
                  <div><input type="text" value={patientID} onChange={(e) => setPatientID(e.target.value)} required /></div>
                </div>
                <div className='update-form'>
                  <div>Glucose</div>
                  <div><input type="number" value={glucose} onChange={(e) => setGlucose(e.target.value)} required min="0" /></div>
                </div>
                <div className='update-form'>
                  <div>Skin Thickness</div>
                  <div><input type="number" value={skinthickness} onChange={(e) => setSkinThickness(e.target.value)} required min="0" /></div>
                </div>
                <div className='update-form'>
                  <div>BMI</div>
                  <div><input type="number" value={BMI} onChange={(e) => setBMI(e.target.value)} required min="0" /></div>
                </div>
                <div className='update-form'>
                  <div>Age</div>
                  <div><input type="number" value={age} onChange={(e) => setAge(e.target.value)} required min="0" /></div>
                </div>
              </div>
              </div>

              <div >
                <button className='update-button' type='submit'>CLICKCLICK!!!</button>
              </div>
            </form>
          </div>
        </div>
      </div>    
    </div>
  );
};

export default Update;
