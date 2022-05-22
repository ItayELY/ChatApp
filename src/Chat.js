import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupForm from "./SingupForm";
import { Link } from "react-router-dom";
import ContactItem from "./ContactItem";
import ChatMessage from "./ChatMessage";
import Message from "./Message";
import { useState } from 'react';
import connectedUserName from "./Globals";
import usersList from './users';
import ChatImageMessage from './ChatImageMessage'
import TakeSelfie from "./TakeSelfie";
import AudioRecorder from "./AudioRecorder";
import ChatAudioMessage from "./ChatAudioMessage";
import ChatVideoMessage from "./ChatVideoMessage";
import React from "react"; 


// if (!localStorage.getItem("storedUsersList")){
//   var usersList = []
// }
// else{
//   var usersList = JSON.parse(localStorage.getItem("storedUsersList"));
// }

//localStorage.removeItem("storedUsersList")
console.log("chats render");

async function getAll() {
  const r = await fetch("http://localhost:5200/api/UsersApi", {mode: 'cors'});

  console.log(r.body)
  const d = await r.json()
  console.log(d);
  return d
}
var derivedUsersList = [];
derivedUsersList = getAll();
/*
if (!localStorage.getItem("storedUsersList")) {
  derivedUsersList = usersList;
  console.log(usersList);
}
else {
  derivedUsersList = JSON.parse(localStorage.getItem("storedUsersList"));
  console.log("derived ", derivedUsersList)
}
*/
var currentUserName = localStorage.getItem("userNowConnected");
var currentUserObject =  Array.isArray(derivedUsersList) ? derivedUsersList.find(x => x.userName === currentUserName) : undefined;

console.log('currentUserName: ', currentUserName);
if (currentUserObject) {
  var contacts = currentUserObject.userContacts;
}



