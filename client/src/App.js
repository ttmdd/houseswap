import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import './App.css';

import Navbar from "./components/Navbar";
import HomeView from "./views/HomeView";
import SelectedView from "./views/SelectedView";
import FavoritesView from "./views/FavoritesView";
import LoginView from "./views/LoginView";
import MyHomeView from "./views/MyHomeView";
import EditView from "./views/EditView";
import ErrorView from "./views/ErrorView";


function App() {
  
let [properties, setProperties] = useState([]);
let [selected, setSelected] = useState();  // saves the property we click on to show more information about it
let [isLoggedIn, setIsLoggedIn] = useState(false);
let [addedProperty, setAddedProperty] = useState();  // saves the last property that was added - it is then passed down to the MyHomeView and EditView  


const navigate = useNavigate();


useEffect(() => {
  getProperties();
}, []);


async function getProperties() {
  try {
    let response = await fetch("/properties");
    if (response.ok) {
      let properties = await response.json();
      setProperties(properties);
    } else {
      console.log(`Server error: ${response.status} ${response.statusText}`);
    }
  } catch (err) {
    console.log(`Network error: ${err.message}`);
  }
}

function selectedProject(id) {
    let main = properties.find(p => p.id === id);
    setSelected(main);
    navigate("/selected");
}

async function addProperty(newOne) {
    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newOne)
    };
    console.log("new one", newOne);
    try {
      let response = await fetch("/properties", options);
      // setAddedProperty(response);  -- can only add this after we know the response is ok
      if (response.ok) {
        let updatedProperties = await response.json();
        console.log(updatedProperties);
        setProperties(updatedProperties);     // updated the state for all properties
        setAddedProperty(updatedProperties[0]);   // updates the state for added property     
      } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
        console.log(`Network error: ${err.message}`); 
    }
}

async function deleteProperty(id) {
  let options = {
    method: 'DELETE'
  };

  try {
      let response = await fetch(`/properties/${id}`, options) // deletes it from the database
      if (response.ok) {
        let updatedProperties = await response.json();
        setProperties(updatedProperties); // shows the updated property list without the deleted property
        setAddedProperty(); // removes the property from the Your Property section in MyHome View
      } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
  } catch (err) {
        console.log(`Network error: ${err.message}`);
  }
}

// edits the property the user uploaded
async function editProperty(edited) {
    let options = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify(edited) 
    }

    try {
      let response = await fetch(`/properties/${edited.id}`, options);
      if (response.ok) {
          let updated = await response.json();
          setProperties(updated);  // shows the updated version in the Properties list
          setAddedProperty(updated[0]);  //shows updated version in the MyProperty View
          navigate("/my-home");
       
      } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
        console.log(`Network error: ${err.message}`);
    }
}

// when you click on the edit button in the MyProperty section, it will take you to the edit view where the prepopulated form is
function gotoEdit() {
  navigate("/edit");
}

// edits the object that was sent up from the PropertyList when the heart button was clicked - it's informing the database to edit the object's property favorite to true
async function makeFavoriteProperty(obj) {

  let options = {
    method: 'PUT', 
    headers: { 'Content-Type': 'application/json' },  
    body: JSON.stringify(obj) 
  }

  try {
    let response = await fetch(`/properties/${obj.id}`, options); 
    if (response.ok) {
      let updated = await response.json();
      setProperties(updated);
    } else {
      console.log(`Server error: ${response.status} ${response.statusText}`);
    }
  } catch (err) {
      console.log(`Network error: ${err.message}`);
  }
}



  return (
    <div className="App">

      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> 

      <Routes>
          <Route path="/" element= {<HomeView properties={properties} isLoggedIn={isLoggedIn} selectedProject={id => selectedProject(id)} makeFavoriteCb={obj => makeFavoriteProperty(obj)}  />} />
      
          <Route path="/selected" element= {<SelectedView selectedImg={selected} />} />
          
          <Route path="/favorites" element= {<FavoritesView properties={properties} removeFavoriteCb={id => deleteProperty(id)} makeFavoriteCb={obj => makeFavoriteProperty(obj)}/>} />
         
          <Route path="/login" element= {<LoginView properties={properties} selectedProject={id => selectedProject(id)} isLoggedIn={isLoggedIn}  />} />

          <Route path="/my-home" element= {<MyHomeView addPropertyCb={addProperty} addedProperty={addedProperty} deleteCb={id => deleteProperty(id)} editCb={gotoEdit} />} />

          <Route path="/edit" element= {<EditView addedProperty={addedProperty} editPropertyCb={editProperty} />} /> 

          <Route path="*" element= {<ErrorView />} />
      </Routes>

    </div>
  );
}

export default App;
