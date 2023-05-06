import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContact } from '../Redux/store';
import { Modal, Button } from 'rsuite';
function EditContact({ contact, onClose }) {
  const [name, setName] = useState(contact.name);
  const [phone, setPhone] = useState(contact.phone);
  // const [show,setShow]= useState(false)
  const dispatch = useDispatch();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateContact(contact.id, { name, phone }));
    onClose();
  };

  return (
    <Modal open={true} onHide={onClose}>
    <Modal.Header>
      <Modal.Title>Edit Contact</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>
          Phone:
          <input type="text" value={phone} onChange={handlePhoneChange} />
        </label>
        <Button type="submit" appearance="primary">
          Save
        </Button>
        <Button onClick={onClose} appearance="subtle">
          Cancel
        </Button>
      </form>
    </Modal.Body>
  </Modal>
  );
}

export default EditContact;
