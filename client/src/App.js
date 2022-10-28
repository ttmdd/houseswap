import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import './App.css';

import Navbar from "./components/Navbar";


import HomeView from "./views/HomeView";
import SelectedView from "./views/SelectedView";
// import FavoritesView from "./views/FavoritesView";
import MessagesView from "./views/MessagesView";
import LoginView from "./views/LoginView";
import MyHomeView from "./views/MyHomeView";
import EditView from "./views/EditView";

import ErrorView from "./views/ErrorView";





function App() {
  
let [properties, setProperties] = useState([]);
let [selected, setSelected] = useState();  // saves the property we click on to show more information about it
let [isLoggedIn, setIsLoggedIn] = useState(false);
let [addedProperty, setAddedProperty] = useState();  // saves the last property that was added - it is then passed down to the MyHomeView  
// let [clickedHeart, setClickedHeart] = useState();
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

// function favoriteProperty(id) {
//   let favorite = properties.find(p => p.id === id);
//   setClickedHeart(favorite);
// }

async function addProperty(newOne) {
    //send it to the server
    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newOne)
    };

    try {
      let response = await fetch("/properties", options);
      // setAddedProperty(response);  -- can only add this after we know the response is ok
      if (response.ok) {
        let updatedProperties = await response.json();
        setProperties(updatedProperties);
        setAddedProperty(updatedProperties[0]);   // need to add the index to know which one to show
      
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
        setProperties(updatedProperties) // shows the updated property list without the deleted property
        setAddedProperty(); // removes the property from the Your Property section in MyHome View
      } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
  } catch (err) {
        console.log(`Network error: ${err.message}`);
  }
}

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
          navigate("/new");
       
      } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
        console.log(`Network error: ${err.message}`);
    }
}

function gotoEdit() {
  navigate("/edit");
}

  return (
    <div className="App">

      {/* {!isLoggedIn ?
      <Navbar setIsLoggedIn = {setIsLoggedIn}/> : null} */}

      <Navbar isLoggedIn = {isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> 

      <Routes>
          <Route path="/" element= {<HomeView properties={properties} selectedProject={id => selectedProject(id)} clickedHeartCb={id => favoriteProperty(id)} />} />
      
          <Route path="/selected" element= {<SelectedView selectedImg={selected} />} />
          {/* <Route path="/favorites" element= {<FavoritesView clickedHeart={clickedHeart}/>} /> */}
          <Route path="/messages" element= {<MessagesView />} />
          <Route path="/login" element= {<LoginView properties={properties} selectedProject={id => selectedProject(id)} newProperty={id => addProperty(id)} isLoggedIn={isLoggedIn}/>} />

          <Route path="/new" element= {<MyHomeView newProperty={addProperty} addedProperty={addedProperty} deleteCb={id => deleteProperty(id)} editCb={gotoEdit} />} />

          <Route path="/edit" element= {<EditView addedProperty={addedProperty} editPropertyCb={editProperty} />} /> 

          <Route path="*" element= {<ErrorView />} />
      </Routes>

    </div>
  );
}

export default App;
