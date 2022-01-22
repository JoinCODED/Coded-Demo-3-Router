import React from "react";
import { Navigate, useParams } from "react-router-dom";
import contacts from "../contacts";
const ChatDetails = () => {
  let { contactSlug } = useParams();
  let contact = contacts.find((con) => con.slug === contactSlug);

  if (!contact) {
    return <Navigate to="/404" />;
  }
  return (
    <div>
      <h1>{contact.name}</h1>
      <h1>{contact.phone}</h1>
    </div>
  );
};

export default ChatDetails;
