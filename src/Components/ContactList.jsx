import React from 'react';
import { useSelector } from 'react-redux';
import ContactListItem from './ContactListItem';

function ContactList() {
  const contacts = useSelector(state => state.contacts);

  return (
    <div>
      <h1>Contact List:</h1>
      <ul>
        {contacts.map(contact => (
          <ContactListItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
