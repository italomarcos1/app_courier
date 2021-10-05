import React, { useMemo } from 'react';
import { useHistory } from 'react-router-native';

import { Container, Flag, Content, Price, Date } from './styles';

import BlueArrow from '~/assets/blue_arrow.svg';
import Master from '~/assets/master.svg';

export default function OrderDetails({ order }) {
  const {price,cashback} = useMemo(() => {
    return {
      price: order.price.replace('.', ','),
      cashback: order.cashback.replace('.', ','),
  }}, [order])

  const { push } = useHistory();

  return (
    <Container
      onPress={() => push('/details', { order })}
    >
      <Flag>
        <Master />
      </Flag>
      <Content>
        <Date>01/09/2021</Date>
        <Price>{price} &euro;</Price>
        <Date>Crédito {cashback} &euro;</Date>
        </Content>
        <BlueArrow
          style={{
            position: 'absolute',
            right: 9,
            top: 9,
          }}
          width={18}
          height={18}
        />
    </Container>
  );
}
