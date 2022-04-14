import Message from "./Message";




function ChatAudioMessage({ message, sentByCurrentUser }) {


    console.log(message.text);


    return sentByCurrentUser === true ?
        <div class="d-flex justify-content-start overflow-auto"><br />
            <div class="d-inline-flex p-2  d-flex flex-column">
                <div class="">
                    <div class="text-muted small text-nowrap p2">
                        sent at {String(message.time)}
                    </div>
                </div>
                <div class="flex-shrink-1 rounded py-2 px-3 ml-3 p2" style={{ backgroundColor: "lightgreen" }}>
                    <div class="font-weight-bold mb-1" >from {message.writer}<br></br>
                        <audio controls>
                            <source src={message.text} />
                            The “audio” tag is not supported by your browser. Click [here] to download the sound file.
                        </audio>
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
                        <audio controls>
                            <source src={message.text} />
                            The “audio” tag is not supported by your browser. Click [here] to download the sound file.
                        </audio>
                    </div>
                </div>
            </div>
        </div>

        ;
}



export default ChatAudioMessage;
