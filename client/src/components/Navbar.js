import React from "react";
import '../styling/Navbar.css'
import '../styling/Home.css'
// import React, { createContext, useContext } from "react";

function Navbar() {
  return (
    <div>
      <nav class="nav">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="kids">Kids</a></li>
            <li><a href="women">Women</a></li>
            <li><a href="men">Men</a></li>
            <li><a href="login">Login/sign in</a></li>


        </ul>
    </nav>
    <div>
        <h1 className="jump">Jump</h1>                      <h1>master</h1>


    </div>
    </div>
  );
}

export default Navbar;
