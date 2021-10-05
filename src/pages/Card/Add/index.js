import React from 'react';
import { StatusBar } from 'react-native';

import {
  Container,
  InputContainer,
  InputLabel,
  BgInput,
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
      <CustomHeader title="Adicionar Cartão" icon={CardBg} />
      <Container
        contentContainerStyle={{
          paddingHorizontal: 27,
          paddingBottom: 147,
        }}
      >
        <Card style={{ backgroundColor: '#e6b32a' }} />
        <InputContainer style={{ marginTop: 34 }}>
          <InputLabel>Nome</InputLabel>
          <BgInput />
        </InputContainer>
        <InputContainer>
          <InputLabel>Nº do Cartão</InputLabel>
          <BgInput />
        </InputContainer>
        <InputContainer>
          <InputContainer style={{ width: '45%' }}>
            <InputLabel>Data</InputLabel>
            <BgInput style={{  width: '50%' }} />
          </InputContainer>
          <InputContainer style={{ width: '45%' }}>
            <InputLabel>Código</InputLabel>
            <BgInput style={{  width: '50%' }} />
          </InputContainer>
        </InputContainer>
        <CardButton style={{ backgroundColor: '#50D2C2' }}>
          <CardButtonBadge style={{ backgroundColor: '#10D2C2' }}>
            <CardWhite width={20} />
          </CardButtonBadge>
          <CardButtonTitle>Salvar Cartão</CardButtonTitle>
        </CardButton>
      </Container>
    </>
  );
}
