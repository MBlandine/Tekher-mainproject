import React, { useEffect, useState } from 'react';
import '../style.css/DashPage.css';
import { MdDashboard } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";
import { BsFillPersonFill } from "react-icons/bs";
import { IoMdArrowDropdown, IoMdSearch } from "react-icons/io";
import { FaWheelchair } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import axios from 'axios';

const DashPage = () => {
  const [users, setUsers] = useState([]);

  // const[dataList, setDataList] = useState([])






   
// const getFetchData = async ()=>{
//   const data = await axios.get("http://localhost:3000/DashPage")
//   console.log(data)
//   if(data.data.success){
//     setDataList(data.data.data)
  
    
//   }
// }
// useEffect(()=>{
//   getFetchData()
// },[])

// console.log(dataList)








useEffect(() => {
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/DashPage");
      console.log("Fetched Data:", response.data); // Debugging log
      if (response.data && Array.isArray(response.data.data)) {
        setUsers(response.data.data);
      } else {
        console.log("No patient data found.");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  fetchUsers();
}, []);


useEffect(() => {
  console.log("Users state updated:", users);
}, [users]);




// const handleDelete = async (id) => {
//   try {
//     const response = await axios.delete(`http://localhost:3000/DashPage/${id}`);
//     console.log("Delete Response:", response); // ✅ Debugging log
//     setUsers(users.filter(user => user.patientID !== id));
//   } catch (error) {
//     console.error("Error deleting patient data:", error.response ? error.response.data : error);
//   }
// };


// const handleDelete = (id) => {
//   console.log(`Deleting patient with _id: ${id}`);

//   // Example: If using state
//   setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));

//   // If deleting from an API (adjust endpoint based on your backend)
//   fetch(`/api/delete/${id}`, { method: "DELETE" })
//     .then((res) => res.json())
//     .then((data) => console.log("Deleted successfully:", data))
//     .catch((err) => console.error("Error deleting:", err));
// };


// Handle deletion
const handleDelete = async (id) => {
  try {
    console.log(`Deleting patient with _id: ${id}`);
    // Make the DELETE request to the backend with the patient _id
    const response = await fetch(`http://localhost:3000/DashPage/${id}`, { method: "DELETE" });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to delete user");
    }

    const data = await response.json();
    console.log("Deleted successfully:", data);

    // Update state to remove the deleted patient
    setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));

  } catch (err) {
    console.error("Error deleting:", err.message);
  }
};









  return (
    <div className='dashpage'>
      {/* Navbar Section */}
      <div className='dashnavbar-dashpage'>
        <div className='dashpage-left'>WELCOME,</div>
        <div className='dashpage-right'>
          <li className='item-dashpage'><MdDashboard className='dashpage-icon'/>DASHBOARD</li>
          <Link to="/DashPredict"><li className='item-dashpage'><CgMenuGridR className='dashpage-icon'/>OTHERS <IoMdArrowDropdown /></li></Link>
          <Link to="/Home"><li className='dashpage-button'><BsFillPersonFill />LOGOUT</li></Link>
          {/* <li><button className='dashpage-button' ><BsFillPersonFill />LOGOUT</button></li> */}
        </div>
      </div>

      {/* Cards Section */}
      <div className='cards-dashpage'>
      <div className='cardcontainer-dashpage'>
        <div className='card-dashpage'>
          <div className='cardcontent-dashpage'>
            <div className='patients-dashpage'>{users.length} Patients</div>
            <div>Total Number of Patients Analysed</div>
          </div> 
          <div className='smallcard1-dashpage'><FaWheelchair className='icon-dashpage'/> Patients Analysed</div>
        </div>
      </div>
      <div className='cardcontainer-dashpage'>
        <div className='card-dashpage'>
          <div className='cardcontent-dashpage'>
            <div className='patients-dashpage'>SVM</div>
            <div>Model : 77% ACCURACY</div>
          </div> 
          <div className='smallcard2-dashpage'><FaWheelchair className='icon-dashpage'/> Patients Analysed</div>
        </div>
      </div>
      <div className='cardcontainer-dashpage'>
        <div className='card-dashpage'>
          <div className='cardcontent-dashpage'>
            <div className='patients-dashpage'>Decision Tree</div>
            <div>Model : 75% ACCURACY</div>
          </div> 
          <div className='smallcard3-dashpage'><FaWheelchair className='icon-dashpage'/> Patients Analysed</div>
        </div>
      </div>
      </div>

      {/* Table Section */}
      <div className='table-dashpage'>
        <div className='orderspage-dashpage'>
          <div className='tablehead-dashpage'>
            <div>PATIENTS DATA HISTORY</div>
            <div className='dashsearch-dashpage'> 
              <IoMdSearch className='icon-dashpage' /> 
              <input type='search' placeholder='Search'/>
            </div>
          </div>

          <div className='table-dashpage'>
            <table>
              <thead>
                <tr className='patient-items'>
                  <th className='tabletitle-dashpage'>Patient Name</th>
                  <th className='tabletitle-dashpage'>Patient ID</th>
                  <th className='tabletitle-dashpage'>Pregnancies</th>
                  <th className='tabletitle-dashpage'>Glucose</th>
                  <th className='tabletitle-dashpage'>Blood Pressure</th>
                  <th className='tabletitle-dashpage'>Skin Thickness</th>
                  <th className='tabletitle-dashpage'>Insulin</th>
                  <th className='tabletitle-dashpage'>BMI</th>
                  <th className='tabletitle-dashpage'>DPF</th>
                  <th className='tabletitle-dashpage'>Age</th>
                  <th className='tabletitle-dashpage1'>Action</th>
                </tr>
              </thead>


<tbody>
  {users.map((el, index) => (
    <tr key={el._id || index} className='patient-item'>
      <td className='patient-item1'>{el.patientName}</td>
      <td className='patient-item2'>{el.patientID}</td>
      <td className='patient-item3'>{el.pregnancies}</td>
      <td className='patient-item4'>{el.glucose}</td>
      <td className='patient-item5'>{el.bloodpressure}</td>
      <td className='patient-item6'>{el.skinthickness}</td>
      <td className='patient-item7'>{el.insulin}</td>
      <td className='patient-item8'>{el.BMI}</td>
      <td className='patient-item9'>{el.DPF}</td>
      <td className='patient-item10'>{el.age}</td>
      <td >
        <Link to={`/update/${el._id}`}>
          <button className='action-update'>Edit</button>
        </Link>
        <button className='action-delete' style={{ marginLeft: "5px" }}  onClick={(e) => {e.stopPropagation(); // Prevent the row click event from firing
                 handleDelete(el._id); // Pass the _id for deletion
                }}>Delete</button>
      </td>
    </tr>
  ))}
</tbody>

            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashPage;
