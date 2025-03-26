
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashLayout from './Dashboard/DashLayout.jsx'
import DashNavbar from './Dashboard/DashNavbar.jsx'
import DashPage from './Dashboard/DashPage.jsx'
import DashProfile from "./Dashboard/DashProfile.jsx";
import DashPredict from "./Dashboard/DashPredict.jsx";
import Update from "./Dashboard/Update.jsx";
import DiabetesPrediction from './components/DiabetesPrediction.jsx'; 
// import Layout from "./components/Layout.jsx";
import Home from './components/Home.jsx'
// import OneTimeUser from "./components/OneTimeUser.jsx";
import Registration from "./components/Registration.jsx";
import Login from "./components/Login.jsx";


// import DashboardLayout from "./AllDashboard/DashboardLayout.jsx";
// import Card from "./AllDashboard/Card.jsx"
// import Orders from "./AllDashboard/Orders.jsx";
// import Products from "./AllDashboard/Products.jsx";
// import Customers from "./AllDashboard/Customers.jsx";

import './App.css';





const App = () => {
  return (
    <div><Router>
      <Routes>
      
      <Route path='/' element={<DashLayout/>}/>
      <Route path='/DashNavbar' element={<DashNavbar/>}/>
      < Route path='/DashProfile'element={<DashProfile/>}/>
      < Route path='/DashPredict' element={< DashPredict/>}/>
      < Route path="/Update/:id" element={<Update/>}/>
      <Route path="/DiabetesPrediction" element={<DiabetesPrediction />} />
      <Route path='/DashPage' element={<DashPage/>}>
      
     
      </Route>

      {/* <Route path="/" index element={<Layout/>}/> */}
      <Route path="/" index element={<Home/>}/>
      < Route path="/Home" element={<Home/>}/>
      {/* < Route path="/OneTimeUser" element={<OneTimeUser/>}/> */}
      < Route path="/Registration"element={<Registration/>}/>
      < Route path="/Login"element={<Login/>}/>


     
      {/* <Route path="/" element={<DashboardLayout/>}>
      <Route path="/Card" index element={<Card/>}/>
      <Route path="/Orders" element={<Orders/>}/>
      <Route path="/Products" element={<Products/>}/>
      <Route path="/Customers" element={<Customers/>}/>
      </Route> */}




      </Routes>

     

      </Router></div>
  )
}
 export default App;
