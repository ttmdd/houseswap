import React, { useState } from "react";
import "./PropertiesList.css"


function PropertiesList(props) {

  function makeSelected(id) {
    props.setSelectedCb(id);
    
  }

  return (
    <div className="container" id="propertiesList"> 


      {
          props.properties.map(s => (

            <div className="m-1 p-3" key ={s.id} id="card">

   
              <div>
                <img
           
                  src = {s.url}
                  alt = {s.location}
                  onClick = {e => makeSelected(s.id)}
                />
                </div>

            <div className="half mt-4">
                <p><b>Location:</b> {s.location}</p>
                <p><b>Availability:</b> {s.availability}</p>
                <p><b>Number of rooms:</b> {s.numofrooms}</p>
                <p><b>Number of people:</b> {s.numofpeople}</p>
                <p className={s.rating ? "" : "empty"}><b>Rating:</b> {s.rating}</p>
                
                {props.isLoggedIn ? 
                
                   (<div>
                   <button type="button">&#x2709;</button>     
                   <button className="ms-2"type="button">&#x2764;</button>
                   </div>)
                   : null
                }
         
            </div>

</div>

   
          ))
       
    }

  
    </div>
  );
}

export default PropertiesList;













