import React from "react";

import "./PropertiesList.css";
import { useNavigate } from "react-router-dom";


function PropertiesList(props) {

  const navigate = useNavigate();
  
  // click on an image and open it in a new view with more information
  function makeSelected(id) {
    props.setSelectedCb(id);
  }

 
  // click on the heart button and make the property your favorite
  function makeFavorite(obj) {
    // need to change the value of obj.favorite to true before the function is called - if you only updated the function in the app, after if (response.ok), the backend won't know when you update the value
    obj.favorite = !obj.favorite;
    props.setFavoriteCb && props.setFavoriteCb(obj); // first make sure that props.setFavoriteCb is truthy and then call the function
    navigate("/favorites")       
  }


  return (
    <div className="container">
      <div className="row justify-content-center">
  
            {
              props.properties.map(p => (
            
                <div className="col-sm-6 col-md-3 col-lg-2 m-2 py-2 rounded shadow-lg text-start" key={p.id} id="img-card">
                    <div>
                        <img       
                          className="img-list"       
                          src={p.url}
                          alt={p.location}
                          onClick = {e => makeSelected(p.id)}
                        />
                    </div>
                    <div className="mt-2">
                        <p className="mb-2"><b>Location:</b> {p.location}</p>
                        <p className="mb-2"><b>Availability:</b> {p.availability}</p>
                        <p className="mb-2"><b>Number of rooms:</b> {p.numofrooms}</p>
                        <p className="mb-2"><b>Number of people:</b> {p.numofpeople}</p>
                        { p.rating ?
                            <p><b>Rating: {p.rating}</b></p>
                            : null
                        }
                        {/* show message and heart buttons for logged in users */}
                        {props.isLoggedIn ? 
                    
                            (<div>
                              <button className="me-2" type="button">&#x2709;</button>     
                              <button className={p.favorite ? "favActive" : null} type="button" onClick= {e => makeFavorite(p)}>&#x2764;</button> 
                            </div>)
                            : null
                        }
                    </div>
                </div>
              ))        
            }
      </div>
    </div>
    
  );
}

export default PropertiesList;













