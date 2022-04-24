import logo from './logo.svg';
import './App.css';
import './LoginForm';
import LoginForm from './LoginForm';
import GeneralBackround from './GeneralBackround';
import SignupForm from './SingupForm';
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";


function Shtusel() {
  return (
    <div class="card text-center">
  <div class="card-header">
    Long Live Erel Shtusel!
  </div>
  <div class="card-body">
    <h5 class="card-title">Long Live Erel Shtusel!</h5>
    <p class="card-text">Erel Shtusl is king</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>

  );
}

export default Shtusel;
