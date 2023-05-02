import { Section } from 'components/Section/Section';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';

import css from './Phonebook.module.css';

export const Phonebook = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <div className={css.box}>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        {contacts.length > 0 ? (
          <Filter />
        ) : (
          <p className={css.message}>
            Looks like you don`t have any contacts yet or just clear them all.
            Please add new contact.
          </p>
        )}
        {isLoading && !error && <b>Request in progress...</b> }
        <ContactList />
      </Section>
    </div>
  );
};
