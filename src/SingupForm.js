import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import usersList from './users.js';

var userImage = "./profile.jpg"
var getImageInput = () => {
  console.log("upload Image");
  // var fr=new FileReader();
  // fr.onload=function(){
  //     document.getElementById('output')
  //             .textContent=fr.result;
  // }

  // fr.readAsText(this.files[0]);

  var thisElement = document.getElementById("imageInput");
  var reader = new FileReader();
  reader.onload = function () {
    var thisImage = reader.result;
   // var imageMessage = new Message("image", thisImage, new Date(), currentUserName, currentContact);
    console.log('thisImage: ', thisImage);
    userImage = thisImage
    if (userImage == undefined){
      console.log("undefined image")
      
    }
    //currentUserObject.messages.push(imageMessage);
    //localStorage.setItem("storedUsersList", JSON.stringify(derivedUsersList));
    //setCount(count + 1);
  };
  reader.readAsDataURL(thisElement.files[0]);



};

function signUp() {
  
    var _userName = document.getElementById("inputUsername").value;
    console.log(' _userName: , image:', _userName, userImage);
    if(_userName == ""){
      alert("empty userName!");
      return;
    }
    var _password = document.getElementById("inputPassword").value;
    if(_password == ""){
      alert("empty Password!");
      return;
    }
    console.log('_password: ', _password);
    var _displayName = document.getElementById("inputDisplayName").value;
    console.log('_displayName: ', _displayName);
    if(_displayName == ""){
      alert("empty displayName!");
      return;
    }
    var _validatePassword = document.getElementById("inputPasswordValidate").value;
    console.log('_inputPasswordValidate: ', _validatePassword);
    if(_validatePassword != _password){
      alert("non matching passwords!");
      return;
    }

    usersList.push({
        userName: _userName,
        password: _password,
        displayName: _displayName,
        userContacts: [],
        messages: [],
        profileImagePath: userImage
    });
    localStorage.setItem("storedUsersList", JSON.stringify(usersList))

};

function SignupForm() {

  useEffect(() => {
    console.log("useEffect")
  }, []);
    return ( <span className = "d-flex justify-content-center" >
        <form className = "row g-3 border border-0 bg-light mt-5 mb-2 rounded" >
          <div className = "row-auto" >
            <label htmlFor = "inputUsername" className = "col-sm-2 col-form-label" > Username: </label>
            <input className = "form-control"
            id = "inputUsername" / >
          </div>
          <  div className = "row-auto" >
            <label htmlFor = "inputPassword"className = "col-sm-2 col-form-label" > Password: </label>
            < input className = "form-control" type = "password" id = "inputPassword" / >
          </div>
          <  div className = "row-auto" >
          <label htmlFor = "inputPasswordValidate"className = "col-sm-2 col-form-label" > Validate Password: </label>
          < input className = "form-control" type = "password" id = "inputPasswordValidate" / >
        </div>
          <div className = "row-auto" >
            <label htmlFor = "inputDisplayName"className = "col-sm-2 col-form-label" > Display Name: </label>
            <input className = "form-control"id = "inputDisplayName" / >
          </div>
          <div>
          <input id="imageInput" onChange={getImageInput} type="file" accept="image/*" className="custom-file-input" style={{ opacity: "0", zIndex: '-1' }} ></input>
          <label className="custom-file-label" for="imageInput">Upload Image:</label>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-image" viewBox="0 0 16 16">
            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
          </svg>
          </div>
          <div className = "row pt-2" >
            <div className = "col" >
            <button type = "button"id = "register" className = "btn btn-primary mb-3" onClick = { signUp } > Register </button>
            </div>
          </div>

          
         <div className = "p-2 col" >
        already registered ? click < Link to = "/./login" > here </Link>to log in. 
        </div>
         </form >
       </span>

    );
}

export default SignupForm;