import React, { useState } from "react";
import "./PropertiesList.css"


function PropertiesList(props) {
  return (
    <div id="propertiesList"> 

        {
          props.properties.map(s => (
           <div>

            <img
              key = {s.id}
              src = {s.url}
              alt = {s.location}
              // onClick = {e => makeSelectedProperty(s.id)}
            />
      
            
         </div>
          ))
        }
    
    </div>
  );
}

export default PropertiesList;













