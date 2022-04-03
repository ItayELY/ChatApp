import logo from './logo.svg';
import './App.css';
import './LoginForm';
import LoginForm from './LoginForm';
import GeneralBackround from './GeneralBackround';
import SignupForm from './SingupForm';
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import Shtusel from './Shtusel';
import Chat from './Chat';

//FEGAGAHRH
//hello frghfrgh
function App() {
  return (
    <div>
      <GeneralBackround></GeneralBackround>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="signup" element={<SignupForm />} />
        <Route path="chats" element={<Chat />} />
      </Routes>
    </div>

  );
}

export default App;
