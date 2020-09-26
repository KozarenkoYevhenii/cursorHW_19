import React from "react";
import "./Contact.css";

const Contact = ({ contact }) => {
  return (
    <div className="contact-card">
      <div className="contact">
      <span className="contact-name">{contact.firstName} {contact.lastName} </span>
        <span className="gender">{contact.gender && contact.gender}</span>
      </div>
      <span className="contact-number">{contact.phone}</span>
    </div>
  );
};

export default Contact;
