import logo from './logo.svg';
import './App.css';
import './LoginForm';
import LoginForm from './LoginForm';
import GeneralBackround from './GeneralBackround';
import SignupForm from './SingupForm';
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import Shtusel from './Shtusel';


function ContactItem({contact}) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
    <img
      src={contact.profileImagePath}
      className="col col-lg-2 rounded-circle img-fluid"
      alt="Responsive image"
      style={{ maxWidth: "20%", backgroundColor: 'rgba(52, 52, 52, 0)'}}
    />
    {console.log('contact.profileImage: ', contact.profileImage)}
    <div className="ms-2 me-auto" style={{backgroundColor: 'rgba(52, 52, 52, 0)'}}>
      <div className="fw-bold" style={{backgroundColor: 'rgba(52, 52, 52, 0)'}}>{contact.name}</div>
      {contact.latestMessage}
    </div>
    <div className="ms-2 " style={{backgroundColor: 'rgba(52, 52, 52, 0)'}}>
      <div style={{backgroundColor: 'rgba(52, 52, 52, 0)'}}>
        <span className="badge bg-primary rounded-pill" >{contact.numOfUnreadMessages}</span>
      </div>
      <div >
        {" "}
        <small >{contact.timeSinceLastMessage}</small>
      </div>
    </div>
  </li>

  );
}

export default ContactItem;
