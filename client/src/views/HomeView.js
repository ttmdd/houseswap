import React from 'react';
import PropertiesList from "../components/PropertiesList";


function HomeView(props) {

   let properties = props.properties;


    return (
        <div className="HomeView">
            <PropertiesList properties={properties}/>
        </div>
    );
}

export default HomeView;