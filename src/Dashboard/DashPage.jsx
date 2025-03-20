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
      console.log("Fetched Data:", response.data); // ✅ Debugging log
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
      {/* <div className='dashnavbar'>
        <div className='dashpage-left'>Welcome, Username</div>
        <div className='dashpage-right'>
          <li className='item'><MdDashboard className='dashpage-icon'/>DASHBOARD</li>
          <Link to="/DashPredict"><li className='item'><CgMenuGridR className='dashpage-icon'/>OTHERS <IoMdArrowDropdown /></li></Link>
          <li className='dashpage-button'><BsFillPersonFill />LOGOUT</li>
        </div>
      </div> */}

      {/* Cards Section */}
      {/* <div className='cardcontainer'>
        <div className='card'>
          <div className='cardcontent'>
            <div className='patients'>{users.length} Patients</div>
            <div>Total Number of Patients Analysed</div>
          </div> 
          <div className='smallcard1'><FaWheelchair className='icon'/> Patients Analysed</div>
        </div>
      </div> */}

      {/* Table Section */}
      <div className='table'>
        <div className='orderspage'>
          <div className='tablehead'>
            <div>PATIENTS DATA HISTORY</div>
            <div className='dashsearch'> 
              <IoMdSearch className='icon' /> 
              <input type='search' placeholder='Search'/>
            </div>
          </div>

          <div className='table'>
            <table>
              <thead>
                <tr>
                  <th className='tabletitle'>Patient Name</th>
                  <th className='tabletitle'>Patient ID</th>
                  <th className='tabletitle'>Pregnancies</th>
                  <th className='tabletitle'>Glucose</th>
                  <th className='tabletitle'>Blood Pressure</th>
                  <th className='tabletitle'>Skin Thickness</th>
                  <th className='tabletitle'>Insulin</th>
                  <th className='tabletitle'>BMI</th>
                  <th className='tabletitle'>DPF</th>
                  <th className='tabletitle'>Age</th>
                  <th>Action</th>
                </tr>
              </thead>

              {/* <tbody>
             {
              users.map((el, index)=>{
             return(
              <tr key={el.id || index}>
                 <td>{el.patientName}</td>  
                 <td>{el.patientID}</td>
                 <td>{el.pregnancies}</td>
                 <td>{el.glucose}</td>
                 <td>{el.bloodpressure}</td>
                 <td>{el.skinthickness}</td> 
                 <td>{el.insulin}</td>
                 <td>{el.BMI}</td> 
                 <td>{el.DPF}</td> 
                 <td>{el.age}</td>
                 <td>
                    <Link to="/DashPredict"><button>Edit</button></Link>
                    <button onClick={() => handleDelete(el._id)}>Delete</button>
                 </td>
              </tr>
             )
              })
             }
              </tbody> */}


<tbody>
  {users.map((el, index) => (
    <tr key={el._id || index}>
      <td>{el.patientName}</td>
      <td>{el.patientID}</td>
      <td>{el.pregnancies}</td>
      <td>{el.glucose}</td>
      <td>{el.bloodpressure}</td>
      <td>{el.skinthickness}</td>
      <td>{el.insulin}</td>
      <td>{el.BMI}</td>
      <td>{el.DPF}</td>
      <td>{el.age}</td>
      <td>
        <Link to={`/update/${el._id}`}>
          <button>Edit</button>
        </Link>
        <button   onClick={(e) => {e.stopPropagation(); // Prevent the row click event from firing
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
