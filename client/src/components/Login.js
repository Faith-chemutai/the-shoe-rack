import React from "react";
// import { useState } from "react-router-dom";

function Login() {
  return (
    <div className="new">
      <form className="form2">
        <h1>Login</h1>
        <label>username</label>
        <br></br>
        <span></span>
        <input type="text"></input>
        <br></br>
        <label>password</label>
        <br></br>
        <span></span>
        <input type="text" placeholder="password"></input>
        <br></br>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
