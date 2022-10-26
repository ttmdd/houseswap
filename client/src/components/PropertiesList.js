import React, { useState } from "react";
import "./PropertiesList.css"


function PropertiesList(props) {



  return (
    <div id="propertiesList"> 

  
    {
          props.properties.map(s => (
         
            <div id="card">
              <div>
                <img
                  key = {s.id}
                  src = {s.url}
                  alt = {s.location}
                  // onClick = {e => makeSelected(s.id)}
                />
                </div>

            <div className="half">
                <p key={s.id}>Location: {s.location}</p>
                <p key={s.id}>Availability: {s.availability}</p>
                <p key={s.id}>Number of rooms: {s.numofrooms}</p>
                <p key={s.id}>Number of people: {s.numofpeople}</p>
                <p key={s.id}>Rating: {s.rating}</p>
            </div>
            </div>
          ))
       
    }

  

    
    </div>
  );
}

export default PropertiesList;













