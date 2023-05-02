// Action Types
export const ADD_CONTACT = 'ADD_CONTACT';
export const EDIT_CONTACT = 'EDIT_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';

// Action Creators
export const addContact = (contact) => ({
  type: ADD_CONTACT,
  payload: {
    contact,
  },
});

export const editContact = (id, updatedContact) => ({
  type: EDIT_CONTACT,
  payload: {
    id,
    updatedContact,
  },
});

export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: {
    id,
  },
});