function Chat() {

  console.log("Chats was rendered")
  console.log(derivedUsersList);

  function AddContact(Identifier) {
    let newContact = derivedUsersList.find(x => x.userName === Identifier);
    if (!newContact) {
      console.log("didnt find user in ", derivedUsersList)
      return;
    }
    if (currentUserObject.userContacts.find(x => x.name == Identifier)) {
      console.log("contact already exists")
      return;
    }
    currentUserObject.userContacts.push({
      name: newContact.userName,
      latestMessage: "no messages",
      numOfUnreadMessages: "0",
      timeSinceLastMessage: "",
      profileImagePath: newContact.profileImagePath,
    });
    console.log("image new contact: ", newContact.profileImagePath)
    newContact.userContacts.push({
      name: currentUserObject.userName,
      latestMessage: "no messages",
      numOfUnreadMessages: "0",
      timeSinceLastMessage: "",
      profileImagePath: currentUserObject.profileImagePath,
    })
    setCurrentContact(Identifier)
  }
  function changeBackground(e, color) {
    e.target.style.background = color;
  }

  const [currentContact, setCurrentContact] = useState("");
  const [addNewContact, setAddNewContact] = useState("");


  console.log('in chats bro connectedUserName.userName: ', currentUserName);

  const [count, setCount] = useState(0);
  var sendNewMessage = () => {
    var text = document.getElementById("sendMessageBox").value;
    if (text == "") {
      return
    }
    console.log('text: ', text);
    var m = new Message("textual", text, new Date(), currentUserName, currentContact)
    console.log('message: ', m);
    currentUserObject.messages.push(m);
    var currentContactObject = currentUserObject.userContacts.find(x => x.name === currentContact);
    currentContactObject.latestMessage = text;
    var currentContactUserObject = derivedUsersList.find(x => x.userName == currentContact);
    console.log("check111: ", currentContact, derivedUsersList)
    currentContactUserObject.messages.push(m);
    console.log('currentContactUserObject.userContacts.find(x => x.name == currentUserName): ', currentContactUserObject.userContacts.find(x => x.name == currentUserName));
    currentContactUserObject.userContacts.find(x => x.name == currentUserName).latestMessage = text;

    document.getElementById("sendMessageBox").value = '';
    localStorage.setItem("storedUsersList", JSON.stringify(derivedUsersList));
    setCount((count) => {
      count = count + 1 // "React is awesome!"

      return count;
    });

  };

  var sendNewMessageByEnterKey = (event) => {
    if (event.keyCode === 13) {
      sendNewMessage();
    }

  };
  var clickImageInputIcon = () => {
    console.log('clickImageInputIcon: ');
    document.getElementById('imageInput').click();
    //getImageInput();
  };

  var clickVideoInputIcon = () => {
    console.log('clickVideoInputIcon: ');
    document.getElementById('videoInput').click();
    //getImageInput();
  };
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
      var imageMessage = new Message("image", thisImage, new Date(), currentUserName, currentContact);
      console.log('thisImage: ', thisImage);
      currentUserObject.messages.push(imageMessage);
      var currentContactUserObject = derivedUsersList.find(x => x.userName == currentContact);
      currentContactUserObject.messages.push(imageMessage);
      localStorage.setItem("storedUsersList", JSON.stringify(derivedUsersList));
      setCount(count + 1);
    };
    reader.readAsDataURL(thisElement.files[0]);
  };

  var getVideoInput = () => {
    console.log("upload Video");
    // var fr=new FileReader();
    // fr.onload=function(){
    //     document.getElementById('output')
    //             .textContent=fr.result;
    // }

    // fr.readAsText(this.files[0]);

    var thisElement = document.getElementById("videoInput");
    var reader = new FileReader();
    reader.onload = function () {
      var thisVideo = reader.result;
      var videoMessage = new Message("video", thisVideo, new Date(), currentUserName, currentContact);
      console.log('thisVideo: ', thisVideo);
      currentUserObject.messages.push(videoMessage);
      var currentContactUserObject = derivedUsersList.find(x => x.userName == currentContact);
      currentContactUserObject.messages.push(videoMessage);
      //localStorage.setItem("storedUsersList", JSON.stringify(derivedUsersList));
      setCount(count + 1);
    };
    reader.readAsDataURL(thisElement.files[0]);



  };
  
  var scrollDownMessagesBar = () => {
    console.log("scrollscrollscrollscrollscrollscrollscrollscrollscroll  scroll");
    document.getElementById("messagesBar").scrollTop = document.getElementById("messagesBar").scrollHeight;
    
  };

  React.useEffect(() => {
    // Runs after the first render() lifecycle
    scrollDownMessagesBar();
}, []);


  return (<span class="d-flex justify-content-center">
    <div
      className="container border bg-light mt-5 rounded w-100"
      style={{ height: "500px" }}
    >
      <div className="row h-100">
        <div className="col col-lg-4 h-100">
          <div className="row list-group-item bg-light d-flex justify-content-around">
            <div className="ms-2 me-auto col">
              <div className="fw-bold">{currentUserName}</div>
            </div>
            <div className="ms-2 me-auto col col-lg-4 h end-0">
              <button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
                  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                </svg>
              </button>

              <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="staticBackdropLabel">Add A New Contact</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Contact Identifier:</label>
                        <input type="text" class="form-control" id="recipient-name" onChange={(e) => setAddNewContact(e.target.value)}></input>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary" onClick={() => { AddContact(addNewContact) }}>Add</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {console.log("contacts: ", contacts)}
          {console.log("List: ", derivedUsersList)}
          <ul className="list-group-flush col overflow-auto h-100">
            {
              contacts.map((contact) => {
                return <div onMouseEnter={(e) => { changeBackground(e, "LightSteelBlue") }}
                  onMouseLeave={(e) => { changeBackground(e, "white") }} onClick={() => {
                    //setCurrentContact(contact.name);
                    setCurrentContact((currentContact) => {
                      currentContact = contact.name  // "React is awesome!"
                      console.log('currentContact: ', currentContact);
                      return currentContact;
                    });
                    var contactX = currentUserObject.userContacts.find(x => x.name === currentContact);
                    contactX.numOfUnreadMessages = "0";
                  }}><ContactItem contact={contact}></ContactItem></div>
              })
              }
          </ul>
        </div>
        <div className="col h-100">
          <div className="row list-group-item bg-light">
            <div className="ms-2 me-auto">
              <div className="fw-bold">{currentContact}</div>
            </div>
          </div>
          <div id = "messagesBar" className="row h-100   list-group-flush col overflow-auto" style={{ backgroundColor: 'azure', }}>



            {currentUserObject.messages.map((message) => {
              if (message.type == "textual") {
                if ((message.writer === currentUserName
                  || message.writer === currentContact) && (message.receiver === currentUserName ||
                    message.receiver === currentContact))
                  return <ChatMessage className="align-self-end " message={message} sentByCurrentUser={message.writer === currentUserName ? true : false} align={"align-content-end"}></ChatMessage>
              }
              else if (message.type == "image") {
                if ((message.writer === currentUserName
                  || message.writer === currentContact) && (message.receiver === currentUserName ||
                    message.receiver === currentContact))
                  return <ChatImageMessage className="align-self-end " message={message} sentByCurrentUser={message.writer === currentUserName ? true : false} align={"align-content-end"}></ChatImageMessage>
              }

              else if (message.type == "audio") {
                if ((message.writer === currentUserName
                  || message.writer === currentContact) && (message.receiver === currentUserName ||
                    message.receiver === currentContact))
                  return <ChatAudioMessage className="align-self-end " message={message} sentByCurrentUser={message.writer === currentUserName ? true : false} align={"align-content-end"}></ChatAudioMessage>
              }
              else if (message.type == "video") {
                if ((message.writer === currentUserName
                  || message.writer === currentContact) && (message.receiver === currentUserName ||
                    message.receiver === currentContact))
                  return <ChatVideoMessage className="align-self-end " message={message} sentByCurrentUser={message.writer === currentUserName ? true : false} align={"align-content-end"}></ChatVideoMessage>
              }
              


            })}




            <div className="input-group mb-3 fixed-bottom position-absolute">
              <div className="input-group-prepend">

              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownAttach" data-bs-toggle="dropdown" aria-expanded="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-paperclip" viewBox="0 0 16 16">
                <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
              </svg>
            </button>

            <ul className="dropdown-menu" aria-labelledby="dropdownAttach">

              
              <li><a className="dropdown-item" href="#">
                <input id="imageInput" onChange={getImageInput} type="file" accept="image/*" style={{ opacity: "0", width: "20%" }} hidden   ></input>
                <div id="imageInputIcon" onClick={clickImageInputIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-image" viewBox="0 0 16 16">
                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                    <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                  </svg>
                </div>
              </a></li>

              <li><a className="dropdown-item" href="#">
                <input id="videoInput" onChange={getVideoInput} type="file" accept="video/*" style={{ opacity: "0", width: "20%" }} hidden  ></input>
                <div id="videoInputIcon" onClick={clickVideoInputIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-image" viewBox="0 0 16 16">
                    <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" />
                    <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                  </svg>
                </div>
              </a></li>



              <li><a data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" className="dropdown-item" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-video" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z" />
              </svg>
              </a></li>



              <li><a data-bs-toggle="offcanvas" data-bs-target="#offcanvasAudioRecord" aria-controls="offcanvasBottom" className="dropdown-item" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mic" viewBox="0 0 16 16">
                  <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                  <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" />
                </svg>
              </a></li>


              <li><a className="dropdown-item" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
              </a></li>
            </ul>
            <input id="sendMessageBox" type="text" className="form-control" aria-label="Text input with segmented dropdown button" onKeyUp={sendNewMessageByEnterKey} />
            <button type="button" className="btn btn-secondary " onClick={sendNewMessage}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
              </svg>
            </button>
          </div>

        </div>

      </div>
      <TakeSelfie currentUserName={currentUserName} currentUserObject={currentUserObject}
        currentContact={currentContact} derivedUsersList={derivedUsersList} count={count} setCount={setCount}></TakeSelfie>


      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>


      <AudioRecorder currentUserName={currentUserName} currentUserObject={currentUserObject}
        currentContact={currentContact} setCurrentContact={setCurrentContact} derivedUsersList={derivedUsersList} count={count} setCount={setCount}></AudioRecorder>
      {console.log('currentContact: ', currentContact)
      }



    </div>

  </span>);
}

export default Chat;
