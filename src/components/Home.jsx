import React from 'react'
import '../style.css/Home.css'
import { IoHomeSharp } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";
import { FaRobot } from "react-icons/fa";
import { BiSolidRightArrow } from "react-icons/bi";

const Home = () => {
  return (
    <div className='home'>
        <div className='navbar'>
            <div className='logo'>NeuralHack</div>
            <div className='menu'>
                
                    <div className='icon'><IoHomeSharp className='iconn' />HOME</div>
                    <div className='icon'><BsFillPersonFill  className='iconn' />LOGIN/ REGISTER</div>
                    <div className='icon'><BsFillPersonFill className='iconn'/>ONE TIME USER?</div>
                    <div className='icon'><FaRobot className='iconn'/>AIML GEEKS?</div>
                
            </div>
        </div>    
        <div className='main'>
            <div className='first'>Fast. Accurate. At the Click of a Finger.</div>
            <div className='second'>Within the comfort of your house, get instant updates on your health condition in a matter of seconds.</div>
            <div className='third'><BiSolidRightArrow />HOW DOES IT WORK?</div>
        </div>
           
    </div>
  )
}

export default Home