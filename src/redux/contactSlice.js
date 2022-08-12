import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
      { id: nanoid(), name: 'Diana Colean', number: '456-12-78' },
      { id: nanoid(), name: 'Margarett Kinn', number: '467-89-89' },
      { id: nanoid(), name: 'Nick Cherchel', number: '678-17-90' },
      { id: nanoid(), name: 'Anna Nonear', number: '234-91-56' },
    ],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      state.items.unshift(action.payload);
    },
    removeContact(state, action) {
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    },
    filterChange(state, action) {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'contacts',
  version: 1,
  storage,
  blacklist: ['filter'],
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);

export const { addContact, removeContact, filterChange } = contactSlice.actions;

// SELECTORS

export const getContacts = state => state.contacts.items;
export const getFilterValue = state => state.contacts.filter;
