import React from 'react';
import { View } from 'react-native';

import Plus from '~/assets/plus.svg';

import {
  Container,
  Image,
  ImageContainer,
  Description,
  DescriptionContainer,
  AddToCartButton,
  Title,
  OldPrice,
  Price,
  Cashback,
} from './styles';

export default function Product({ product }) {
  return (
    <Container>
      <ImageContainer>
        <Image style={{ backgroundColor: product.backgroundColor }} />
      </ImageContainer>
      <DescriptionContainer>
        <Title>{product.title}</Title>
        <Description style={{ height: 48 }}>{product.description}</Description>
        <Description>
          de&nbsp;<OldPrice>{product.oldPrice} &euro;</OldPrice>&nbsp;por&nbsp;
          <Price>{product.newPrice} &euro;</Price>
        </Description>
        <Description style={{ marginTop: 8 }}>
          Recebe&nbsp;<Cashback>{product.cashback} &euro;</Cashback>
          &nbsp;de crédito
        </Description>
      </DescriptionContainer>
      <AddToCartButton>
        <Plus width={22.7} height={22.7} />
      </AddToCartButton>
    </Container>
  );
}
