import React from "react";
import contacts from "../contacts";
import ChatItem from "./ChatItem";
const ChatList = () => {
  return (
    <div>
      {contacts.map((contact) => (
        <ChatItem contact={contact} />
      ))}
    </div>
  );
};

export default ChatList;
