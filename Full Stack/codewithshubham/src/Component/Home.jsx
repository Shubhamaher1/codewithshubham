import React,{useEffect, useState} from 'react';
import "./Home.css";
import {Link} from "react-router-dom";
import Box from './Box';
import { initializeApp } from "firebase/app";
import{
    getFirestore, collection, getDocs,onSnapshot,
    addDoc,
    deleteDoc, doc  // delete the dota from data
  } from "firebase/firestore";
import Header from './Header';
import BlogBox from './BlogBox';
import ProjectBox from './ProjectBox';

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
    const colRef1=collection(db,"blogs");
    const colRef2= collection(db,"project");
const Home = () => {
  const [bl, setbl]=useState({});
  const[books,setbooks]=useState({});
  const[proj,setProj]= useState({});
  
  
    //   console.log(db);
    
      // collection ref 
      
      // let books=[];
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
    // let bl=[];
    let data1=[];
    
    onSnapshot(colRef1,(snapshot)=>{
      snapshot.docs.forEach((doc)=>{
        data1.push({...doc.data(),id:doc.id})
      })
      setbl(data1)
    })
    
  
    // let proj=[];
    let projdata=[];
    
    onSnapshot(colRef2,(snapshot)=>{
      snapshot.docs.forEach((doc)=>{
        projdata.push({...doc.data(), id:doc.id})
      })
      setProj(projdata);
      // App();
    })
    
      },[])
    // console.log(proj);
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional

    //
  // console.log(props.proj)
  const[datas,setdata]=useState("");
 
 

  return (

    <div className='home'>
          <div className='home_main'>
            <h1>Welcome to CodewithShubham</h1>
            <div>
            <p>
            Confused on which course to take? I have got you covered. 
            Browse courses and find out the best course for you. Its free! Code With Harry is my attempt to teach basics and those coding
             techniques to people in short time which took me ages to learn.
            </p>
            </div>
            <div><Link to="/courses"><button>Free Courses</button></Link>
            <Link to="/blogs"><button>Explore Blog</button></Link>
            <Link to="/project"><button>Free Project</button></Link>
            </div>
          </div>
          <div className='home_courses' onLoad={()=>{
            setdata("data")
          }}>
            <h1>Free Courses</h1>
            {books.length>0 && console.log(books[0])}
            <div className="flexbox">
            { books.length>0 && books.map((ele,ind)=>{
              if(ind<6){
                return(<Box imgurl={ele.urlimg} url={ele.url} headings={ele.heading} paras={ele.para}/>)
              }
            })
              
            }
            </div>

            
          </div>
          <div className='home_blog'>
            <h1>Blogs</h1>
            {bl.length>0&& console.log(bl[0])}
           <div className='flexbox'>
           {bl.length>0 && bl.map((ele,ind)=>{
             if(ind<6){
               return(<BlogBox imgurl={ele.urlimg} url={ele.url} headings={ele.heading} paras={ele.para}/>)
             }
           })
              // }
              
           }
           </div>

          </div>
          <div className='home_project'>
            <h1>Projects</h1>
           <div className='flexbox'>
             
           {proj.length>0&& proj.map((ele,ind)=>{
             if(ind<6){
             return( <ProjectBox imgurl={ele.urlimg} url={ele.url} headings={ele.heading} paras={ele.para}/>)
             }
           })}
           </div>
            {/* { proj.length>0 &&proj.forEach((element,index) => {
              // if(index<8){
                console.log(element.url)
                // console.log(element)
                // setdata(element.para)
                return(
                  <Box />
                )
              // }
              
            })} */}
              
          </div>

     
    </div>
  )
}

export default Home