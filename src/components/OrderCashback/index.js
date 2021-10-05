import React from 'react';

import { Cashback, CashbackIcon, CashbackContent, CashbackText } from './styles';

import QR from '~/assets/qr-code.svg';

export default function OrderCashback() {
  return (
    <Cashback
      onPress={() => {}}
    >
    <CashbackIcon>
      <QR
        width={30}
        height={30}
      />
    </CashbackIcon>
    <CashbackContent>
      <CashbackText>
        Crédito UTILIZADO&nbsp;
        <CashbackText style={{ fontSize: 18, fontWeight: 'bold' }}>R$ 11,60</CashbackText>
      </CashbackText>
      <CashbackText style={{ color: '#50D2C2' }}>01/08/2021 12:44</CashbackText>
    </CashbackContent>
    </Cashback>
  );
}
