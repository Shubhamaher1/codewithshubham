import React from 'react';
import "./Box.css";

const ProjectBox = (props) => {

// console.log(url,heading,para);
console.log(props.imgurl);
console.log(props.headings);
console.log(props.paras);

console.log("box");


  return (
    <div className='box'>
      {console.log(props.imgurl)}
       <div className='img'>
       <img class="w-full" src={props.imgurl} alt="Tailwind Course In Hindi"/>

       </div>
       <div className='sec_box'>
       <div className='free'>Free Project</div>
       <div className='heading'>
           <h3>{props.headings}</h3>

       </div>
       <div className='description'>
           <p>{props.paras}</p>
       </div>
       <div className='watchbtn'>
       <a href={props.url}>
           <button>View</button>
       </a>
       </div>
       </div>

    </div>
    // <></>
  )
}

export default ProjectBox;
