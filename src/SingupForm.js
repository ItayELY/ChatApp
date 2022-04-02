import { Link } from "react-router-dom";
  
  
  function SignupForm() {
      return (
        <span className="d-flex justify-content-center" >
        <form className="row g-3 border border-0 bg-light mt-5 mb-2 rounded">
        <div className="row-auto">
          <label htmlFor="inputUsername" className="col-sm-2 col-form-label">Username:</label>
          <input className="form-control" id="inputUsername" />
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
            <button type="submit" id="register" className="btn btn-primary mb-3">Register</button>
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