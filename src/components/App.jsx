import { useEffect } from 'react';
import Container from './Layout/Layout';
import { Phonebook } from './Phonebook/Phonebook';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Phonebook />
    </Container>
  );
};
