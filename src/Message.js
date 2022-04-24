class Message {
    constructor(type, text, time, writer, receiver) {
        this.type = type;
        this.text = text;
        this.time = time;
        this.writer = writer;
        this.receiver = receiver;
    }
}

export default Message;