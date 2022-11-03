import React from 'react';

import AddProperty from "../components/AddProperty";
import "./MyHomeView.css";


function MyHomeView(props) {

    let p = props.addedProperty;

    return (

        <div className="container" id="myHomeView">
            <div className="row">
               
               {/* add a new property section of the page (form) */}
                <div className="col-md-5 col-lg-3  mt-4">
                    <h2 className="mb-4 text-start">Add a new property</h2>
                    <AddProperty addPropertyCb={props.addPropertyCb}/>
                </div>

                <div className="col-md-7 col-lg-7 offset-lg-1 mt-4">
                    
                    {/* only show the Your Property section if a post has been made  */}
                    {p ?
                        (<div>
                            
                                <h2 className="mb-4 text-start ms-md-3">Your property</h2>
                                <div className="row my-prop rounded shadow-lg p-3 ms-md-3">
                                    <div className="col-md-6">
                                        <img src={p.url} alt={p.location} id="myHomeImg"/>
                                    </div>
                            
                                    <div className="col-md-6 text-start mt-3 mt-md-0">
                                        <p><b>Location:</b> {p.location}</p>
                                        <p><b>Availability:</b> {p.availability}</p>
                                        <p><b>Number of people:</b> {p.numofpeople}</p>
                                        <p><b>Number of rooms:</b> {p.numofrooms}</p>
                                        {p.title ? 
                                            <p><b>Title:</b> {p.title}</p>
                                            : null
                                        }
                                        <button type="button" onClick={(e) => props.editCb(p.id)}>EDIT</button>
                                        <button type="button" onClick={(e) => props.deleteCb(p.id)} className="ms-2">DELETE</button>
                                    </div>
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