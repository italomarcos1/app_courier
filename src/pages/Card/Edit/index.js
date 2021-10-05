import React from 'react';
import { StatusBar } from 'react-native';

import {
  Container,
  InputContainer,
  InputLabel,
  Input,
  Card,
  CardButton,
  CardButtonBadge,
  CardButtonTitle,
} from '../styles';

import CardWhite from '~/assets/card.svg';
import CardBg from '~/assets/card_bg.svg';

import CustomHeader from '~/components/CustomHeader';

export default function EditCard() {
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <CustomHeader title="Master Card" icon={CardBg} />
      <Container
        contentContainerStyle={{
          paddingHorizontal: 27,
          paddingBottom: 147,
        }}
      >
        <Card />
        <InputContainer style={{ marginTop: 34 }}>
          <InputLabel>Nome</InputLabel>
          <Input />
        </InputContainer>
        <InputContainer>
          <InputLabel>Nº do Cartão</InputLabel>
          <Input />
        </InputContainer>
        <InputContainer>
          <InputContainer style={{ width: '45%' }}>
            <InputLabel>Data</InputLabel>
            <Input style={{ width: '50%' }} />
          </InputContainer>
          <InputContainer style={{ width: '45%' }}>
            <InputLabel>Código</InputLabel>
            <Input style={{ width: '50%' }} />
          </InputContainer>
        </InputContainer>
        <CardButton>
          <CardButtonBadge>
            <CardWhite width={20} />
          </CardButtonBadge>
          <CardButtonTitle>Excluir Cartão</CardButtonTitle>
        </CardButton>
      </Container>
    </>
  );
}
