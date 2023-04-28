import Container from "./Layout/Layout";
import { Phonebook } from "./Phonebook/Phonebook";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "redux/store";

export const App = () => {
  return (
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor} >
        <Container>
          <Phonebook />
        </Container>
      </PersistGate>
    </Provider>
  );
};