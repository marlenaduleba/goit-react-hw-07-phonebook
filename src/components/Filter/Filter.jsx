import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contactsSlice';
import { selectFilter } from 'redux/selectors';

import css from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(setFilter(e.target.value));
  
  };

  return (
    <div>
      <label className={css.label}>
        Find contacts by name
        <input
          onChange={handleFilter}
          value={filter}
          type="text"
          name="filter"
          title="Find contacts by name"
        />
      </label>
    </div>
  );
};


