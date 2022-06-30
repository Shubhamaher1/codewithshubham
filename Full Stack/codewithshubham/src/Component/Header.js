import React from 'react';
import {Link} from "react-router-dom";
import "./header.css";

const Header = () => {
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  return (
    <div className='header_main'>
        <div className='header_logo'>
            <Link to="/">CodewithShubham</Link>
        </div>
        <div className="topnav" id="myTopnav">
        
                
                <Link to="/" onClick={(e)=>{
                  // e.preventDefault();
                  myFunction();
                  

                }} >Home</Link>
            
              
               
                <Link to="/aboutus" onClick={(e)=>{
                  // e.preventDefault();
                  myFunction();

                }}>AboutUs</Link>
                
               
                <Link to="/courses" onClick={(e)=>{
                  // e.preventDefault();
                  myFunction();

                }}>Courses</Link>
              
             
                <Link to="/project" onClick={(e)=>{
                  // e.preventDefault();
                  myFunction();

                }}>Project</Link>
               
                <Link to="/blogs"onClick={(e)=>{
                  // e.preventDefault();
                  myFunction();

                }}>Blogs</Link>
               
                <Link to="/contact"onClick={(e)=>{
                  // e.preventDefault();
                  myFunction();

                }}>Contact</Link>
                <a href="javascript:void(0);" className="icon" onClick={(e)=>{
                  // e.preventDefault();
                  myFunction();

                }}>
    <i className="fa fa-bars"></i>
  </a>
            
        </div>

    </div>
  )
}

export default Header