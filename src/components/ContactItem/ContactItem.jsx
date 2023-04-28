import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import PropTypes from 'prop-types';

import css from './ContactItem.module.css';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <li className={css.item}>
      <span className={css.name}>{contact.name}</span>:{' '}
      <span>{contact.number}</span>
      <button className={css.btn} onClick={handleDelete} type="button">
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string),
};
