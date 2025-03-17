import React from 'react'
import '../style.css/Home.css'
import { IoHomeSharp } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";
import { FaRobot } from "react-icons/fa";
import { BiSolidRightArrow } from "react-icons/bi";
import { FaQuestionCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { Link } from 'react-router-dom';
const Home = () =>{ 
  return (
    <div className='All'>
    <div className='home'>
        <div className='home-navbar'>
            <div className='home-logo'>NeuralHack</div>
            <div className='home-menu'>
                
                   <Link to= "/Home"> <div className='home-icon'><IoHomeSharp className='home-iconn' />HOME</div></Link>
                    <Link to="/Login"><div className='home-icon'><BsFillPersonFill  className='home-iconn' />LOGIN/ REGISTER</div></Link>
                    <Link to="/OneTimeUser"><div className='home-icon'><BsFillPersonFill className='home-iconn'/>ONE TIME USER?</div></Link>
                    <div className='icon'><FaRobot className='home-iconn'/>AIML GEEKS?</div>
                
            </div>
        </div>    
        <div className='main'>
            <div className='first'>Fast. Accurate. At the Click of a Finger.</div>
            <div className='second'>Within the comfort of your house, get instant updates on your health condition in a matter of seconds.</div>
            <div className='third'><a href="https://www.youtube.com/watch?v=VIDEO_ID" ><BiSolidRightArrow />HOW DOES IT WORK?</a></div>
        </div>
           
    </div>

    <div className='contact'>
      <div className='contact-title'>Contact Us</div>
      <div className='contact-subtitle'>Want to get in touch? We'd love to hear from you. Here's how you can reach us...</div>
      <div className='contact-leftright'>
      <div className='contact-left'>
      <div  className='contact-useremail'>
        <form><input type="text" placeholder='Username' required pattern="[A-Za-z\s]+" title="Only letters and spaces allowed."></input></form>
        <form><input type="text" placeholder='Email' required pattern="[A-Za-z\s]+" title="Only letters and spaces allowed."></input></form>
      </div>
      
      <div  className='message'><form><input type="text-area" placeholder='Message' required pattern="[A-Za-z\s]+" title="Only letters and spaces allowed."></input></form></div>
      <div className='contact-button'>SEND MESSAGE</div>
      </div>
      <div className='contact-right'>
        <div className='contact-icons'>
          <div  className='icon3'><FaQuestionCircle className='iconic' />FAQ</div>
          <div className='icon3'><div><FaLocationDot  className='iconic'/></div><div>LOCATION</div></div>
        </div>
        <div className='contact-info'>
          <div className='address'>
            <div className='adresss'>Address:</div>
            <div className='adress1' >67 Bharathyar, st.Ekkathuhangal</div>
            <div className='adress2'>Chennai</div>
            <div className='adress3'>Tamil Naduk</div>
            <div className='adress4'>600032</div>
          </div>
          <div className='contacts'>
            <div className='contactt'>Contact:</div>
            <div className='contact1'>Phone: +91 9876543210</div>
            <div className='contact2'>Email: neuralhack@gmail.com</div>
          </div>
          <div className='three-icon'>
            <div><AiFillFacebook /></div>
            <div><FaInstagramSquare className='icon-insta' /></div>
            <div><TbWorldWww /></div>
          </div>
          
        </div>
      </div>
      </div>
    </div>
    </div>

    
  )
}

export default Home