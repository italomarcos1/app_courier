import React from 'react';

import { StatusBar, Text, View } from 'react-native';

import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor="#00000000"
        barStyle="light-content"
        translucent
      />
      <Routes />
    </>
  );
}
