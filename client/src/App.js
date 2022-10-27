import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import './App.css';

import Navbar from "./components/Navbar";


import HomeView from "./views/HomeView";
import SelectedView from "./views/SelectedView";
import FavoritesView from "./views/FavoritesView";
import MessagesView from "./views/MessagesView";
import LoginView from "./views/LoginView";
import MyHomeView from "./views/MyHomeView";

import ErrorView from "./views/ErrorView";





function App() {
  
let [properties, setProperties] = useState([]);
let [selected, setSelected] = useState();
let [isLoggedIn, setIsLoggedIn] = useState(false);
let [addedProperty, setAddedProperty] = useState();
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
    //send it to the server
    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newOne)
    };

    try {
      let response = await fetch("/properties", options);
      // setAddedProperty(response.data);
      if (response.ok) {
        let updatedProperties = await response.json();
        setProperties(updatedProperties);
        navigate("/");
      } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
        console.log(`Network error: ${err.message}`); 
    }
}

  return (
    <div className="App">

      {/* {!isLoggedIn ?
      <Navbar setIsLoggedIn = {setIsLoggedIn}/> : null} */}

      <Navbar isLoggedIn = {isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> 

      <Routes>
          <Route path="/" element= {<HomeView properties={properties} selectedProject={id => selectedProject(id)}  />} />
      
          <Route path="/selected" element= {<SelectedView selectedImg={selected} />} />
          <Route path="/favorites" element= {<FavoritesView />} />
          <Route path="/messages" element= {<MessagesView />} />
          <Route path="/login" element= {<LoginView properties={properties} selectedProject={id => selectedProject(id)} newProperty={id => addProperty(id)} isLoggedIn={isLoggedIn}/>} />
          <Route path="/new" element= {<MyHomeView newProperty={addProperty} addedProperty={addedProperty}/> } />
          <Route path="*" element= {<ErrorView />} />
      </Routes>

    </div>
  );
}

export default App;
