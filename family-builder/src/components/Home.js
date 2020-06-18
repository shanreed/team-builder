// import React from "react";
// import { useHistory } from "react-router-dom";

// function Home(props) {
//   console.log(props);
//   const history = useHistory();
//   console.log(history);
//   const routeToMembers = event => {
//     history.push("/members-list");
//   };

//   return (
//     <div className="home-wrapper">
//       <button className="home-member-button" onClick={routeToMembers}>
//         See All Members!
//       </button>
//     </div>
//   );
// }

// export default Home;


import React from 'react';

import './home.css';

import family from '../images/family.png';
import smallfamily from '../images/smallfam.png';
import smallfamily2 from '../images/smallfam2.png';
function Home() {
     return (
        <div className = " home-container">
        <div className = 'home-section1'>
        <div className = 'section1' >
         {/* <section className = 'top-bottom'> */}
            {/*  */}
               
            {/* <img src = {family} alt = "family"/>
            <section className = 'text-info'>
            <div className = 'text'>
                  <p>Sign up for a free account, create or join your 
                  family tree, invite family members to join<span>, and 
                  start documenting for generations to come</span>.</p>
                  <img src = {smallfamily2} alt = "family"/>
               </div>
               <div className = 'text'>
               <img src = {smallfamily} alt = "family"/>
                  <p>Create events, send invatations and
                  never miss another family event or
                  birthday with enabled notifications.</p>
               </div>
               </section> */}
            {/* </div> */}
            <div className = 'home'></div>
            <div className = "home1"></div>
            {/* </section> */}
        </div>
        {/* <div className = "section2">
           <div className = "home2"></div>
           <div className = "home3"></div>
         </div> */}
        </div>

        <div className = "home-section2">
        <div >
                  <p>Sign up for a free account, create or join your 
                  family tree, invite family members to join<span>, and 
                  start documenting for generations to come</span>.</p>
                  <img src = {smallfamily2} alt = "family"/>
               </div>
        </div>
        </div>
     )
  }
export default Home;
