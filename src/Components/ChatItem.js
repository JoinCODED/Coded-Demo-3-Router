import React from "react";
import { Link } from "react-router-dom";
const ChatItem = ({ contact }) => {
  return (
    <div style={{ background: "lightBlue", margin: "1em" }}>
      <Link to={`/contacts/${contact.slug}`}>
        <h2>{contact.name}</h2>
      </Link>
    </div>
  );
};

export default ChatItem;
