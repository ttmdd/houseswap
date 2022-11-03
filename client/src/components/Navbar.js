import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';


function Navbar(props) {

    function handleClickHome() {
        props.setIsLoggedIn(false)  // 
    }

    function handleClickLogin() {
        props.setIsLoggedIn(true)
    }


    return (
        
        <nav className="Navbar">
            
      
           {!props.isLoggedIn ?

                (<div className="underline">
                        <li onClick={handleClickHome}><NavLink className="nav-item" to="/">HOME</NavLink></li>
                        <li onClick={handleClickLogin}><NavLink className="nav-item" to="login">LOG IN</NavLink></li>
                </div>)

               : (<div className="underline">
                    <li><NavLink className="nav-item" to="/login">HOME</NavLink></li>

                     <li><NavLink className="nav-item" to="favorites">FAVORITES</NavLink></li>

                     <li><NavLink className="nav-item" to="my-home">MY HOME</NavLink></li>

                    <li className="d-none"><NavLink className="nav-item" to="edit">EDIT</NavLink></li>
                 </div>)

           }
            
        </nav>
    );
}

export default Navbar;