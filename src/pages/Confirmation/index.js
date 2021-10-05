import React, { useCallback, useMemo, useState } from 'react';
import { StatusBar } from 'react-native';
import { useHistory, useLocation } from 'react-router-native';
import { useSelector } from 'react-redux';

import {
  Container,
  PaymentApprovedText,
  OrderPlacedText,
  Button,
  ButtonText,
} from './styles';

export default function OrderFinished() {
  const { push, goBack } = useHistory();
  const { state } = useLocation();

  const orders = useSelector(({ cart }) => cart.orders);

  console.log(orders);

  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Container>
        <PaymentApprovedText>Pagamento Aprovado!</PaymentApprovedText>
        <OrderPlacedText>
          Seu pedido já foi encaminhado.{'\n'}Obrigado!
        </OrderPlacedText>
        <Button
          onPress={() => push('/details', { order: orders[orders.length - 1] })}
        >
          <ButtonText>Ver o Pedido</ButtonText>
        </Button>
        <Button
          onPress={() => push('/home')}
          style={{ marginTop: 16, backgroundColor: 'rgba(29, 191, 115, 0.1)' }}
        >
          <ButtonText style={{ color: '#1DBF73' }}>
            Continuar a Comprar
          </ButtonText>
        </Button>
      </Container>
    </>
  );
}
