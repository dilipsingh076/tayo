import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../Redux/actions';

function ContactListItem({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li>
      <span>{contact.name}</span>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default ContactListItem;
