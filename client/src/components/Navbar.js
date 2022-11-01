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
           (<div>
                 <li onClick={handleClickHome}><NavLink to="/">HOME</NavLink></li>
                 <li onClick={handleClickLogin}><NavLink to="login">LOG IN</NavLink></li>
           </div>)
            : (<div>
                 <li><NavLink to="/login">HOME</NavLink></li>

                 <li><NavLink to="favorites">FAVORITES</NavLink></li>

                 <li><NavLink to="my-home">MY HOME</NavLink></li>

                 <li className="d-none"><NavLink to="edit">EDIT</NavLink></li>
            </div>)

           }
        
          
          

            
 
                

     
                {/* <li><NavLink to="*">Error</NavLink></li> */}
 
            
        </nav>
    );
}

export default Navbar;