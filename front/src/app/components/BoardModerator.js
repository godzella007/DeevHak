import React from "react";
import { Link } from "react-router-dom";
const BoardModerator = () => {

  return (
    <>
   <div className="deznav">
<div className="deznav-scroll">
    <ul className="metismenu" id="menu">
        <li className="menu-title">DevHack</li>
        <li> <Link to={"/home"} className="nav-link">
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
                <li><Link to={"/TutorialList"} className="nav-link">Edit Profile</Link></li>
            </ul>
        </li>
        <li><Link to={"/add"} className="nav-link">
            
        
            <div className="menu-icon">
         
            </div>
            <span className="nav-text">Add Hackathons</span>
        </Link>
        </li>
        
<li><i class="bi bi-list-task"><Link to={"/tutorials"} className="nav-link">

            <div className="menu-icon">
          
            </div>
            <span className="nav-text">Liste Hackathons</span>
        </Link></i>
        </li>
    </ul>
</div>
</div>

    </>
  );
};

export default BoardModerator;
