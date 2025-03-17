
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashLayout from './Dashboard/DashLayout.jsx'
import DashNavbar from './Dashboard/DashNavbar.jsx'
import DashPage from './Dashboard/DashPage.jsx'
import DashProfile from "./Dashboard/DashProfile.jsx";
import DashPredict from "./Dashboard/DashPredict.jsx";
// import Layout from "./components/Layout.jsx";
import Home from './components/Home.jsx'
import OneTimeUser from "./components/OneTimeUser.jsx";
import Registration from "./components/Registration.jsx";
import Login from "./components/Login.jsx";

import './App.css';





const App = () => {
  return (
    <div><Router>
      <Routes>
      
      <Route path='/' element={<DashLayout/>}/>
      <Route path='/DashNavbar' element={<DashNavbar/>}/>
      < Route path='/DashProfile'element={<DashProfile/>}/>
      < Route path='/DashPredict' element={< DashPredict/>}/>
      <Route path='/DashPage' element={<DashPage/>}>
     
      </Route>

      {/* <Route path="/" index element={<Layout/>}/> */}
      <Route path="/" index element={<Home/>}/>
      < Route path="/Home" element={<Home/>}/>
      < Route path="/OneTimeUser" element={<OneTimeUser/>}/>
      < Route path="/Registration"element={<Registration/>}/>
      < Route path="/Login"element={<Login/>}/>


     


      </Routes>

      </Router></div>
  )
}
 export default App;
