import { createSlice, nanoid } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const contact = state.items.findIndex(contact => contact.id === action.payload);
      state.items.splice(contact, 1);
    },
    setContacts(state, action) {
      state.items = action.payload;
    },
    setFilter(state, action) {
      state.filter = action.payload;
    }
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items', 'filter'],
}


export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);

export const { addContact, deleteContact, setContacts, setFilter } = contactsSlice.actions;
