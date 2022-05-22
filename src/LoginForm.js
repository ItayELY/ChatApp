import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import SignupForm from "./SingupForm";
import { Link } from "react-router-dom";
import usersList from "./users";
import connectedUserName from "./Globals";
import { useState } from "react";
import GlobalsContext from "./Globals";
import React, { useContext } from 'react';


async function getAll() {
  var returned
  const r = await fetch("http://localhost:5200/api/UsersApi", {mode: 'cors'});
  return r.json()

}

async function validiate() {
  var usernameFromForm = document.getElementById("inputUsername").value;
  var PasswordFromForm = document.getElementById("inputPassword").value;
  const r = await fetch('http://localhost:5200/api/LoginApi', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({ id: usernameFromForm, password: PasswordFromForm}) // body data type must match "Content-Type" header
  });
  const responseJson =await r.json();
  console.log(responseJson);
  //verification:
  var currentUserObject = responseJson;

  
  if (currentUserObject.password == PasswordFromForm) {
    console.log("verified");
    var userNameConnected = currentUserObject.id;
    console.log('connectedUserName.userName: ', userNameConnected);
    localStorage.setItem("userNowConnected", userNameConnected);

    
    if (localStorage.getItem("haveIStoredUsersAlready") != "yes") {
      localStorage.setItem("storedUsersList", JSON.stringify(usersList))
      console.log(JSON.parse(localStorage.getItem("storedUsersList")));
      localStorage.setItem("haveIStoredUsersAlready", "yes");
      console.log("listlistlistlist");
    }
  


    var jsonOfUsers = await getAll();

    window.location.href = "/./chats";
    localStorage.setItem("storedUsersList", JSON.stringify(jsonOfUsers))

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
          <div className="p-2 col">
            checker <Link to="/./ajax">here</Link>
          </div>
        </div>
      </form>
    </span>
  );

}
export default LoginForm;