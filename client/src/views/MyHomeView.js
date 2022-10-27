import React from 'react';

import AddProperty from "../components/AddProperty";


function MyHomeView(props) {



    return (

        <div className="container mt-4">
            <div className="row">
               
            <div className="col-sm-12 col-lg-6">
                 <h2 className="mb-5">Add a new property</h2>
                 <AddProperty addPropertyCb={props.newProperty}/>
            </div>

            <div className="col-sm-12 col-lg-6">
                 <h2 className="mb-5">Your property</h2>
                 {/* <img src={props.addedProperty.url} /> */}
            </div>

            </div>
         
       
        </div>

    );
}

export default MyHomeView;