import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupForm from "./SingupForm";
import { Link } from "react-router-dom";
import ContactItem from "./ContactItem";

var contacts = [{name: "Yonadav",
              latestMessage: "talk to me please",
               numOfUnreadMessages: "3",
                timeSinceLastMessage: "2 mins",
                 profileImagePath: "/profile.jpg"},
                 {name: "Elon Musk",
                 latestMessage: "talk to me please",
                  numOfUnreadMessages: "999",
                   timeSinceLastMessage: "2 mins",
                    profileImagePath: "/profile.jpg"}]

function Chat() {
 return (<span class="d-flex justify-content-center">
    <div
      className="container border bg-light mt-5 rounded w-100"
      style={{ height: "500px" }}
    >
      <div className="row h-100">
        <div className="col col-lg-4 h-100">
          <div className="row list-group-item bg-light">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Itay Elyashiv</div>
            </div>
          </div>
          <ul className="list-group-flush col overflow-auto h-100">
            {contacts.map((contact) =>{return <ContactItem contact={contact}></ContactItem>})}
          </ul>
          </div>
          <div className="col h-100">
  <div className="row list-group-item bg-light">
    <div className="ms-2 me-auto">
      <div className="fw-bold">Itay Elyashiv</div>
    </div>
  </div>
  <div className="row h-100  position-relative" style={{backgroundColor: 'lightskyblue'}}>
    <div className="input-group mb-3 fixed-bottom position-absolute">
      <div className="input-group-prepend">
        <button type="button" className="btn btn-secondary ">send</button>
      </div>
      <input type="text" className="form-control" aria-label="Text input with segmented dropdown button" />
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

      </div>
      
    </div>
    
  </span>);
}

export default Chat;
