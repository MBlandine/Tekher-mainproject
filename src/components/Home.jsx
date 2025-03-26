import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../style.css/Home.css';


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
import { MdLocalHospital } from "react-icons/md";
const Home = () =>{ 
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_dfq46y7', 'template_pakk5fb', form.current, '1IHU8lDVIAoVlFcGw')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };
  return (
    <div className='All'>
    <div className='home'>
        <div className='home-navbar'>
            <Link to="/Home"><div className='home-logo'>NeuralHack</div></Link>
            <div className='home-menu'>
                
                   <Link to= "/Home"> <div className='home-icon'><IoHomeSharp className='home-iconn' />HOME</div></Link>
                    <Link to="/Registration"><div className='home-icon'><BsFillPersonFill  className='home-iconn' />LOGIN/ REGISTER</div></Link>
                    <Link to="/DiabetesPrediction"><div className='home-icon'><BsFillPersonFill className='home-iconn'/>ONE TIME USER?</div></Link>
                    <div className='icon'><FaRobot className='home-iconn'/>AIML GEEKS?</div>
                
            </div>
        </div>    
        <div className='main'>
            <div className='first'>Fast. Accurate. At the Click of a Finger.</div>
            <div className='second'>Within the comfort of your house, get instant updates on your health condition in a matter of seconds.</div>
            <div className='third'><a href="https://www.youtube.com/watch?v=VIDEO_ID" ><BiSolidRightArrow />HOW DOES IT WORK?</a></div>
        </div>
           
    </div>
<div className="white">
  <div className='lettalkproduct'>
    <diV className='lettalkproduct-upper'>
      <div className='lettalkproduct-uppertitle'>Let's talk product.</div>
      <div className='lettalkproduct-uppertext'>Infusing the power of machine learning with a simple, intuitive user interface, we bring forth our product, first launched in 2020. Designed to bridge the gap between cutting-edge AI and seamless user experience, our solution empowers users with intelligent insights while maintaining ease of use.

Over the years, we have refined our technology to ensure accuracy, efficiency, and adaptability.</div>
    </diV>
    <div className='lettalkproduct-down'>
      <div className='down-one'>
        <div className='icon'>< MdLocalHospital/></div>
        <div className='accurate'>Accurate</div>
        <div className='text'>Infusing the power of machine learning with a simple, intuitive user interface, we bring forth our product.</div>
      </div>
      <div className='down-one'>
        <div className='icon'>< MdLocalHospital/></div>
        <div className='accurate'>Accurate</div>
        <div className='text'>Infusing the power of machine learning with a simple, intuitive user interface, we bring forth our product.</div>
      </div>
      <div className='down-one'>
        <div className='icon'>< MdLocalHospital/></div>
        <div className='accurate'>Accurate</div>
        <div className='text'>Infusing the power of machine learning with a simple, intuitive user interface, we bring forth our product.</div>
      </div>
      <div className='down-one'>
        <div className='icon'>< MdLocalHospital/></div>
        <div className='accurate'>Accurate</div>
        <div className='text'>Infusing the power of machine learning with a simple, intuitive user interface, we bring forth our product.</div>
      </div>
    </div>
  </div>
  <section>
    <div className='contact'>
      <div className='contact-title'>Contact Us</div>
      <div className='contact-subtitle'>Want to get in touch? We'd love to hear from you. Here's how you can reach us...</div>
      <div className='contact-leftright'>
    
     <form className='contact-left' ref={form} onSubmit={sendEmail}>
      <div className='contact-useremail'>
      <div className="contact-form">
      <input type="text" name="user_name" placeholder="Name" required pattern="[A-Za-z\s]+" title="Only letters and spaces allowed." autocomplete="name"/>
    </div>
    <div className="contact-form">
      <input type="email" name="user_email" placeholder="Email" required autocomplete="email"/>
    </div>
      </div>
      
      <div className='contact-formmessage'><div>Message</div><textarea name="message"  required></textarea></div>
      <div className='contact-button'><button type="submit">SEND MESSAGE</button></div>
      </form>
    
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
    </section> 
    </div> 
    </div>
   

    
  )
}

export default Home