import React from 'react';
import { NativeRouter, Route } from 'react-router-native';

import Welcome from '~/pages/Welcome';
import Login from '~/pages/Login';
import Home from '~/pages/Home';

export default function App() {
  return (
    <NativeRouter>
      <Route path="/" exact component={Welcome} />
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
    </NativeRouter>
  );
}
