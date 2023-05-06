// // import {applyMiddleware,legacy_createStore,combineReducers} from 'redux'
// // import thunk from 'redux-thunk';
// // import reducer from './reducer';
// // const rootReducer = combineReducers({reducer})

// // const store = legacy_createStore(rootReducer,applyMiddleware(thunk))

// // export default store;

// import { legacy_createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";

// const initialState = {
//   contacts: [],
// };

// // Action types
// const ADD_CONTACT = "ADD_CONTACT";
// const DELETE_CONTACT = "DELETE_CONTACT";
// const EDIT_CONTACT = "EDIT_CONTACT";

// // Action creators
// export const addContact = (contact) => ({
//   type: ADD_CONTACT,
//   payload: contact,
// });

// export const deleteContact = (id) => ({
//   type: DELETE_CONTACT,
//   payload: id,
// });

// export const updateContact = (id,contact) => (console.log("insidedisptach",id,contact),{
//   type: EDIT_CONTACT,
//   payload: {id,contact},
// });

// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case ADD_CONTACT:
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload],
//       };
//     case DELETE_CONTACT:
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           (contact) => contact.id !== action.payload
//         ),
//       };
//     case EDIT_CONTACT:
//       const { id, updatedContact } = action.payload;
//   const updatedContacts = state.contacts.map((contact) =>
//     contact.id === id ? { ...contact, ...updatedContact } : contact
//   );
//   return {
//     ...state,
//     contacts: updatedContacts,
//   };
//       // const updatedContacts = state.contacts.map((contact) =>
//       //   contact.id === action.payload.id ? action.payload : contact
//       // );
//       // return {
//       //   ...state,
//       //   updatedContacts,
//       // };
//     default:
//       return state;
//   }
// }

// const store = legacy_createStore(reducer, applyMiddleware(thunk));

// export default store;




import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";

const initialState = {
  contacts: [],
};

// Action types
const ADD_CONTACT = "ADD_CONTACT";
const DELETE_CONTACT = "DELETE_CONTACT";
const UPDATE_CONTACT = "UPDATE_CONTACT";

// Action creators
export const addContact = (contact) => ({
  type: ADD_CONTACT,
  payload: contact,
});

export const deleteContact = (id) => (console.log("delteid",id),{
  type: DELETE_CONTACT,
  payload: id,
});

export const updateContact = (id, updatedContact) => ({
  type: UPDATE_CONTACT,
  payload: { id, updatedContact },
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case UPDATE_CONTACT:
      const { id, updatedContact } = action.payload;
      const updatedContacts = state.contacts.map((contact) =>
        contact.id === id ? { ...contact, ...updatedContact } : contact
      );
      return {
        ...state,
        contacts: updatedContacts,
      };
    default:
      return state;
  }
}

const store = legacy_createStore(reducer, applyMiddleware(thunk));

export default store;
