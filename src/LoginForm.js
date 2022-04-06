import { BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import SignupForm from "./SingupForm";
import { Link } from "react-router-dom";
import usersList from "./users";
import connectedUserName from "./Globals";
import { useState } from "react";
/*
function validiate() {
   //var usernameFromForm = document.getElementById("inputUsername").value;
   //var PasswordFromForm = document.getElementById("inputPassword").value;
   console.log(' usernameFromForm: ',  usernameFromForm);
  
   //verification:
   var currentUserObject = usersList.find(x => x.userName === usernameFromForm);
   console.log('currentUserObject: ', currentUserObject);
   if (currentUserObject.password == PasswordFromForm){
     console.log("verified");
    
     connectedUserName.userName = currentUserObject.userName;
     console.log('connectedUserName.userName: ', connectedUserName.userName);
   


 

   };
// // };
*/
  
  


function LoginForm() {
  
  const [usernameFromForm, setusernameFromForm] = useState("0")
  const [PasswordFromForm, setPasswordFromForm] = useState("0")
  const navigate = useNavigate();


  const Validiate = () => {
    console.log("validating")
    console.log(' usernameFromForm: ',  usernameFromForm);
  
   //verification:
   var currentUserObject = usersList.find(x => x.userName === usernameFromForm);
   console.log('currentUserObject: ', currentUserObject);

   if (currentUserObject.password == PasswordFromForm){
     console.log("verified");
    
     connectedUserName.userName = currentUserObject.userName;
     console.log('connectedUserName.userName: ', connectedUserName.userName);
     navigate("./chats", {replace: true});

  }
}

  

  return (
    <span className="d-flex justify-content-center">
      <form className="row g-3 border border-0 bg-light mt-5 mb-2 rounded">
        <div className="row-auto">
          <label htmlFor="inputUsername" className="col-sm-2 col-form-label">
            Username:
          </label>
        <input className="form-control" id="inputUsername" onChange={(e) => setusernameFromForm(e.target.value)}></input>
        </div>
        <div className="row-auto">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Password:
          </label>
          <input className="form-control" type="password" id="inputPassword" onChange={(e) =>setPasswordFromForm(e.target.value)}/>
        </div>
        <div className="row pt-2">
          <div className="col">
              <button type="button" id="login" className="btn btn-primary mb-3" onClick={Validiate}>
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