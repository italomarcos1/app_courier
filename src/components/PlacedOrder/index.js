import React, { useMemo } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Minus from '~/assets/add-ico-minus.svg';
import Plus from '~/assets/add-ico-plus-on.svg';

import { calculatePriceBeta, formatPrice } from '~/utils/calculatePrice';

import {
  Container,
  ProductInfo,
  Picture,
  ProductName,
  ProductDescription,
  DetailsContainer,
  DetailsText,
  Details,
  Description,
  OldPrice,
  Price,
  Cashback,
  AmountContainer,
  Amount,
  AmountButton,
  FinalPrice,
  AmountAndPriceContainer,
} from './styles';

export default function PlacedOrder({ product }) {
  const amount = useMemo(() => product.qty, [product]);

  const dispatch = useDispatch();

  const finalPrice = useMemo(
    () => formatPrice(+product.price_promotional * +product.qty),
    [amount]
  );

  return (
    <Container>
      <ProductInfo>
        <Picture source={{ uri: product.picture }} />
        <View style={{ flexShrink: 1 }}>
          <ProductName>{product.title}</ProductName>
          <ProductDescription>{product.description}</ProductDescription>
        </View>
      </ProductInfo>
      <DetailsContainer>
        <DetailsText>Observação</DetailsText>
        <Details
          multiline={true}
          autoCorrect={false}
          editable={false}
          autoCapitalize="none"
          value={product.notes}
        />
      </DetailsContainer>
      <Description>
        Unidade: de&nbsp;<OldPrice>{product.price} &euro;</OldPrice>
        &nbsp;por&nbsp;
        <Price>{product.price_promotional} &euro;</Price>
      </Description>
      <Description style={{ marginTop: 4 }}>
        Recebe&nbsp;<Cashback>{product.cashback} &euro;</Cashback>
        &nbsp;de crédito após 24h
      </Description>
      <AmountAndPriceContainer>
        <AmountContainer>
          <AmountButton disabled onPress={() => {}}>
            <Minus width={52} />
          </AmountButton>
          <Amount>{amount}</Amount>
          <AmountButton disabled onPress={() => {}}>
            <Plus width={52} />
          </AmountButton>
        </AmountContainer>
        <FinalPrice>{finalPrice} &euro;</FinalPrice>
      </AmountAndPriceContainer>
    </Container>
  );
}

PlacedOrder.propTypes = {
  product: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
