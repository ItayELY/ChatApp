import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupForm from "./SingupForm";
import { Link } from "react-router-dom";
import ContactItem from "./ContactItem";
import ChatMessage from "./ChatMessage";
import usersList from "./users";
import Message from "./Message";
import { useState } from 'react';


var currentUserName = "Itay";
var currentContact = "Yonadav"
var currentUserObject = usersList.find(x => x.userName === currentUserName);
console.log('currentUserObject: ', currentUserObject);


var contacts = [{
  name: "Yonadav",
  latestMessage: "talk to me please",
  numOfUnreadMessages: "3",
  timeSinceLastMessage: "2 mins",
  profileImagePath: "/profile.jpg"
},
{
  name: "Elon Musk",
  latestMessage: "talk to me please",
  numOfUnreadMessages: "999",
  timeSinceLastMessage: "2 mins",
  profileImagePath: "/profile.jpg"
}]

function Chat() {
  const [count, setCount] = useState(0);
  var sendNewMessage = ()=>
   {
    var text = document.getElementById("sendMessageBox").value;
    console.log('text: ', text);
    var m = new Message(text, new Date(), currentUserName, currentContact)
    console.log('m: ', m);
    currentUserObject.messages.push(m);
    console.log('currentUserObject.messages.push(m);: ', currentUserObject);
    document.getElementById("sendMessageBox").value = '';
    setCount(count + 1);
    
  };
  
  
  return (<span class="d-flex justify-content-center">
    <div
      className="container border bg-light mt-5 rounded w-100"
      style={{ height: "500px" }}
    >
      <div className="row h-100">
        <div className="col col-lg-4 h-100">
          <div className="row list-group-item bg-light">
            <div className="ms-2 me-auto">
              <div className="fw-bold">{currentUserName}</div>
            </div>
          </div>
          <ul className="list-group-flush col overflow-auto h-100">
            {contacts.map((contact) => { return <ContactItem contact={contact}></ContactItem> })}
          </ul>
        </div>
        <div className="col h-100">
          <div className="row list-group-item bg-light">
            <div className="ms-2 me-auto">
              <div className="fw-bold">{currentContact}</div>
            </div>
          </div>
          <div className="row h-100  position-relative        list-group-flush col overflow-auto" style={{ backgroundColor: 'lightskyblue' }}>
            {currentUserObject.messages.map((message) => { return <ChatMessage message={message}></ChatMessage> })}
            <div className="input-group mb-3 fixed-bottom position-absolute">
              <div className="input-group-prepend">
                
              </div>
            </div>
          </div>
          <button type="button" className="btn btn-secondary " onClick={sendNewMessage}>send</button>
          <input id="sendMessageBox" type="text" className="form-control" aria-label="Text input with segmented dropdown button" />
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">attach</button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">image</a></li>
                <li><a className="dropdown-item" href="#">video</a></li>
                <li><a className="dropdown-item" href="#">audio</a></li>
                <li><a className="dropdown-item" href="#">location</a></li>
              </ul>
        </div>

      </div>

    </div>

  </span>);
}

export default Chat;
