import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../Redux/store";
import ContactList from "./ContactList";
import { v4 as uuidv4 } from 'uuid';

function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const newContact = {
      id,
      name,
      email,
      phone,
    };
    dispatch(addContact(newContact));
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            required
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            required
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            required
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button type="submit">Add Contact</button>
      </form>

      {/* <ContactList /> */}
    </>


  );
}

export default ContactForm;
