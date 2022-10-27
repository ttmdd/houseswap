import React from 'react';
import PropertiesList from "../components/PropertiesList";
import "./LoginView.css";


function LoginView(props) {
  

    return (

       

        <div>

           <div id="loginView">
            <h1>House Swap</h1>
                <p>Welcome to your home away from home! Have a look at the available houses and post your own home in the log in section. Happy swapping!</p>
                <div>
                    <PropertiesList isLoggedIn={props.isLoggedIn} properties={props.properties} setSelectedCb={props.selectedProject}/>
                             
                </div>
             
           </div>
        
            
        </div>
    );
}

export default LoginView;