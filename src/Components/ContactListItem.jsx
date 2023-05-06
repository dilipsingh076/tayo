import React, { useState } from 'react';
import EditContact from './EditContact';

function ContactListItem({ contact, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteClick = () => {
    setIsDeleting(true);
  };

  const handleDeleteConfirm = () => {
    onDelete(contact.id);
    setIsDeleting(false);
  };

  const handleDeleteClose = () => {
    setIsDeleting(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleEditClose = () => {
    setIsEditing(false);
  };

  return (
    <li>
      <span>{contact.name}</span>
      <button onClick={handleEditClick}>Edit</button>
      <button onClick={handleDeleteClick}>Delete</button>
      {isEditing && <EditContact contact={contact} onClose={handleEditClose} />}
      {isDeleting && (
        <div>
          <h2>Delete Contact</h2>
          <p>Are you sure you want to delete {contact.name}?</p>
          <button onClick={handleDeleteConfirm}>Delete</button>
          <button onClick={handleDeleteClose}>Cancel</button>
        </div>
      )}
    </li>
  );
}

export default ContactListItem;
