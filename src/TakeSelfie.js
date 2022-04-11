import Message from "./Message";


function TakeSelfie(props) {
    console.log('props: ', props);
    
    var currentUserName = props.currentUserName;
    var currentUserObject = props.currentUserObject;
    var currentContact = props.currentContact;
    var derivedUsersList = props.derivedUsersList;
    var count = props.count;
    var setCount = props.setCount;
//let camera_button = document.getElementById("start-camera");
let video;
//let click_button = document.getElementById("click-photo");
let canvas;
async function activateCamera() {
    video = document.getElementById("video");
    canvas = document.getElementById("canvas");
    let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    video.srcObject = stream;
};

function takePhoto() {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    let image_data_url = canvas.toDataURL('image/jpeg');
    var imageMessage = new Message("image", image_data_url, new Date(), currentUserName, currentContact);
      console.log('thisImage: ', imageMessage);
      currentUserObject.messages.push(imageMessage);
      localStorage.setItem("storedUsersList", JSON.stringify(derivedUsersList));
      setCount(count+1);

    // data url of the image
    //console.log(image_data_url);

};
    return (

        <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body small">
                <button onClick={activateCamera} id="start-camera">Start Camera</button>
                <video id="video" width="320" height="240" autoPlay></video>
                <button onClick={takePhoto} id="click-photo">Click Photo</button>
                <canvas id="canvas" width="320" height="240"></canvas>
            </div>
        </div>

    )


};

export default TakeSelfie;