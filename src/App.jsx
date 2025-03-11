
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashLayout from './Dashboard/DashLayout.jsx'
import DashNavbar from './Dashboard/DashNavbar.jsx'
import DashPage from './Dashboard/DashPage.jsx'

import './App.css';




const App = () => {
  return (
    <div><Router>
      <Routes>
      
      <Route path='/' index element={<DashLayout/>}/>
      <Route path='/DashNavbar' element={<DashNavbar/>}/>
      <Route path='/DashPage' element={<DashPage/>}>
    
      </Route>


      </Routes>

      </Router></div>
  )
}
 export default App;
