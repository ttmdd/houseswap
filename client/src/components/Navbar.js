import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    return (
        <nav className="Navbar">
         
                <li><NavLink to="/">HOME</NavLink></li>
 
                <li><NavLink to="login">LOG IN</NavLink></li>

     
                {/* <li><NavLink to="*">Error</NavLink></li> */}
 
            
        </nav>
    );
}

export default Navbar;