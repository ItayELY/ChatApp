import logo from './logo.svg';
import './App.css';
import './LoginForm';
import LoginForm from './LoginForm';
import Ajax from './Ajax';

import GeneralBackround from './GeneralBackround';
import SignupForm from './SingupForm';
import Chat from './Chat';
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import Shtusel from './Shtusel';
import usersList from './users';
import TakeSelfie from './TakeSelfie';


// //Global Variables
// localStorage.setItem("storedUsersList", usersList);
// localStorage.setItem("userNowConnected", "Itay");

function reset(){
  localStorage.setItem("haveIStoredUsersAlready", "no");
  localStorage.removeItem("storedUsersList");
  window.location.reload();

}

function App() {
 
  return (
  
    <div>
      <GeneralBackround></GeneralBackround>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="signup" element={<SignupForm />} />
        <Route path="chats" element={<Chat />} />
        <Route path="ajax" element={<Ajax />} />
      </Routes>
      <button onClick={reset}>reset</button>
      {/* <TakeSelfie></TakeSelfie> */}
    </div>

  );
}

export default App;
