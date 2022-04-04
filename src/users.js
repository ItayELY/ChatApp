var usersList = [];
chatList1 = [new Message("Hello", "11:00", "Roi Avraham"),
new Message("how R U?", "11:01", "Roi Avraham"), new Message("I'm fine", "11:02", "Shira Goren")];

const chatList2 = [new Message("Hello", "11:00", "Roi Avraham"),
new Message("how R U?", "11:01", "Roi Avraham"),new Message("good", "11:02", "Naftali Benet")];
const chats = {"1": chatList1, "2": chatList2};

const users = {"Roi Avraham": ["Rrughtcrvo90", "roi", {"Shira Goren":"1", "Naftali Benet": "2"}],
"Shira Goren": ["Ssiragoren90", "shira",{"Roi Avraham":"1"}],
"Naftali Benet": ["Nnaftali10", "Benet",{"Roi Avraham":"2"}]};

export default users;