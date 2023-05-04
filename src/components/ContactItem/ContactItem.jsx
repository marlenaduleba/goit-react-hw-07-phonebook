import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import PropTypes from 'prop-types';

import css from './ContactItem.module.css';
import { Notify } from 'notiflix';
import { selectError } from 'redux/selectors';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
    Notify.info(`${contact.name} removed from your contacts.`)
  
  };

  if (error) {
    Notify.error(`ERROR`);
    return (
      <h2 className="text" style={{ fontSize: '40px' }}>
        ERROR
      </h2>
    );
  }


  return (
    <li className={css.item}>
      <span className={css.name}>{contact.name}</span>:{' '}
      <span>{contact.phone}</span>
      <button className={css.btn} onClick={handleDelete} type="button">
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  }).isRequired
};
