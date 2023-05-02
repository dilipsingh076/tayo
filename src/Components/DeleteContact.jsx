import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../Redux/actions';

function DeleteContact({ contact, onClose }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
    onClose();
  };

  return (
    <div>
      <h2>Delete Contact</h2>
      <p>Are you sure you want to delete {contact.name}?</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}

export default DeleteContact;
