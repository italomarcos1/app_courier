import React from 'react';
import { StatusBar, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-native';

import Back from '~/assets/back.svg';
import OrangeCheck from '~/assets/orange_check.svg';
import Card from '~/assets/card_bg.svg';
import CardBlack from '~/assets/card_black.svg';
import Master from '~/assets/master.svg';
import Paypal from '~/assets/paypal_s.svg';

import {
  Container,
  PaymentOption,
  AddPaymentOption,
  Flag,
  PaymentContent,
  PaymentMethodTitle,
  PaymentMethodSubtitle,
  AddPaymentOptionBadge,
  AddPaymentOptionTitle,
} from './styles';

import CustomHeader from '~/components/CustomHeader';

export default function Wallet() {
  const { push } = useHistory();

  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <CustomHeader title="Carteira"
        icon={Card}
      />
      <Container
        contentContainerStyle={{
          paddingHorizontal: 27,
          paddingBottom: 147,
        }}
      >
        <PaymentOption onPress={() => push('/card_edit')}>
          <Flag>
            <Master />
          </Flag>
          <PaymentContent>
            <PaymentMethodTitle>Master Card</PaymentMethodTitle>
            <PaymentMethodSubtitle>
              xxxx - xxxx - xxxx - 8979
            </PaymentMethodSubtitle>
          </PaymentContent>
          <OrangeCheck style={{ position: 'absolute', top: 8, right: 8 }} />
        </PaymentOption>
        <PaymentOption onPress={() => push('/card_edit')}>
          <Flag>
            <Master />
          </Flag>
          <PaymentContent>
            <PaymentMethodTitle>Master Card</PaymentMethodTitle>
            <PaymentMethodSubtitle>
              xxxx - xxxx - xxxx - 6047
            </PaymentMethodSubtitle>
          </PaymentContent>
        </PaymentOption>
        <AddPaymentOption onPress={() => push('/card_add')}>
          <AddPaymentOptionBadge>
            <CardBlack width={20} />
          </AddPaymentOptionBadge>
          <AddPaymentOptionTitle>Adicionar Cartão</AddPaymentOptionTitle>
        </AddPaymentOption>
        <PaymentOption style={{ marginTop: 41 }}>
          <Flag>
            <Paypal />
          </Flag>
          <PaymentContent>
            <PaymentMethodTitle>Paypal</PaymentMethodTitle>
            <PaymentMethodSubtitle>
              andrelopes@gmail.com
            </PaymentMethodSubtitle>
          </PaymentContent>
        </PaymentOption>
        <AddPaymentOption onPress={() => push('/paypal')}>
          <AddPaymentOptionBadge style={{ backgroundColor: '#fff' }}>
            <Paypal width={18} />
          </AddPaymentOptionBadge>
          <AddPaymentOptionTitle>Adicionar Paypal</AddPaymentOptionTitle>
        </AddPaymentOption>
      </Container>
    </>
  );
}
