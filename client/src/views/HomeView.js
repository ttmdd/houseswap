import React from 'react';
import PropertiesList from "../components/PropertiesList";
import "./HomeView.css"


function HomeView(props) {

    return (
        <div className="HomeView">
            <h1>House Swap</h1>
            <p>Welcome to your home away from home! Have a look at the available houses and post your own home in the log in section. Happy swapping!</p>
            <PropertiesList properties={props.properties} isLoggedIn={props.isLoggedIn} setSelectedCb={props.selectedProject} setFavoriteCb={props.makeFavoriteCb} />
        </div>
    );
}

export default HomeView;