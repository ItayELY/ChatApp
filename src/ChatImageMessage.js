import Message from "./Message";




function ChatImageMessage({ message, sentByCurrentUser }) {
    

    console.log("image message was rendered");


    return sentByCurrentUser === true ?
        <div class="d-flex justify-content-start overflow-auto"><br />
            <div class="d-inline-flex p-2  d-flex flex-column">
                <div class="">
                    <div class="text-muted small text-nowrap p2">
                        sent at {String(message.time)}
                    </div>
                </div>
                <div class="flex-shrink-1 rounded py-2 px-3 ml-3 p2" style={{ backgroundColor: "lightgreen"}}>
                    <div class="font-weight-bold mb-1" >from {message.writer}<br></br>
                        <img src={message.text} style= {{maxWidth: "25%"}} />
                    </div>

                </div>
            </div>
        </div>
        :



        <div class="d-flex justify-content-end overflow-auto"><br />

            <div class="d-inline-flex p-2 d-flex flex-column">
                <div class="">
                    <div class="text-muted small text-nowrap p2">
                        sent at {String(message.time)}
                    </div>
                </div>
                <div class="flex-shrink-1 rounded py-2 px-3 ml-3 p2 " style={{ backgroundColor: "cadetBlue" }} >
                <div class="font-weight-bold mb-1 ">from {message.writer}<br></br>
                        <img src={message.text} />
                    </div>
                </div>
            </div>
        </div>

        ;
}


/*
return (
  <div className="a">
    <div>
      <div class="text-muted small text-nowrap mt-2">
        sent at {String(message.time)}
      </div>
    </div>
    <div class="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
      <div class="font-weight-bold mb-1">from {message.writer}</div>
      {message.text}
    </div>
  </div>
);
*/


export default ChatImageMessage;
