import React from 'react';
import AboutUs from './AboutUs';
import SubmitFrom from "./SubmitFrom";
import "./Contact.css";

const Contact = () => {
  return (
    <div className='contact'>
      <h3>Contact</h3>
      <div className='contact_two_part'>
        <AboutUs/>
        <SubmitFrom/>
        
      </div>

    </div>
  )
}

export default Contact;