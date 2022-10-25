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


  return (
    <div className="App">


      <Navbar />

      <Routes>
          <Route path="/" element= {<HomeView />} />
          <Route path="/properties/:id" element= {<SelectedView />} />
          <Route path="/favorites/:id" element= {<FavoritesView />} />
          <Route path="/login" element= {<LoginView />} />
          <Route path="add-new" element= {<AddNewView />} />
          <Route path="*" element= {<ErrorView />} />
      </Routes>
    </div>
  );
}

export default App;
