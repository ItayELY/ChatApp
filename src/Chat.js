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
      </div>
    </div>
  </span>);
}

export default Chat;
