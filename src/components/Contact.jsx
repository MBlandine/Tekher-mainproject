import React from 'react'
import "../style.css/Contact.css"
import { FaQuestionCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { Link } from 'react-router-dom';


const Contact = () => {
  return (
    <div>
    
    <div className='contactt'>
      <div className='contactt-title'>Contact Us</div>
      <div className='contactt-subtitle'>Want to get in touch? We'd love to hear from you. Here's how you can reach us...</div>
      <div className='contactt-leftright'>
    
     <form className='contactt-left'>
      <div className='contactt-useremail'>
      <div className="contactt-form">
      <input type="text"  placeholder="Name" required pattern="[A-Za-z\s]+" title="Only letters and spaces allowed." />
    </div>
    <div className="contactt-form">
      <input type="email"  placeholder="Email" required />
    </div>
      </div>
      
      <div className='contactt-formmessage'><div>Message</div><textarea name="message"  required></textarea></div>
      <div ><button className='contact-button'>SEND MESSAGE</button></div>
      </form>
    
    <div className='contactt-right'>
        <div className='contactt-icons'>
          <div  className='icon3-contactt'><FaQuestionCircle className='iconic-contactt' />FAQ</div>
          <Link to="/Home"><div className='icon3-contactt'><div><FaLocationDot  className='iconic-contactt'/></div><div>LOCATION</div></div></Link>
        </div>
        <div className='contactt-info'>
          <div className='address-contacttt'>
             <div className='address-contacttt-t'><div className='here'><p>Q1.What's the different between a Onetimeuser and registered User?</p>
                  <p>Ans:A one-time user does not create an account or log in. 
                     They can access certain features or make a prediction without their data being stored for future sessions.</p>
                  </div>
                  <div className='here'>
                  <p>Q2.What are all the parameters a user should provide?</p>
                  <p> Ans:User can refer the details tab present in the prediction site for clear explanation.</p>
                  </div>
                  
                  <p>Q3.Enable to find Registration Page in the Login/Register page?</p>
                  <p> Ans: Sometimes, A little animation could bring discomfort for others,You'll be able to find a register on the same slide of Login.</p>

             </div>
          </div>
         
          {/* <div className='three-icon-contactt'>
            <div><AiFillFacebook /></div>
            <div><FaInstagramSquare className='icon-insta-contactt' /></div>
            <div><TbWorldWww /></div>
          </div> */}
          
        </div>
      </div>
      </div>
    </div>
     
    </div>
  )
}

export default Contact