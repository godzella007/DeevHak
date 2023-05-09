import React from 'react';
import { Link } from "react-router-dom";

const BoardUser = () => {


  return (
  <>
<div className="deznav">
<div className="deznav-scroll">
    <ul className="metismenu" id="menu">
        <li className="menu-title">DevHack</li>
        <li>  <Link to={"/home"} className="nav-link">
            
            <div className="menu-icon">
                
            </div>	
            <span className="nav-text">Dashboard</span>
            </Link>
            <ul >
                <li><a href="index.html">Dashboard Light</a></li>
                <li><a href="index-2.html">Dashboard Dark</a></li>
            </ul>
        </li>
        <li>
            <Link to={"#"} className="nav-link">
            
        
            <div className="menu-icon">
          
            </div>
            <span className="nav-text">Account</span>
        </Link>
        <ul >
                <li><Link to={"/Profil"} className="nav-link">Profile</Link></li>
                <li><Link to={"/EditProfil"} className="nav-link">Edit Profile</Link></li>
            </ul>
        </li>
     
        <li><Link to={"/hackathons"} className="nav-link">
            
        
            <div className="menu-icon">
            
            </div>
            <span className="nav-text">Hackathons</span>
        </Link>
        </li>
        <li><Link to={"/Quiz"} className="nav-link">
            
        
            <div className="menu-icon">

            </div>
            <span className="nav-text">Quiz</span>
        </Link>
        </li>
    </ul>
   
</div>
</div>


  </>
  );
};

export default BoardUser;


