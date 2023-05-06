import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from './components/Login';
import Navbar from './components/Navbar';
// import Home from "./components/Home";
function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navbar />} />
      {/* <Route path="/" element={<Home />} /> */}


      </Routes>
      </div>
    </BrowserRouter>
  
   
  );
}

export default App;
