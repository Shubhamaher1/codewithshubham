import React,{useEffect, useState} from 'react';
import "./Courses.css";
import { initializeApp } from "firebase/app";
import{
    getFirestore, collection, getDocs,onSnapshot,
    addDoc,
    deleteDoc, doc  // delete the dota from data
  } from "firebase/firestore";
import Box from './Box';

  const firebaseConfig = {
    apiKey: "AIzaSyAiio9PIhG69olznmz_XbyLHVIkN5GJ8RY",
    authDomain: "codewithshubham-2a100.firebaseapp.com",
    projectId: "codewithshubham-2a100",
    storageBucket: "codewithshubham-2a100.appspot.com",
    messagingSenderId: "213922539894",
    appId: "1:213922539894:web:dd8fbbc906e6e0a0d1f257",
    measurementId: "G-HCYXF5GR4L"
  };
  initializeApp(firebaseConfig);
  //   console.log(app);
  
    // init sevvice
    const db = getFirestore();
    const colRef= collection(db,'ytvideo'); 

const Courses = () => {
  const[books,setbooks]=useState({});
  useEffect(()=>{
    let data=[]
    onSnapshot(colRef,(snapshot)=>{
    
      snapshot.docs.forEach((doc)=>{
          data.push({
              ...doc.data(), id:doc.id
          })
          setbooks(data);
      })
     
      // console.log(books);
      // const add = document.querySelector(".tbl");
      // let innr=``;
      // books.forEach((dat)=>{
      //     innr+=`<tr><td>${dat.title}</td><td>${dat.author}</td></tr> `;
          
          
      // })
      // add.innerHTML=innr;
  
  })
    
  },[])
  return (
    <div className='courses'>

      <h3>Our Free Courses</h3>
      <div className='flexbox'>
      {
       books.length>0 && books.map(ele=><Box imgurl={ele.urlimg} url={ele.url} headings={ele.heading} paras={ele.para}/>)
      }
      </div>
    </div>
  )
}

export default Courses;