import React from 'react';
import PropertiesList from "../components/PropertiesList";
import "./HomeView.css"


function HomeView(props) {

   let properties = props.properties;
   let selectedProject = props.selectedProject  // for the on click event to select the image



    return (
        <div className="HomeView">
            <h1>House Swap</h1>
            <p>Welcome to your home away from home! Have a look at the available houses and post your own home in the log in section. Happy swapping!</p>
            <PropertiesList properties={properties} setSelectedCb={selectedProject}/>
        </div>
    );
}

export default HomeView;