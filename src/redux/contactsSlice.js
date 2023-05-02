import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const handleFetchFullfilled = (state, action) => {
  state.items = action.payload;
};

const handleAddFullfilled = (state, action) => {
  state.items.push(action.payload);
};

const handleDeleteFullfilled = (state, action) => {
  const index = state.items.findIndex(task => task.id === action.payload.id);
  state.items.splice(index, 1);
};

const actions = [fetchContacts, addContact, deleteContact];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filter: '',
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },

  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, handleFetchFullfilled)
      .addCase(addContact.fulfilled, handleAddFullfilled)
      .addCase(deleteContact.fulfilled, handleDeleteFullfilled)
      .addMatcher(
        isAnyOf(...actions.map(action => action.fulfilled)),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(isAnyOf(...actions.map(action => action.pending)), state => {
        state.isLoading = true;
      })
      .addMatcher(
        isAnyOf(...actions.map(action => action.rejected)),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const contactsReducer = contactsSlice.reducer;
export const { setFilter } = contactsSlice.actions;
