import React from 'react'
import DashNavbar from './DashNavbar.jsx';
import DashPage from './DashPage.jsx';// import { Outlet} from 'react-router-dom'


const DashLayout = () => {
  return (
    <div >
        <DashNavbar/>
        <DashPage/>
    </div>
  )
}

export default DashLayout