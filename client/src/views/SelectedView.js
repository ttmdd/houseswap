import React from 'react';
import SelectedProperty from "../components/SelectedProperty";
// import PropertiesList from "../components/PropertiesList"


function SelectedView(props) {

    let selected = props.selectedImg;

    return (
        <div className="SelectedView">
            <SelectedProperty selectedImg={selected} />
            {/* <PropertiesList /> */}
            
        </div>
    );
}

export default SelectedView;

