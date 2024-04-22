import { createSelector, createSlice } from '@reduxjs/toolkit';
import {
  apiGetContacts,
  apiPostContacts,
  apiDeleteContacts,
} from './contactsOps';

const contactsInitialState = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
  filters: {
    name: '',
  },
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    changeFilter(state, action) {
      state.filters.name = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(apiGetContacts.pending, state => {
        state.contacts.loading = true;
        state.contacts.error = false;
      })
      .addCase(apiGetContacts.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.contacts.items = action.payload;
      })
      .addCase(apiGetContacts.rejected, state => {
        state.contacts.loading = false;
        state.contacts.error = true;
      })

      .addCase(apiPostContacts.pending, state => {
        state.contacts.loading = true;
        state.contacts.error = false;
      })
      .addCase(apiPostContacts.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.contacts.items.push(action.payload);
      })
      .addCase(apiPostContacts.rejected, state => {
        state.contacts.loading = false;
        state.contacts.error = true;
      })

      .addCase(apiDeleteContacts.pending, state => {
        state.contacts.loading = true;
        state.contacts.error = false;
      })
      .addCase(apiDeleteContacts.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(apiDeleteContacts.rejected, state => {
        state.contacts.loading = false;
        state.contacts.error = true;
      });
  },
});

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
export const selectContactsFilter = state => state.filters.name;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectContactsFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.trim().toLowerCase())
    );
  }
);

export const { changeFilter } = contactsSlice.actions;
export const filtersReducer = contactsSlice.reducer;

export const contactsReducer = contactsSlice.reducer;