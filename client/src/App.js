import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import './App.css';

import Navbar from "./components/Navbar";


import HomeView from "./views/HomeView";
import SelectedView from "./views/SelectedView";
import FavoritesView from "./views/FavoritesView";
import LoginView from "./views/LoginView";
import AddNewView from "./views/AddNewView";
import ErrorView from "./views/ErrorView";





function App() {
  
let [properties, setProperties] = useState([]);
let [selected, setSelected ] = useState();
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

  return (
    <div className="App">


      <Navbar />

      <Routes>
          <Route path="/" element= {<HomeView properties={properties} selectedProject={id => selectedProject(id)}  />} />
          <Route path="/selected" element= {<SelectedView selectedImg={selected} />} />
          <Route path="/favorites/:id" element= {<FavoritesView />} />
          <Route path="/login" element= {<LoginView />} />
          <Route path="add-new" element= {<AddNewView />} />
          <Route path="*" element= {<ErrorView />} />
      </Routes>

    </div>
  );
}

export default App;
