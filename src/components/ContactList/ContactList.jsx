import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { selectFilteredContacts } from 'redux/selectors';


import css from './ContactList.module.css';


export const ContactList = () => {
const filteredContacts = useSelector(selectFilteredContacts);

if (filteredContacts.length === 0) {
  return <></>;
}

  return (
    <div>
      
        <ul className={css.list}>
          {filteredContacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
             
            />
          ))}
        </ul>
      
    </div>
  );
};


