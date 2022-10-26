import React from 'react';
import PropertiesList from "../components/PropertiesList";
import SelectedProperty from "../components/SelectedProperty";


function HomeView(props) {

   let properties = props.properties;
   let selectedProject = props.selectedProject  // for the on click event to select the image



    return (
        <div className="HomeView">
       
            <PropertiesList properties={properties} setSelectedCb={selectedProject}/>
        </div>
    );
}

export default HomeView;