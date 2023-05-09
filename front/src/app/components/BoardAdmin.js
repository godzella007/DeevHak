import React from "react";
import { Link } from "react-router-dom";

const BoardAdmin = () => {
 

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
                <li><Link to={"/Profile"} className="nav-link">Profile</Link></li>
                <li><Link to={"/EditProfile"} className="nav-link">Edit Profile</Link></li>
            </ul>
        </li>
        <li><Link to={"/add"} className="nav-link">
            
        
            <div className="menu-icon">
         
            </div>
            <span className="nav-text">Add Hackathons</span>
        </Link>
        </li>
        <li><Link to={"/ListeAdmin"} className="nav-link">
            
        
            <div className="menu-icon">
          
            </div>
            <span className="nav-text">liste Hackathons</span>
        </Link>
        </li>
        <li><Link to={"/hackathon"} className="nav-link">
            
        
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

export default BoardAdmin;
