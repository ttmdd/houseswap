import React, { useState } from "react";
import "./SelectedProperty.css"


function SelectedProperty(props) {

    let s = props.selectedImg;

  return (
    <div id="selectedProperty"> 

    <div>
        <img key={s.id} src={s.url} />
    </div>

    <div className="propDesc">
        <h2>{s.title}</h2>
        <p><b>Location:</b> {s.location}</p>
        <p><b>Availability:</b> {s.availability}</p>
        <p><b>Number of people:</b> {s.numofpeople}</p>
        <p><b>Number of rooms:</b> {s.numofrooms}</p>
        <p><b>Rating:</b> {s.rating}</p>
        <br></br>
        <br></br>
        <p>{s.description}</p>
    </div>
  

    </div>
  );
}

export default SelectedProperty;













