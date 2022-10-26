import React, { useState } from "react";
import "./PropertiesList.css"


function PropertiesList(props) {

  function makeSelected(id) {
    props.setSelectedCb(id);
    
  }

  return (
    <div id="propertiesList"> 

  
    {
          props.properties.map(s => (
         
            <div key ={s.id} id="card">
              <div>
                <img
                  // key = {s.id}
                  src = {s.url}
                  alt = {s.location}
                  onClick = {e => makeSelected(s.id)}
                />
                </div>

            <div className="half">
                <p><b>Location:</b> {s.location}</p>
                <p><b>Availability:</b> {s.availability}</p>
                <p><b>Number of rooms:</b> {s.numofrooms}</p>
                <p><b>Number of people:</b> {s.numofpeople}</p>
                <p><b>Rating:</b> {s.rating}</p>
            </div>
            </div>
          ))
       
    }

  

    
    </div>
  );
}

export default PropertiesList;













