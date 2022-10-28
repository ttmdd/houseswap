import React from 'react';

import AddProperty from "../components/AddProperty";
import "./MyHomeView.css";


function MyHomeView(props) {

    let p = props.addedProperty;

    return (

        <div className="container mt-4" id="myHomeView">
            <div className="row">
               
               {/* add a new property section of the page (form) */}
                <div className="col-sm-12 col-lg-6">
                    <h2 className="mb-5 text-start">Add a new property</h2>
                    <AddProperty addPropertyCb={props.newProperty}/>
                </div>

                <div className="col-sm-12 col-lg-6">
                    
                    {/* only show the Your Property section if a post has been made  */}
                    {p ?
                        (<div className="row">
                            <h2 className="mb-5 text-start">Your property</h2>
                            <div className="col-md-6">
                                <img src={p.url} alt={p.location} id="myHomeImg"/>
                            </div>
                    
                            <div className="col-md-6 text-start info">
                              <p>Location: {p.location}</p>
                              <p>Availability: {p.availability}</p>
                              <p>Number of people: {p.numofpeople}</p>
                              <p>Number of rooms: {p.numofrooms}</p>
                              {p.title ? 
                                <p>Title: {p.title}</p>
                                : null
                              }
                              <button type="button" onClick={(e) => props.editCb(p.id)}>EDIT</button>
                              <button type="button" onClick={(e) => props.deleteCb(p.id)} className="ms-2">DELETE</button>
                            </div>
                        </div>)
                        : null
                    }         
                </div>
            </div> 
        </div>
    );
}

export default MyHomeView;