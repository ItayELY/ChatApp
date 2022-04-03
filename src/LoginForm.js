import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupForm from "./SingupForm";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <span className="d-flex justify-content-center">
      <form className="row g-3 border border-0 bg-light mt-5 mb-2 rounded">
        <div className="row-auto">
          <label htmlFor="inputUsername" className="col-sm-2 col-form-label">
            Username:
          </label>
          <input className="form-control" id="inputUsername" />
        </div>
        <div className="row-auto">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Password:
          </label>
          <input className="form-control" type="password" id="inputPassword" />
        </div>
        <div className="row pt-2">
          <div className="col">
            <Link to="/./chats">
              <button type="submit" id="login" className="btn btn-primary mb-3">
                login
              </button>
            </Link>
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
