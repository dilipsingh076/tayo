import React from 'react';
import ContactForm from './ContactForm';

const CustomModal = ({ show,onclose }) => {
  return (
    <div className={`modal ${show ? 'show' : ''}`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Create Contact</h5>
            <button type="button" className="close" onClick={onclose} >
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;

