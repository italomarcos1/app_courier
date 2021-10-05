import React, { useState } from 'react';
import { StatusBar } from 'react-native';

import {
  Container,
  InputContainer,
  InputLabel,
  BgInput,
  CardButton,
  CardButtonBadge,
  CardButtonTitle,
} from '../styles';

import PaypalLogo from '~/assets/paypal_f.svg';
import PaypalSmall from '~/assets/paypal_s.svg';
import PaypalBg from '~/assets/paypal_bg.svg';

import CustomHeader from '~/components/CustomHeader';

export default function Paypal() {
  const [isPaypalActive, setIsPaypalActive] = useState(false);

  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <CustomHeader
        title={isPaypalActive ? 'PayPal Conectado' : 'Adicionar PayPal'}
        icon={PaypalBg}
      />
      <Container
        contentContainerStyle={{
          paddingHorizontal: 27,
          paddingBottom: 147,
        }}
      >
        <PaypalLogo width={221} height={53} style={{ marginTop: 31, alignSelf: 'center' }}/>
        <InputContainer style={{ marginTop: 43 }}>
          <InputLabel>Email</InputLabel>
          <BgInput />
        </InputContainer>

        <CardButton
          style={{
            marginTop: 45,
            backgroundColor: isPaypalActive ? '#EA4D59' : '#50D2C2',
            width: 'auto',
            paddingLeft: 25,
            paddingRight: 25,
          }}
          onPress={() => setIsPaypalActive(!isPaypalActive)}
        >
          <CardButtonBadge style={{ backgroundColor: '#fff' }}>
            <PaypalSmall width={18} height={20} />
          </CardButtonBadge>
          <CardButtonTitle>
            {isPaypalActive ? 'Desconectar do PayPal' : 'Conectar ao PayPal'}
          </CardButtonTitle>
        </CardButton>
      </Container>
    </>
  );
}
