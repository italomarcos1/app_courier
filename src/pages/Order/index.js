import React, { useCallback, useMemo } from 'react';
import uuid from 'react-native-uuid';
import {
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { useHistory } from 'react-router-native';
import { useDispatch, useSelector } from 'react-redux';

import LoginButton from '~/components/LoginButton';
import Order from '~/components/Order';
import OrderResume from '~/components/OrderResume';

import {
  calculatePriceBeta,
  calculateCashbackBeta,
} from '~/utils/calculatePrice';

import { placeOrder } from '~/store/modules/cart/actions';

import { Header, HeaderTitle, BackButton } from './styles';

import Back from '~/assets/back.svg';
import OrderContainer from '../../components/OrderContainer';

export default function CurrentOrder() {
  const { push, goBack } = useHistory();

  const dispatch = useDispatch();

  const products = useSelector(({ cart }) => cart.products);

  const loginButtonStyle = useMemo(() => {
    return { marginTop: 20 };
  }, []);

  const handleLogin = useCallback(() => {
    push('/home');
  }, []);

  const handleOrder = useCallback(() => {
    dispatch(
      placeOrder({
        id: uuid.v4(),
        products,
        price: calculatePriceBeta(products),
        cashback: calculateCashbackBeta(products),
      })
    );
    push('/confirmation');
  }, [products]);

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
          paddingBottom: 10,
          paddingHorizontal: 15,
        }}
      >
        {products.map(p => (
          <Order key={p.id} product={p} />
        ))}
      <OrderResume />
      </ScrollView>
      <OrderContainer
        action={handleOrder}
        callToAction="Finalizar Pedido"
        noCashback
      />
    </>
  );
}
