import React, { useEffect, useState } from 'react';
import '../style.css/DashPage.css';
import { MdDashboard } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";
import { BsFillPersonFill } from "react-icons/bs";
import { IoMdArrowDropdown, IoMdSearch } from "react-icons/io";
import { FaWheelchair } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { IoDownloadOutline } from "react-icons/io5";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const DashPage = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');  // State to hold the search query
  const [loggedInUser, setLoggedInUser] = useState("");

  useEffect(() => {
    // Get the logged-in user's name from localStorage
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setLoggedInUser(storedUser);
    }
  }, []);


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

  const handleDelete = async (id) => {
    try {
      console.log(`Deleting patient with _id: ${id}`);
      const response = await fetch(`http://localhost:3000/DashPage/${id}`, { method: "DELETE" });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to delete user");
      }

      const data = await response.json();
      console.log("Deleted successfully:", data);
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
    } catch (err) {
      console.error("Error deleting:", err.message);
    }
  };

  // Function to handle the search input
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filtered users based on search query
  const filteredUsers = users.filter((user) => {
    return (
      user.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.patientID.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.pregnancies.toString().includes(searchQuery) ||
      user.glucose.toString().includes(searchQuery) ||
      user.bloodpressure.toString().includes(searchQuery) ||
      user.skinthickness.toString().includes(searchQuery) ||
      user.insulin.toString().includes(searchQuery) ||
      user.BMI.toString().includes(searchQuery) ||
      user.DPF.toString().includes(searchQuery) ||
      user.age.toString().includes(searchQuery)
    );
  });

  // Function to download the table as a PDF
  const handleDownloadPDF = () => {
    const input = document.getElementById("table-to-download"); // Get the table element
    html2canvas(input, {
      scale: 4, // Increase scale for better resolution
      useCORS: true,
      letterRendering: true,
      height: input.scrollHeight + 20, // Increase height to ensure buttons aren't cut off
      width: input.scrollWidth + 20,  // Increase width to ensure full content
    }).then((canvas) => {
      const pdf = new jsPDF({
        orientation: "landscape", // Landscape mode for better table fit
        unit: "mm",
        format: "a4",
      });

      const imgData = canvas.toDataURL('image/jpeg');
      const imgWidth = 290; // Slightly less than A4 width for margins
      const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio

      // Adjust the image position to fit the content properly on the page
      pdf.addImage(imgData, 'JPEG', 10, 10, imgWidth, imgHeight);

      pdf.save("patient_data.pdf");
    });
  };

  return (
    <div className='dashpage'>
      {/* Navbar Section */}
      <div className='dashnavbar-dashpage'>
        <div className='dashpage-left'>Welcome, <strong className='name-dashpage'>{loggedInUser || "User"}</strong></div>
        <div className='dashpage-right'>
          <Link className='/DashPage'><li className='item-dashpage'><MdDashboard className='dashpage-icon'/>DASHBOARD</li></Link>
          <Link to="/DashPredict"><li className='item-dashpage'><CgMenuGridR className='dashpage-icon'/>OTHERS <IoMdArrowDropdown /></li></Link>
          <Link to="/Home"><li className='dashpage-button'><BsFillPersonFill />LOGOUT</li></Link>
        </div>
      </div>

      {/* Cards Section */}
      <div className='cards-dashpage'>
        {/* Add your cards here */}
      </div>

      {/* Table Section */}
      <div className='table-dashpage'>
        <div className='orderspage-dashpage'>
          <div className='tablehead-dashpage'>
            <div>PATIENTS DATA HISTORY</div>
            <div className='dashsearchh-dashpage'>
              <div className='dashsearch-dashpage'>
                <IoMdSearch className='icon-dashpage' />
                <input
                  type='search'
                  placeholder='Search'
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </div>
              {/* Download icon */}
              <IoDownloadOutline className='downloadicon-dashpage' onClick={handleDownloadPDF} />
            </div>
          </div>

          {/* Table to Download */}
          <div className='table-dashpage'>
            <table id="table-to-download">
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
                {filteredUsers.map((el, index) => (
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
                    <td>
                      <Link to={`/update/${el._id}`}>
                        <button className='action-update'>Edit</button>
                      </Link>
                      <button className='action-delete' style={{ marginLeft: "5px" }} onClick={(e) => { e.stopPropagation(); handleDelete(el._id); }}>Delete</button>
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
