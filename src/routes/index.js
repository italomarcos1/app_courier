import React from 'react';
import { NativeRouter, Switch, Route } from 'react-router-native';

import Welcome from '~/pages/Welcome';
import Login from '~/pages/Login';
import Home from '~/pages/Home';
import Account from '~/pages/Account';
import Favorites from '~/pages/Favorites';
import Orders from '~/pages/Orders';
import Wallet from '~/pages/Wallet';
import AddCard from '~/pages/Card/Add';
import EditCard from '~/pages/Card/Edit';
import Paypal from '~/pages/Card/Paypal';
import Cashback from '~/pages/Cashback';

import Order from '~/pages/Order';
import Confirmation from '~/pages/Confirmation';
import OrderDetails from '~/pages/OrderDetails';

import ProductDetails from '~/pages/ProductDetails';

export default function App() {
  return (
    <NativeRouter>
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/account" component={Account} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/wallet" component={Wallet} />
        <Route path="/card_add" component={AddCard} />
        <Route path="/card_edit" component={EditCard} />
        <Route path="/paypal" component={Paypal} />
        <Route path="/cashback" component={Cashback} />
        <Route path="/product" component={ProductDetails} />
        <Route path="/order" component={Order} />
        <Route path="/orders" component={Orders} />
        <Route path="/details" component={OrderDetails} />
        <Route path="/confirmation" component={Confirmation} />
      </Switch>
    </NativeRouter>
  );
}
