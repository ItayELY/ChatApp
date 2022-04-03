import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupForm from "./SingupForm";
import { Link } from "react-router-dom";

function Chat() {
 return <span class="d-flex justify-content-center">
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
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <img
                src="profile.jpg"
                className="col col-lg-2 rounded-circle img-fluid"
                alt="Responsive image"
                style={{ maxWidth: "20%" }}
              />
              <div className="ms-2 me-auto">
                <div className="fw-bold">Yonadav</div>
                talk to me please
              </div>
              <div className="ms-2 ">
                <div>
                  <span className="badge bg-primary rounded-pill">2</span>
                </div>
                <div>
                  {" "}
                  <small>3 mins ago</small>
                </div>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <img
                src="profile.jpg"
                className="col col-lg-2 rounded-circle img-fluid"
                alt="Responsive image"
                style={{ maxWidth: "20%" }}
              />
              <div className="ms-2 me-auto">
                <div className="fw-bold">Bennett</div>
                thank you
              </div>
              <div className="ms-2 ">
                <div>
                  <span className="badge bg-primary rounded-pill">2</span>
                </div>
                <div>
                  {" "}
                  <small>4 mins ago</small>
                </div>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <img
                src="profile.jpg"
                className="col col-lg-2 rounded-circle img-fluid"
                alt="Responsive image"
                style={{ maxWidth: "20%" }}
              />
              <div className="ms-2 me-auto">
                <div className="fw-bold">Elon Musk</div>
                Where is the weed bruh??
              </div>
              <div className="ms-2 ">
                <div>
                  <span className="badge bg-primary rounded-pill">2</span>
                </div>
                <div>
                  {" "}
                  <small>5 hrs ago</small>
                </div>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <img
                src="profile.jpg"
                className="col col-lg-2 rounded-circle img-fluid"
                alt="Responsive image"
                style={{ maxWidth: "20%" }}
              />
              <div className="ms-2 me-auto">
                <div className="fw-bold">Yonadav</div>
                talk to me please
              </div>
              <div className="ms-2 ">
                <div>
                  <span className="badge bg-primary rounded-pill">2</span>
                </div>
                <div>
                  {" "}
                  <small>15 hrs ago</small>
                </div>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <img
                src="profile.jpg"
                className="col col-lg-2 rounded-circle img-fluid"
                alt="Responsive image"
                style={{ maxWidth: "20%" }}
              />
              <div className="ms-2 me-auto">
                <div className="fw-bold">Yonadav</div>
                talk to me please
              </div>
              <div className="ms-2 ">
                <div>
                  <span className="badge bg-primary rounded-pill">2</span>
                </div>
                <div>
                  {" "}
                  <small>3 days ago</small>
                </div>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <img
                src="profile.jpg"
                className="col col-lg-2 rounded-circle img-fluid"
                alt="Responsive image"
                style={{ maxWidth: "20%" }}
              />
              <div className="ms-2 me-auto">
                <div className="fw-bold">Yonadav</div>
                talk to me please
              </div>
              <div className="ms-2 ">
                <div>
                  <span className="badge bg-primary rounded-pill">2</span>
                </div>
                <div>
                  {" "}
                  <small>3 days ago</small>
                </div>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <img
                src="profile.jpg"
                className="col col-lg-2 rounded-circle img-fluid"
                alt="Responsive image"
                style={{ maxWidth: "20%" }}
              />
              <div className="ms-2 me-auto">
                <div className="fw-bold">Yonadav</div>
                talk to me please
              </div>
              <div className="ms-2 ">
                <div>
                  <span className="badge bg-primary rounded-pill">2</span>
                </div>
                <div>
                  {" "}
                  <small>3 days ago</small>
                </div>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <img
                src="profile.jpg"
                className="col col-lg-2 rounded-circle img-fluid"
                alt="Responsive image"
                style={{ maxWidth: "20%" }}
              />
              <div className="ms-2 me-auto">
                <div className="fw-bold">Yonadav</div>
                talk to me please
              </div>
              <div className="ms-2 ">
                <div>
                  <span className="badge bg-primary rounded-pill">2</span>
                </div>
                <div>
                  {" "}
                  <small>3 days ago</small>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="col h-100">
          <div className="row list-group-item bg-light">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Itay Elyashiv</div>
            </div>
          </div>
          <div
            className="row h-100  position-relative"
            style={{ backgroundColor: "lightskyblue" }}
          >
            <div className="input-group mb-3 fixed-bottom position-absolute">
              <div className="input-group-prepend">
                <button type="button" className="btn btn-secondary ">
                  send
                </button>
              </div>
              <input
                type="text"
                className="form-control"
                aria-label="Text input with segmented dropdown button"
              />
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                attach
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    image
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    video
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    audio
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    location
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </span>;
}

export default Chat;
