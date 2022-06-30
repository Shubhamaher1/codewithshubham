import React from 'react';
import "./footer.css";


const Footer = () => {
  return (
    <div className='footer'>
      
    <div><img id='footerlogo' src='https://i.ibb.co/rHFhKpC/img-1616912265130.jpg'/><span>CodewithShubham</span> </div>
    <div><span>Copyright @</span> <strong>{new Date().getFullYear()}</strong>/Shivshakti Pvt Limited</div>
    <div className='socialmedia'>
      <div><a href="https://www.facebook.com/shubham.aher.7393" className="fa fa-facebook">acebook</a></div>
      <div><a href='https://twitter.com/ShubhamSAher' className="fa fa-twitter">Twitter</a></div>
      <div><a href='https://www.instagram.com/shubhamsaher1'className="fa fa-instagram">Insta</a></div>
      <div><a href='https://www.linkedin.com/in/shubham-aher-9a4833197/'className="fa fa-linkedin">Linkedin</a></div>
      <div><a href='https://www.youtube.com/channel/UCMYX4vecg6IcgNPlmVoG7ag'className="fa fa-youtube">Youtube</a></div>
      <div><a href='https://github.com/Shubhamaher1' className="fa fa-github">GitHub</a></div>
      <div><a href='https://mail.google.com/mail/u/0/#inbox' className='fa fa-google'>Gmail</a></div>
      


    </div>
    </div>

  )
}

export default Footer