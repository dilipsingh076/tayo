import React,{useDebugValue, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactItem from "./ContactListItem";
// import { Button, Modal } from "rsuite";
import { deleteContact } from "../Redux/store";
import ContactForm from "./ContactForm";
import CustomModal from "./CustomModal";
function ContactList() {
  const [state, setState] = useState(); 
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch()

  const [showModal, setShowModal] = useState(false);


  const handleCreate = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleDelete = (id) => {
    dispatch(deleteContact(id)); // dispatch the deleteContact action with the id
    setState({});
  };

  return (
    <div>
      <h2>Contact List</h2>
      {contacts.length === 0 ? (
        <div>
        <p>No contacts found. Please add contact from Create Contact Button.</p>
        <button onClick={handleCreate}>Create Contact</button>
        </div>
      ) : (
        <>
        <ul>
          {contacts.length > 0 &&
            contacts.map((contact) => (
              <ContactItem key={contact.id} contact={contact}    onDelete={() => handleDelete(contact.id)} />
            ))}
        </ul>
        <button onClick={handleCreate}>Create Contact</button>
        </>
      )}
      <CustomModal show={showModal} onclose={handleClose} />
       {/* <Modal show={showModal} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Create Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ContactForm />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal> */}
    </div>
  );
}

export default ContactList;
