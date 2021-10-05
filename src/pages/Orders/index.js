import React, { useMemo } from 'react';
import { StatusBar, FlatList, Text } from 'react-native';
import { useHistory } from 'react-router-native';
import { useSelector } from 'react-redux';

import BlueArrow from '~/assets/blue_arrow.svg';
import QR from '~/assets/qr-code.svg';
import Payments from '~/assets/payments_bg.svg';

import Product from '~/components/Product';
import CustomHeader from '~/components/CustomHeader';
import Order from '~/components/OrderDetails';
import OrderCashback from '~/components/OrderCashback';

import {
  Cashback,
  CashbackIcon,
  CashbackContent,
  CashbackText,
  PreviousOrders
} from './styles';

export default function Orders() {
  const orders = useSelector(({ cart }) => cart.orders);

  console.log(orders);

  const { push } = useHistory();

  const formattedOrders = useMemo(() => [...orders, {...orders[0], id: 789, cashbackApplied: true}], [orders]);

  return (
    <>
      <StatusBar backgroundColor="#f3f3f3" barStyle="dark-content" />
      <CustomHeader title="Pagamentos" icon={Payments} />
      <FlatList
        keyExtractor={item => String(item.id)}
        data={formattedOrders}
        ListHeaderComponent={
          <>
            <Cashback
            onPress={() => push('/cashback')}
          >
            <CashbackIcon>
              <QR
                width={40}
                height={41}
              />
            </CashbackIcon>
            <BlueArrow
              style={{
                position: 'absolute',
                right: 20,
                top: 20,
              }}
              width={15}
              height={15}
            />
            <CashbackContent>
              <CashbackText>
                Crédito para uso&nbsp;
                <CashbackText style={{ fontSize: 18, fontWeight: 'bold' }}>R$ 6,15</CashbackText>
              </CashbackText>
              <CashbackText>Faltam 29 dias para expirar</CashbackText>
            </CashbackContent>
          </Cashback>
          <PreviousOrders>
            Compras Anteriores
          </PreviousOrders>
        </>
        }
        renderItem={({ item }) => item.cashbackApplied ?  <OrderCashback /> : <Order order={item} />}
        contentContainerStyle={{
          backgroundColor: '#f3f3f3',
          paddingBottom: 20,
          paddingHorizontal: 27,
        }}
      />
    </>
  );
}
