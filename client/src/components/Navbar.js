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

                 <li><NavLink to="messages">MESSAGES</NavLink></li>

                 <li><NavLink to="new">MY HOME</NavLink></li>
            </div>)

           }
        
          
          

            
 
                

     
                {/* <li><NavLink to="*">Error</NavLink></li> */}
 
            
        </nav>
    );
}

export default Navbar;