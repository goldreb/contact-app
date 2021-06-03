import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });

  //contact list
  return (
    <div className="main">
      <h2>
        Contact List
        <Link to="/add">
          <button className="ui primary button right">Add Contact</button>
        </Link>
      </h2>
      <div className="ui list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
