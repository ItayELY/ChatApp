import Message from "./Message";

var usersList = [
    {userName: "Yonadav",
    displayName: "Yonadav",
    password:"123",
    profileImagePath: "/profile.jpg",
    contactsUserNames: ["Itay"],
    messages: [new Message("Hi! Do you thing Shtusel is king?", new Date(), "Yonadav", "Itay"), new Message("asfafgg", new Date()+1, "Yonadav", "Itay")]
},
{userName: "Itay",
    displayName: "Itay",
    password:"123",
    profileImagePath: "/profile.jpg",
    contactsUserNames: ["Yonadav"],
    messages: [new Message("Hi! Do you thing Shtusel is king?", new Date(), "Yonadav", "Itay"), new Message("Yes!", new Date()+1, "Itay", "Yonadav")]
}
];


export default usersList;