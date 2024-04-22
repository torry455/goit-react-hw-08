import { createSelector, createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [], 
    loading: false, 
    error: null, 
  },
  reducers: {
    setContacts(state, action) {
      state.contacts = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setContacts, setLoading, setError } = contactsSlice.actions;
export const selectContacts = state => state.contacts.contacts;
export const selectFilter = state => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter, state => state.contacts.loading, state => state.contacts.error],
  (contacts, filter, loading, error) => {
    if (!loading && !error) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    } else {
      return [];
    }
  }
);

export const contactsReducer = contactsSlice.reducer;