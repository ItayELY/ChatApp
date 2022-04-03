import { useState } from "react";
import { Link } from "react-router-dom";
import usersList from './users.js';


function signUp() {
  var _userName = document.getElementById("inputUsername").value;
  console.log(' _userName: ',  _userName);
  var _password = document.getElementById("inputPassword").value;
  console.log('_password: ', _password);
  var _displayName = document.getElementById("inputDisplayName").value;
  console.log('_displayName: ', _displayName);
  
  usersList.push({
    userName: _userName,
    password: _password,
    displayName: _displayName
  });
  
  console.log('users: ', usersList);

}

function SignupForm() {
  
  
  return (
    <span className="d-flex justify-content-center" >
      <form className="row g-3 border border-0 bg-light mt-5 mb-2 rounded"  >
        <div className="row-auto">
          <label htmlFor="inputUsername" className="col-sm-2 col-form-label">Username:</label>
          <input className="form-control" id="inputUsername"  />
        </div>
        <div className="row-auto">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password:</label>
          <input className="form-control" type="password" id="inputPassword" />
        </div>
        <div className="row-auto">
          <label htmlFor="inputDisplayName" className="col-sm-2 col-form-label">Display Name:</label>
          <input className="form-control" id="inputDisplayName" />
        </div>
        <div className="row pt-2">
          <div className="col">
            <button type="button" id="register" className="btn btn-primary mb-3" onClick={signUp} >Register</button>
          </div>
          <div className="p-2 col">
            already registered? click <Link to="/./login">here </Link>to log in.
          </div>
        </div>
      </form>
    </span>


  );
}

export default SignupForm;