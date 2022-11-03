import React from 'react';
import SelectedProperty from "../components/SelectedProperty";


function SelectedView(props) {

    let selected = props.selectedImg;

    return (
        <div className="SelectedView">
            <SelectedProperty selectedImg={selected} />   
        </div>
    );
}

export default SelectedView;

