import logo from './logo.svg';
import React,{useEffect,useState} from 'react';
import './App.css';
import Header from './Component/Header';
import { Routes , Route} from "react-router-dom";
import AboutUs from './Component/AboutUs';
import Home from "./Component/Home";
import Courses from "./Component/Courses";
import Project from "./Component/Project";
import Blogs from "./Component/Blogs";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";

import { initializeApp } from "firebase/app";
import{
    getFirestore, collection, getDocs,onSnapshot,
    addDoc,
    deleteDoc, doc  // delete the dota from data
  } from "firebase/firestore";


function App() {
  
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<>
        <Home />
        {/* {console.log(bl)} */}
        </>}/>
        <Route path='/aboutus' element={<>
        <AboutUs/>
        </>} />
        <Route path="/courses" element={<Courses />}/>
        <Route path="/project" element={<Project  />}/>
        <Route path="/blogs" element={<Blogs />}/>
        <Route  path="/contact" element={<Contact/>} />
      </Routes>
      <Footer className="footer"/>
     
    </div>
  );
}

export default App;
