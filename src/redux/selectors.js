export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.contacts.filter;

export const selectFilteredContacts = state => {
    const {items, filter} = state.contacts;

    return items.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase().trim()));
}