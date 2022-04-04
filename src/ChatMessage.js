import Message from "./Message";


function ChatMessage({ message }) {
    console.log('message was rendered');
    
    return (

        <div class="chat-message-left pb-4">
            <div>

                <div class="text-muted small text-nowrap mt-2">sent at {String(message.time)}</div>
            </div>
            <div class="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                <div class="font-weight-bold mb-1">from {message.writer}</div>
                {message.text}
            </div>
        </div>

    );
}

export default ChatMessage;
