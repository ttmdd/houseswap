import React, {useState, useEffect} from 'react';
import "./FavoritesView.css";

function FavoritesView(props) {


    useEffect(() => {
        setFilter();
      }, []); // every time the page loads, call the function setFilter

    let [filtered, setFiltered] = useState([]);

    // filter through all the properties and create a new array of the ones who have e.favorite set to true, which means that they have been clicked on
    function setFilter() {
        if (props.properties) {
            let result = props.properties.filter(e => e.favorite === true)
            setFiltered(result)
        } 
    }

    function deleteFavorite(id) {
        props.removeFavoriteCb(id);
    }

    return (
        <div className="FavoritesView mt-2">
            <h2>Favorites</h2>
            
            
            <div className="container mt-5" id="favoriteProperties">
                {

                    filtered.length > 0 ?  // cannot just be flitered ? because an empty array is still truthy - what comes after : won't show in this case
                        
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
                                        <button type="button" onClick={e => deleteFavorite(f.id)}>x</button>
                                    </div>
                
                                </div>
                            ))
                   
                        : <p>No properties added yet</p>
                }
            </div>
          
        </div>
    );
}

export default FavoritesView;