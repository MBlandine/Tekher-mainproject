
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashLayout from './Dashboard/DashLayout.jsx'
import DashNavbar from './Dashboard/DashNavbar.jsx'
import DashPage from './Dashboard/DashPage.jsx'
// import Layout from "./components/Layout.jsx";
import Home from './components/Home.jsx'
import OneTimeUser from "./components/OneTimeUser.jsx";

import './App.css';




const App = () => {
  return (
    <div><Router>
      <Routes>
      
      <Route path='/' element={<DashLayout/>}/>
      <Route path='/DashNavbar' element={<DashNavbar/>}/>
      <Route path='/DashPage' element={<DashPage/>}>
      </Route>

      {/* <Route path="/" index element={<Layout/>}/> */}
      <Route path="/" index element={<Home/>}/>
      < Route path="/OneTimeUser" element={<OneTimeUser/>}/>


     


      </Routes>

      </Router></div>
  )
}
 export default App;
