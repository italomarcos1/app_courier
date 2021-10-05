import React from 'react';
import { View,StatusBar } from 'react-native';

import {
  Container,
  CashbackContent,
  CashbackText,
  CashbackBoldText,
  QRContainer
} from './styles';

import QR from '~/assets/qr-code.svg';
import TGOO from '~/assets/TGOO.svg';

import BackButton from '~/components/BackButton';

export default function Cashback() {
  return (
    <>
    <StatusBar backgroundColor="#333" barStyle="light-content" />
    <View
      style={{ position:'relative', flex:1, paddingBottom: 35 }}
      >
      <BackButton />
      <Container>
        <CashbackContent>
          <CashbackText>
            Crédito para uso&nbsp;
            <CashbackBoldText>R$ 6,15</CashbackBoldText>
          </CashbackText>
          <CashbackText>Faltam 29 dias para expirar</CashbackText>
          </CashbackContent>
        <QRContainer>
          <QR
            style={{
              width:224,
              height:224,
            }}
            width={224}
            height={224}
            />
        </QRContainer>
        </Container>
        <TGOO
          height={19}
          width={52}
          style={{
            marginTop: 'auto',
            alignSelf: 'center',
          }}
        />
      </View>
      </>
  );
}
