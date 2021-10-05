import './config/ReactotronConfig';
import React from 'react';
import { Modal } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { StatusBar, Text, View } from 'react-native';
import { store, persistor } from './store';

import Routes from './routes';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
}
