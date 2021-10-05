import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import {
  View,
  ImageBackground,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Text
} from 'react-native';
import { useHistory, useLocation } from 'react-router-native';

import Order from '~/components/PlacedOrder';
import OrderResume from '~/components/OrderResume';

import Back from '~/assets/back.svg';

import {
  Header,
  HeaderTitle,
  BackButton,
} from './styles';

export default function OrderDetails() {
  const { push, goBack } = useHistory();
  const { state } = useLocation();

  const { order } = state;

  console.log('order', order);

  return (
    <>
      <StatusBar backgroundColor="#50d2c2" barStyle="light-content" />
      <Header>
        <BackButton onPress={goBack}>
          <Back />
        </BackButton>
        <HeaderTitle>Pedido 042</HeaderTitle>
      </Header>
      <ScrollView
        style={{ flex: 1, backgroundColor: '#F3F3F3' }}
        contentContainerStyle={{
          paddingBottom: 241,
          paddingHorizontal: 15,
        }}
      >
        {order.products.map(p => (
          <Order key={p.id} product={p} />
        ))}
        <OrderResume />
      </ScrollView>
    </>
  );
}
