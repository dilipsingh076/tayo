import React, { useState } from 'react';
import {Modal} from 'rsuite'
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
    <li className='listitem' >
      <span>{contact.name}</span><br/>
      <button style={{background:"green"}}  onClick={handleEditClick}>Edit</button>
      <button style={{background:"red"}} onClick={handleDeleteClick}>Delete</button>
      {isEditing && <EditContact contact={contact} onClose={handleEditClose} />}
      <Modal open={isDeleting} onHide={handleDeleteClose}>
        <Modal.Header>
          <Modal.Title>Delete Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete {contact.name}?</p>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleDeleteConfirm} appearance="primary">
            Delete
          </button>
          <button onClick={handleDeleteClose} appearance="subtle">
            Cancel
          </button>
        </Modal.Footer>
      </Modal>
    </li>
  );
}

export default ContactListItem;
