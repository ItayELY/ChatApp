import Message from "./Message";

var usersList = [{
        userName: "Yonadav",
        userContacts: [{
                name: "Itay",
                latestMessage: "talk to me please",
                numOfUnreadMessages: "3",
                timeSinceLastMessage: "2 mins",
                profileImagePath: "/profile.jpg",
            },
            {
                name: "Elon Musk",
                latestMessage: "talk to me please",
                numOfUnreadMessages: "999",
                timeSinceLastMessage: "2 mins",
                profileImagePath: "/profile.jpg",
            },
        ],
        displayName: "Yonadav",
        password: "123",
        profileImagePath: "/profile.jpg",
        contactsUserNames: ["Itay"],
        messages: [
            new Message(
                "Hi! Do you thing Shtusel is king?",
                new Date(),
                "Yonadav",
                "Itay"
            ),
            new Message("Yes!", new Date() + 1, "Itay", "Yonadav"),
        ],
    },
    {
        userName: "Itay",
        userContacts: [{
                name: "Yonadav",
                latestMessage: "talk to me please",
                numOfUnreadMessages: "3",
                timeSinceLastMessage: "2 mins",
                profileImagePath: "/profile.jpg",
            },
            {
                name: "Elon Musk",
                latestMessage: "talk to me please",
                numOfUnreadMessages: "999",
                timeSinceLastMessage: "2 mins",
                profileImagePath: "/profile.jpg",
            },
        ],
        displayName: "Itay",
        password: "1234",
        profileImagePath: "/profile.jpg",
        contactsUserNames: ["Yonadav"],
        messages: [
            new Message(
                "Hi! Do you thing Shtusel is king?",
                new Date(),
                "Yonadav",
                "Itay"
            ),
            new Message("Yes!", new Date() + 1, "Itay", "Yonadav"),
        ],
    },
    {
        userName: "Elon Musk",
        userContacts: [{
                name: "Itay",
                latestMessage: "talk to me please",
                numOfUnreadMessages: "3",
                timeSinceLastMessage: "2 mins",
                profileImagePath: "/profile.jpg",
            },
            {
                name: "Elon Musk",
                latestMessage: "talk to me please",
                numOfUnreadMessages: "999",
                timeSinceLastMessage: "2 mins",
                profileImagePath: "/profile.jpg",
            },
        ],
        displayName: "Elon Musk",
        password: "123",
        profileImagePath: "/profile.jpg",
        contactsUserNames: ["Itay"],
        messages: [
            new Message("Hi! where is the weed>", new Date(), "Elon Musk", "Itay"),
            new Message("Here!", new Date() + 1, "Itay", "Elon Musk"),
        ],
    },
];

export default usersList;