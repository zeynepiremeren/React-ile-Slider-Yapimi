import React from 'react';
import './App.css';
import {dataPopStar} from './Data';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

 function App() {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <div className='App'>
      <h1> Top Popstar List </h1>
      <Slider {...settings}> 
     {dataPopStar.map(item => (
       <div className="card">
        <div className="card-top">
          <img src={item.image}  alt=""/>
          <h1> {item.title} </h1>
        </div>
       
       </div>
     ))
     }
     </Slider>
    </div>
  )
}
export default App;
















       // PROFİL DEĞİŞTİRME        

// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import './App.css';


// function App() {
//      const [profileName, setProfileName]= useState("");
//      const [profileCell, setProfileCell]= useState("");
//      const [profileImage, setProfileImage]= useState("");
//      const [profileEmail, setProfileEmail]= useState("");

//  const profileData = async ()=> {
//   try {
//     const res= await axios.get("https://randomuser.me/api");
//     console.log(res)
//     setProfileCell(res.data.results[0].cell);
//     setProfileEmail(res.data.results[0].email);
//     setProfileImage(res.data.results[0].picture.large);
//     setProfileName(`${res.data.results[0].name.first} ${res.data.results[0].name.last}`);
//   } catch (error) {
//     console.log("error");
//   }
//  }

//  useEffect(()=>{
//   profileData();
// },[])


//   return (
    
//     <>
//        <div className="profileContainer">
//         <img src={profileImage} alt="" />
//         <h1> {profileName} </h1>
//         <p> {profileEmail} </p>
//         <p> {profileCell} </p>
//        </div>


//        <button onClick={profileData }> tıka </button>
//    </>
//   );
// }

// export default App;
