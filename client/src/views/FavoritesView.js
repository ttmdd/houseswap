import React, {useState, useEffect} from 'react';
import "./FavoritesView.css";

function FavoritesView(props) {


    useEffect(() => {
        setFilter();
      }, []);

    let [filtered, setFiltered] = useState([]);

    function setFilter() {
        if (props.properties) {
            let result = props.properties.filter(e => e.favorite === true)
            setFiltered(result)
        } 
         
    }

    return (
        <div className="FavoritesView mt-2">
            <h2>Favorites</h2>
            
            
            <div className="container mt-5" id="favoriteProperties">
                {
                    filtered ?  
                        
                            filtered.map(f => (
                                <div className="m-1 p-3" key ={f.id} id="card">

                                    <div>
                                        <img
                                            src = {f.url}
                                            alt = {f.location}
                                        />
                                    </div>
                
                                    <div className="half mt-4">
                                        <p><b>Location:</b> {f.location}</p>
                                        <p><b>Availability:</b> {f.availability}</p>
                                        <p><b>Number of rooms:</b> {f.numofrooms}</p>
                                        <p><b>Number of people:</b> {f.numofpeople}</p>
                                        <p className={f.rating ? "" : "empty"}><b>Rating:</b> {f.rating}</p>
                                    </div>
                
                                </div>
                            ))
                        
                        : <p>No favorite properties selected yet</p>
                }
            </div>
        </div>
    );
}

export default FavoritesView;