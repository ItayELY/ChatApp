import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import SignupForm from "./SingupForm";
import { Link } from "react-router-dom";
import usersList from "./users";
import connectedUserName from "./Globals";
import { useState } from "react";
import GlobalsContext from "./Globals";
import React, { useContext } from 'react';

function validiate() {
  var usernameFromForm = document.getElementById("inputUsername").value;
  var PasswordFromForm = document.getElementById("inputPassword").value;
  //verification:
  var currentUserObject = usersList.find(x => x.userName === usernameFromForm);
  if (currentUserObject.password == PasswordFromForm) {
    console.log("verified");
    var userNameConnected = currentUserObject.userName;
    console.log('connectedUserName.userName: ', userNameConnected);
    localStorage.setItem("userNowConnected", userNameConnected);

    if (localStorage.getItem("haveIStoredUsersAlready") != "yes") {
      localStorage.setItem("storedUsersList", JSON.stringify(usersList))
      console.log(JSON.parse(localStorage.getItem("storedUsersList")));
      localStorage.setItem("haveIStoredUsersAlready", "yes");
      console.log("listlistlistlist");
    };
  



    window.location.href = "/./chats";


  };
};




function LoginForm() {

  return (
    <span className="d-flex justify-content-center">

      <form className="row g-3 border border-0 bg-light mt-5 mb-2 rounded">
        <div className="row-auto">
          <label htmlFor="inputUsername" className="col-sm-2 col-form-label">
            Username:

          </label>
          <input className="form-control" id="inputUsername"></input>
        </div>
        <div className="row-auto">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Password:
          </label>
          <input className="form-control" type="password" id="inputPassword" />
        </div>
        <div className="row pt-2">
          <div className="col">
            <button type="button" id="login" className="btn btn-primary mb-3" onClick={validiate}>
              login
            </button>
          </div>
          <div className="p-2 col">
            not registered? click <Link to="/./signup">here</Link>
          </div>
        </div>
      </form>
    </span>
  );

}
export default LoginForm;