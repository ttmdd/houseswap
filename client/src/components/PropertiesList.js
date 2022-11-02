import React from "react";
import "./PropertiesList.css";
import { Route, Routes, useNavigate } from "react-router-dom";


function PropertiesList(props) {

  const navigate = useNavigate();
  
  function makeSelected(id) {
    props.setSelectedCb(id);
  }

 
  function makeFavorite(obj) {
    // need to change the value of obj.favorite to true before the function is called - if you only updated the function in the app, after if (response.ok), the backend won't know when you update the value
    obj.favorite = !obj.favorite;
    props.setFavoriteCb && props.setFavoriteCb(obj); // first make sure that props.setFavoriteCb is truthy and then call the function
    navigate("/favorites")       
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
                          <button className="me-2" type="button">&#x2709;</button>     
                          <button className={s.favorite ? "favActive" : null} type="button" onClick= {e => makeFavorite(s)} >&#x2764;</button> 
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













