import React from 'react';
import {Link} from "react-router-dom";
import "./Aboutus.css";


const AboutUs = () => {
  return (
    <div className='about_us'>
    <h3>About Me</h3>
    <img src="https://i.ibb.co/rHFhKpC/img-1616912265130.jpg" alt="" srcset=""  id="myphoto"/>
    <p>FullStack Developer</p>
    <div><strong>B.Tech VJTI ,Mumbai</strong></div>
    <div className='social_m'>

    <div><a href='https://twitter.com/ShubhamSAher'>Twitter</a></div>
    <div><a href='https://www.facebook.com/shubham.aher.7393'>Facebook</a></div>
      <div><a href='https://www.instagram.com/shubhamsaher1'>Insta</a></div>
      <div><a href='https://www.linkedin.com/in/shubham-aher-9a4833197/'>Linkdin</a></div>
      <div><a href='https://www.youtube.com/channel/UCMYX4vecg6IcgNPlmVoG7ag'>Youtube</a></div>
      <div><a href='https://github.com/Shubhamaher1'>GitHub</a></div>
      <div><a href='https://mail.google.com/mail/u/0/#inbox'>Gmail</a></div>


    </div>


    </div>
  )
}

export default AboutUs