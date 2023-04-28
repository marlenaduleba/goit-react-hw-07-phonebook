import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
    // [toggleCompleted.pending]: handlePending,
    // [toggleCompleted.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   const index = state.items.findIndex(
    //     (task) => task.id === action.payload.id
    //   );
    //   state.items.splice(index, 1, action.payload);
    // },
    // [toggleCompleted.rejected]: handleRejected,
  },
  reducers: {
    // addContact: {
    //   reducer(state, action) {
    //     state.items.push(action.payload);
    //   },
    //   prepare(name, number) {
    //     return {
    //       payload: {
    //         id: nanoid(),
    //         name,
    //         number,
    //       },
    //     };
    //   },
    // },
    // deleteContact(state, action) {
    //   const contact = state.items.findIndex(contact => contact.id === action.payload);
    //   state.items.splice(contact, 1);
    // },
    // setContacts(state, action) {
    //   state.items = action.payload;
    // },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items', 'filter'],
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { setFilter } = contactsSlice.actions;
